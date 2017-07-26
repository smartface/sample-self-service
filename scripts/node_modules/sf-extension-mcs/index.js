const Notications = require("sf-core/notifications");
const Http = require('sf-core/net/http');
const System = require('sf-core/device/system');
const expect = require('chai').expect;
const Base64_Helper = require("./base64");
const Base64 = new Base64_Helper();

/**
 * Creates new instace of MCS
 * @class
 * @param {object} options - init object
 * @param {string} options.baseUrl - MCS Base URL
 * @param {string} options.backendId - MCS BackendId
 * @param {string} options.androidApplicationKey - MCS Android Client Key
 * @param {string} options.iOSApplicationKey - MCS iOS Client Key
 * @param {string} options.anonymousKey - MCS Basic Anonymous Key
 */
function MCS(options) {

    expect(options).to.be.a('object');
    expect(options).to.have.property('backendId').that.is.a('string');
    expect(options).to.have.property('baseUrl').that.is.a('string');

    const self = this;
    var backendID = options.backendId;
    var deviceToken;
    var baseUrl = options.baseUrl;
    var anonymousKey = options.anonymousKey;
    var authorization = anonymousKey ? "Basic " + anonymousKey : "";
    var androidApplicationKey = options.androidApplicationKey;
    var iOSApplicationKey = options.iOSApplicationKey;

    /**
     * login to MCS
     * @method
     * @param {object} options - login options
     * @param {string} options.username - MCS Username
     * @param {string} options.password - MCS Password
     * @param {MCS~loginCallback} callback for login
     * @example result:
     *   {
     *     "id": "295e450a-63f0-41fa-be43-cd2dbcb21598",
     *     "username": "joe",
     *     "email": "joe@example.com",
     *     "firstName": "Joe",
     *     "lastName": "Doe",
     *     "links": [
     *       { "rel": "canonical", "href": "/mobile/platform/users/joe" },
     *       { "rel": "self", "href": "/mobile/platform/users/joe" }
     *     ]
     *   }
     */
    this.login = function login(options, callback) {

        expect(options).to.be.a('object');
        expect(options).to.have.property('username').that.is.a('string');
        expect(options).to.have.property('password').that.is.a('string');

        var username = options.username;
        var password = options.password;

        var url = baseUrl + '/mobile/platform/users/' + username;
        var headers = {
            'oracle-mobile-api-version': '1.0',
            'Content-Type': 'application/json; charset=utf-8',
            'Oracle-Mobile-Backend-Id': backendID,
            'Authorization': 'Basic ' + Base64.encode(username + ':' + password)
        };
        var body = '';


        Http.request({
                'url': url,
                'headers': headers,
                'method': 'GET',
                'body': body

            },
            function(e) {

                authorization = 'Basic ' + Base64.encode(username + ':' + password);

                var response = JSON.parse(e.body.toString());

                if (response.id == null) {
                    callback(e.body.toString());
                }
                else {
                    callback(null, e.body.toString());
                }

            },
            function(e) {
                callback(e);
            }
        );
    };

    /**
     * @callback MCS~loginCallback
     * @param {string} err - Error
     * @param {string} result - json result
     */


    /**
     * Logs out authenticated user, using Anonymous Key if provided
     */
    this.logout = function logout() {
        authorization = anonymousKey ? "Basic " + anonymousKey : "";
    };


    /**
     * Register device push notification token to MCS
     * @method
     * @param {object} options - push notification options
     * @param {string} options.packageName - Application package name
     * @param {string} options.version - Application version
     * @param {MCS~registerDeviceTokenCallback} callback for registerDeviceToken
     * @example result:
     *   {
     *     "id": "8a8a1eff-83c3-41b4-bea8-33357962d9a7",
     *     "user": "joe",
     *     "notificationToken": "03767dea-29ac-4440-b4f6-75a755845ade",
     *     "notificationProvider": "APNS",
     *     "mobileClient": {
     *       "id": "com.oracle.myapplication",
     *       "version": "1.0",
     *       "platform": "IOS"
     *     },
     *     "modifiedOn": "2015-05-05'T'12:09:33.281'Z"
     *   }
     */
    this.registerDeviceToken = function registerDeviceToken(options, callback) {

        expect(options).to.be.a('object');
        expect(options).to.have.property('packageName').that.is.a('string');
        expect(options).to.have.property('version').that.is.a('string');


        var packageName = options.packageName;
        var version = options.version;

        Notications.registerForPushNotifications(
            function(e) {

                deviceToken = e.token;

                var notificationProvider = (System.OS == 'iOS') ? 'APNS' : 'GCM';
                var url = baseUrl + '/mobile/platform/devices/register';
                var headers = {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Oracle-Mobile-Backend-Id': backendID,
                    'Authorization': authorization
                };

                var body = {
                    notificationToken: deviceToken,
                    notificationProvider: notificationProvider,
                    mobileClient: {
                        id: packageName,
                        version: version,
                        platform: (System.OS == 'iOS') ? 'IOS' : 'ANDROID'

                    }


                };

                Http.request({
                        'url': url,
                        'headers': headers,
                        'method': 'POST',
                        'body': JSON.stringify(body, null, '\t')

                    },
                    function(e) {

                        var response = JSON.parse(e.body.toString());

                        if (response.id == null) {
                            callback(e.body.toString());
                        }
                        else {
                            callback(null, e.body.toString());
                        }

                    },
                    function(e) {
                        callback(e);
                    }
                );

            },
            function() {
                callback('Register failed.');
            }
        );
    };
    /**
     * @callback MCS~registerDeviceTokenCallback
     * @param {string} err - Error
     * @param {string} result - json result
     */


    /**
     * Deregister device push notification token from MCS
     * @method
     * @param {object} options - push notification options
     * @param {string} options.packageName - Application package name
     * @param {MCS~deregisterDeviceTokenCallback} callback for deregisterDeviceToken
     */
    this.deregisterDeviceToken = function deregisterDeviceToken(options, callback) {

        expect(options).to.be.a('object');
        expect(options).to.have.property('packageName').that.is.a('string');


        Notications.registerForPushNotifications(
            function(e) {

                var packageName = options.packageName;

                var notificationProvider = (System.OS == 'iOS') ? 'APNS' : 'GCM';
                var url = baseUrl + '/mobile/platform/devices/deregister';
                var headers = {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Oracle-Mobile-Backend-Id': backendID,
                    'Authorization': authorization
                };

                var body = {
                    notificationToken: e.token,
                    notificationProvider: notificationProvider,
                    mobileClient: {
                        id: packageName,
                        platform: (System.OS == 'iOS') ? 'IOS' : 'ANDROID'

                    }


                };


                Http.request({
                        'url': url,
                        'headers': headers,
                        'method': 'POST',
                        'body': JSON.stringify(body, null, '\t')

                    },
                    function(e) {

                        callback(null, 'Device Deleted.');
                    },
                    function(e) {
                        callback(e);
                    }
                );

            },
            function() {
                callback('Register failed.');
            }
        );
    };
    /**
     * @callback MCS~deregisterDeviceTokenCallback
     * @param {string} err - Error
     * @param {string} result
     */

    /**
     * Send Analytic Event to MCS
     * @see {@link https://docs.oracle.com/en/cloud/paas/mobile-cloud/mcsra/op-mobile-platform-analytics-events-post.html Oracle Docs}
     * @method
     * @param {object} options - Analytic options
     * @param {string} options.deviceId - Specific Device ID
     * @param {string} options.sessionId - Session ID
     * @param {object} options.body - Event json array
     * @param {MCS~sendAnalyticCallback} callback for sendAnalytic
     */
    this.sendAnalytic = function sendAnalytic(options, callback) {

        expect(options).to.be.a('object');
        expect(options).to.have.property('deviceId').that.is.a('string');
        expect(options).to.have.property('sessionId').that.is.a('string');

        var deviceID = options.deviceId;
        var sessionID = options.sessionId;
        var jsonBody = options.body;
        var applicationKey = (System.OS == 'iOS') ? iOSApplicationKey : androidApplicationKey;
        expect(applicationKey).to.be.a('string');

        if (typeof jsonBody === "object")
            jsonBody = JSON.stringify(jsonBody);

        var url = baseUrl + '/mobile/platform/analytics/events';
        var headers = {
            'Oracle-Mobile-Backend-Id': backendID,
            'authorization': authorization,
            'Content-Type': 'application/json; charset=utf-8',
            'oracle-mobile-application-key': applicationKey,
            'oracle-mobile-analytics-session-id': sessionID,
            'oracle-mobile-device-id': deviceID,
        };
        var body = jsonBody;

        Http.request({
                'url': url,
                'headers': headers,
                'method': 'POST',
                'body': body

            },
            function(e) {

                var response = JSON.parse(e.body.toString());

                if (response.message == null) {
                    callback(e.body.toString());
                }
                else {
                    callback(null, e.body.toString());
                }

            },
            function(e) {
                alert("Error " + e);
                callback(e);
            }
        );
    };
    /**
     * @callback MCS~sendAnalyticCallback
     * @param {string} err - Error
     * @param {string} result - json result
     * @example result:
     *  {"message": "1 events accepted for processing."}
     */

    /**
     * Send Analytic Event to MCS
     * @method
     * @param {object} options - Analytic options
     * @param {string} options.deviceId - Specific Device ID
     * @param {string} options.sessionId - Session ID
     * @param {object} options.eventName - Event name
     * @param {MCS~sendBasicEventCallback} callback for sendBasicEvent
     */
    this.sendBasicEvent = function sendBasicEvent(options, callback) {

        expect(options).to.be.a('object');
        expect(options).to.have.property('eventName').that.is.a('string');

        var eventName = options.eventName;

        var body = [{
            "name": eventName,
            "type": "custom",
            "timestamp": new Date().toISOString()
        }];

        options.body = body;

        self.sendAnalytic(options, callback);

    };
    /**
     * @callback MCS~sendBasicEventCallback
     * @param {string} err - Error
     * @param {string} result - json result
     * @example result:
     *  {"message": "1 events accepted for processing."}
     */


    /**
     * Get all collections list from MCS
     * @method
     * @param {MCS~getCollectionListCallback} callback for getCollectionList
     */
    this.getCollectionList = function getCollectionList(callback) {


        var url = baseUrl + '/mobile/platform/storage/collections';
        var headers = {
            'oracle-mobile-api-version': '1.0',
            'Content-Type': 'application/json; charset=utf-8',
            'Oracle-Mobile-Backend-Id': backendID,
            'Authorization': authorization
        };
        var body = '';


        Http.request({
                'url': url,
                'headers': headers,
                'method': 'GET',
                'body': body

            },
            function(e) {

                var response = JSON.parse(e.body.toString());

                if (response.items == null) {
                    callback(e.body.toString());
                }
                else {
                    var resultArr = [];
                    for (var i = 0; i < response.items.length; i++) {

                        var arrayObject = {};

                        arrayObject.id = response.items[i].id;
                        arrayObject.description = response.items[i].description;

                        resultArr.push(arrayObject);

                    }

                    callback(null, resultArr);
                }

            },
            function(e) {
                callback(e);
            }
        );
    };
    /**
     * @callback MCS~getCollectionListCallback
     * @param {string} err - Error
     * @param {object[]} result array for collections
     * @param {string} result[].id - collection id
     * @param {string} result[].description - collection description
     */


    /**
     * Get item list in collection from MCS
     * @param {string|object} options - MCS collection id
     * @param {string} options.collectionId - MCS collection id
     * @param {getItemListInCollectionCallback} callback for getItemListInCollection
     */
    this.getItemListInCollection = function getItemListInCollection(options, callback) {

        var collectionId = options;

        if (typeof options === "object" && options.collectionId)
            collectionId = options.collectionId;

        expect(collectionId).to.be.a('string');

        var url = baseUrl + '/mobile/platform/storage/collections/' + collectionId + '/objects';
        var headers = {
            'oracle-mobile-api-version': '1.0',
            'Content-Type': 'application/json; charset=utf-8',
            'Oracle-Mobile-Backend-Id': backendID,
            'Authorization': authorization
        };
        var body = '';


        Http.request({
                'url': url,
                'headers': headers,
                'method': 'GET',
                'body': body

            },
            function(e) {

                var response = JSON.parse(e.body.toString());

                if (response.items == null) {
                    callback(e.body.toString());
                }
                else {
                    callback(null, response.items);
                }

            },
            function(e) {
                callback(e);
            }
        );
    };
    /**
     * @callback MCS~getItemListInCollectionCallback
     * @param {string} err - Error
     * @param {object[]} result
     * @param {string} result[].id - item id
     * @param {string} result[].name - item name
     * @param {string} result[].contentType - item contentType
     * @param {string} result[].createdBy - item createdBy
     * @param {string} result[].createdOn - item createdOn
     * @param {string} result[].modifiedBy - item modifiedBy
     * @param {string} result[].modifiedOn - item modifiedOn
     */


    /**
     * Get item data from MCS
     * @param {object} options - Analytic options
     * @param {string} options.collectionId - MCS collection Id
     * @param {string} options.itemId - MCS item Id
     * @param {MCS~getItemCallback} callback for getItem
     *
     */
    this.getItem = function getItem(options, callback) {

        expect(options).to.be.a('object');
        expect(options).to.have.property('collectionId').that.is.a('string');
        expect(options).to.have.property('itemId').that.is.a('string');

        var collectionId = options.collectionId;
        var itemId = options.itemId;

        var url = baseUrl + '/mobile/platform/storage/collections/' + collectionId + '/objects/' + itemId;
        var headers = {
            'oracle-mobile-api-version': '1.0',
            'Content-Type': 'application/json; charset=utf-8',
            'Oracle-Mobile-Backend-Id': backendID,
            'Authorization': authorization
        };
        var body = '';


        Http.request({
                'url': url,
                'headers': headers,
                'method': 'GET',
                'body': body

            },
            function(e) {

                callback(null, e);

            },
            function(e) {
                callback(e);
            }
        );
    };
    /**
     * @callback MCS~getItemCallback
     * @param {string} err - Error
     * @param {string} result - base64 encoded file data
     */

    /**
     * Store item to MCS
     * @param {object} options - Analytic options
     * @param {string} options.collectionId - MCS collection Id
     * @param {string} options.itemName - item full name
     * @param {string} options.base64EncodeData - item base64 encode data
     * @param {string} options.contentType - item content type
     * @param {MCS~storeItemCallback} callback for storeItem
     */
    this.storeItem = function storeItem(options, callback) {

        expect(options).to.be.a('object');
        expect(options).to.have.property('collectionId').that.is.a("string");
        expect(options).to.have.property('itemName').that.is.a('string');
        expect(options).to.have.property('base64EncodeData').that.is.a('string');
        expect(options).to.have.property('contentType').that.is.a('string');

        var collectionId = options.collectionId;
        var itemName = options.itemName;
        var base64EncodeData = options.base64EncodeData;
        var contentType = options.contentType;


        var url = baseUrl + '/mobile/platform/storage/collections/' + collectionId + '/objects';
        var headers = {
            //'Content-Type': 'application/json',
            'Oracle-Mobile-Backend-Id': backendID,
            'Authorization': authorization,
            'Oracle-Mobile-Name': itemName,
            'Content-Type': contentType
        };
        var body = base64EncodeData;

        Http.request({
                'url': url,
                'headers': headers,
                'method': 'POST',
                'body': body

            },
            function(e) {

                callback(null, e.body.toString());

            },
            function(e) {
                callback(e);
            }
        );
    };
    /**
     * @callback MCS~storeItemCallback
     * @param {string} err - Error
     * @param {string} result - json result
     * @example
     *   {
     *     "id": "947119e5-b45c-498b-a643-dca279b24f07",
     *     "name": "947119e5-b45c-498b-a643-dca279b24f07",
     *     "user": "8c8f1a5a-e56b-494b-9a99-f03d562c1ee7",
     *     "contentLength": 59,
     *     "contentType": "text/plain",
     *     "eTag": "\"1\"",
     *     "createdBy": "mobileuser",
     *     "createdOn": "2015-06-24T02:59:08Z",
     *     "modifiedBy": "mobileuser",
     *     "modifiedOn": "2015-06-24T02:59:08Z",
     *     "links": [
     *       {
     *         "rel": "canonical",
     *         "href": "/mobile/platform/storage/collections/technicianNotes/objects/947119e5-b45c-498b-a643-dca279b24f07?user=8c8f1a5a-e56b-494b-9a99-f03d562c1ee7"
     *       },
     *       {
     *         "rel": "self",
     *         "href": "/mobile/platform/storage/collections/technicianNotes/objects/947119e5-b45c-498b-a643-dca279b24f07"
     *       }
     *     ]
     *   }
     */

    /**
     * Delete item data from MCS
     * @param {object} options - Analytic options
     * @param {string} options.collectionId - MCS collection Id
     * @param {string} options.itemId - MCS item Id
     * @param {MCS~deleteItemCallback} callback for deleteItem
     */
    this.deleteItem = function deleteItem(options, callback) {

        expect(options).to.be.a('object');
        expect(options).to.have.property('collectionId').that.is.a("string");
        expect(options).to.have.property('itemId').that.is.a('string');

        var collectionId = options.collectionId;
        var itemId = options.itemId;

        var url = baseUrl + '/mobile/platform/storage/collections/' + collectionId + '/objects/' + itemId;
        var headers = {
            'Oracle-Mobile-Backend-Id': backendID,
            'Authorization': authorization
        };
        var body = '';

        Http.request({
                'url': url,
                'headers': headers,
                'method': 'DELETE',
                'body': body

            },
            function(e) {

                callback(null, 'Item Deleted.');

            },
            function(e) {
                callback(e);
            }
        );
    };
    /**
     * @callback MCS~deleteItemCallback
     * @param {string} err - Error
     * @param {string} result - info message
     */

    /**
     * Create api request options for MCS Custom API
     * @method
     * @param {object} options - Analytic options
     * @param {string} options.apiName - MCS Api Name
     * @param {string} options.endpointName - MCS Endpoint Name
     * @param {MCS~createRequestOptionsCallback} callback for createRequestOptions
     */
    this.createRequestOptions = function createRequestOptions(options) {
        expect(options).to.be.a('object');
        expect(options).to.have.property('apiName').that.is.a('string');
        expect(options).to.have.property('endpointName').that.is.a('string');

        var apiName = options.apiName;
        var endpointName = options.endpointName;
        var urlBase = baseUrl + '/mobile/custom/' + apiName + '/' + endpointName + '?';
        var headersBase = {
            'Content-Type': 'application/json',
            'Oracle-Mobile-Backend-Id': backendID,
            'Authorization': authorization
        };

        return {
            url: urlBase,
            headers: headersBase
        };

    };
     /**
     * @callback MCS~createRequestOptionsCallback
     * @param {string} err - Error
     * @param {string} result
     */
     
    
    /**
     * Get application policies from MCS
     * @method
     * @param {MCS~getAppPoliciesCallback} callback for getAppPolicies
     */
    this.getAppPolicies = function getAppPolicies(callback) {

        var url = baseUrl + '/mobile/platform/appconfig/client';

        var headers = {
            'Content-Type': 'application/json',
            'Oracle-Mobile-Backend-Id': backendID,
            'Authorization': authorization
        };
        var body = '';

        Http.request({
                'url': url,
                'headers': headers,
                'method': 'GET',
                'body': body

            },
            function(e) {

                callback(null, e.body.toString());

            },
            function(e) {
                callback(e);
            }
        );
    };
    /**
     * @callback MCS~getAppPoliciesCallback
     * @param {string} err - Error
     * @param {string} result
     */


    /**
     * Get Device Location List by Name
     * @method
     * @param {object} options
     * @param {string} options.name
     * @param {MCS~getDeviceLocationsByNameCallback} callback for getDeviceLocationsByName
     *
     */
    this.getDeviceLocationsByName = function getDeviceLocationsByName(options, callback) {

        expect(options).to.be.a('object');
        expect(options).to.have.property('name').that.is.a("string");

        var optionsLocal = {};
        optionsLocal['key'] = 'name';
        optionsLocal['value'] = options.name;
        optionsLocal['pathStr'] = 'devices';
        optionsLocal['isQuery'] = true;

        getLocationList(optionsLocal, callback);

    };
    /**
     * @callback MCS~getDeviceLocationsByNameCallback
     * @param {string} err - Error
     * @param {string} result
     */


    /**
     * Get Device Location List by Id
     * @method
     * @param {object} options
     * @param {string} options.id
     * @param {MCS~getDeviceLocationsByIdCallback} callback for getDeviceLocationsById
     */
    this.getDeviceLocationsById = function getDeviceLocationsById(options, callback) {

        expect(options).to.be.a('object');
        expect(options).to.have.property('id').that.is.a("string");

        var optionsLocal = {};
        optionsLocal['key'] = 'name';
        optionsLocal['value'] = options.id;
        optionsLocal['pathStr'] = 'devices';
        optionsLocal['isQuery'] = false;

        getLocationList(optionsLocal, callback);

    };
    /**
     * @callback MCS~getDeviceLocationsByIdCallback
     * @param {string} err - Error
     * @param {string} result
     */


    /**
     * Get Places List by Name
     * @method
     * @param {object} options
     * @param {string} options.name
     * @param {MCS~getPlaceByNameCallback} callback for getPlaceByName
     */
    this.getPlaceByName = function getPlaceByName(options, callback) {

        expect(options).to.be.a('object');
        expect(options).to.have.property('name').that.is.a("string");

        var optionsLocal = {};
        optionsLocal['key'] = 'name';
        optionsLocal['value'] = options.name;
        optionsLocal['pathStr'] = 'places';
        optionsLocal['isQuery'] = true;

        getLocationList(optionsLocal, callback);

    };
    /**
     * @callback MCS~getPlaceByNameCallback
     * @param {string} err - Error
     * @param {string} result
     */



    /**
     * Get Places List by Id,
     * @method
     * @param {object} options
     * @param {string} options.id
     * @param {MCS~getPlaceByIdCallback} callback for getPlaceById
     *
     */
    this.getPlaceById = function getPlaceById(options, callback) {

        expect(options).to.be.a('object');
        expect(options).to.have.property('id').that.is.a("string");

        var optionsLocal = {};
        optionsLocal['key'] = 'name';
        optionsLocal['value'] = options.id;
        optionsLocal['pathStr'] = 'places';
        optionsLocal['isQuery'] = false;

        getLocationList(optionsLocal, callback);

    };
    /**
     * @callback MCS~getPlaceByIdCallback
     * @param {string} err - Error
     * @param {string} result
     */


    /**
     * Get Asset List by Name
     * @method
     * @param {object} options
     * @param {string} options.name
     * @param {MCS~getAssetByNameCallback} callback for getAssetByName
     *
     */
    this.getAssetByName = function getAssetByName(options, callback) {

        expect(options).to.be.a('object');
        expect(options).to.have.property('name').that.is.a("string");

        var optionsLocal = {};
        optionsLocal['key'] = 'name';
        optionsLocal['value'] = options.name;
        optionsLocal['pathStr'] = 'assets';
        optionsLocal['isQuery'] = true;

        getLocationList(optionsLocal, callback);

    };
    /**
     * @callback MCS~getAssetByNameCallback
     * @param {string} err - Error
     * @param {string} result
     */


    /**
     * Get Asset List by Id
     * @method
     * @param {object} options
     * @param {string} options.id
     * @param {MCS~getAssetByIdCallback} callback for getAssetById
     *
     */
    this.getAssetById = function getAssetById(options, callback) {

        expect(options).to.be.a('object');
        expect(options).to.have.property('id').that.is.a("string");


        var optionsLocal = {};
        optionsLocal['key'] = 'name';
        optionsLocal['value'] = options.id;
        optionsLocal['pathStr'] = 'assets';
        optionsLocal['isQuery'] = false;

        getLocationList(optionsLocal, callback);

    };
    /**
     * @callback MCS~getAssetByIdCallback
     * @param {string} err - Error
     * @param {string} result
     */


    /**
     * Get Location List Base Function
     * @method
     * @param {object} options
     * @param {string} options.key
     * @param {string} options.value
     * @param {string} options.pathStr
     * @param {string} options.isQuery
     * @param {MCS~getLocationListCallback} callback for getLocationList
     * 
     */
    function getLocationList(options, callback) {

        var key = options.key;
        var value = options.value;
        var pathStr = options.pathStr;
        var isQuery = options.isQuery;

        var url = baseUrl + '/mobile/platform/location/' + pathStr;


        if (isQuery) {

            url += '?' + key + '=' + value;
        }
        else {
            url += '/' + value;
        }


        var headers = {
            'Content-Type': 'application/json',
            'Oracle-Mobile-Backend-Id': backendID,
            'Authorization': authorization,
            key: value
        };
        var body = '';

        Http.request({
                'url': url,
                'headers': headers,
                'method': 'GET',
                'body': body

            },
            function(e) {

                callback(null, e.body.toString());

            },
            function(e) {
                callback(e);
            }
        );
    }
    /**
     * @callback MCS~getLocationListCallback
     * @param {string} err - Error
     * @param {string} result
     */

}


module.exports = MCS;
