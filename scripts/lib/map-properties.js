module.exports = exports = mapProperties;

function mapProperties(targetObject, sourceObject, properties) {
    var propDefinitions = {};
    for(var p in properties) {
        var prop = properties[p];
        propDefinitions[prop] = createPropertyDefinitionObject(sourceObject, prop);
    }
    Object.defineProperties(targetObject, propDefinitions);
}

function createPropertyDefinitionObject(sourceObject, propertyName) {
    return {
        enumerable: true,
        configurable: true,
        get: function() {
            return sourceObject[propertyName];
        },
        set: function(value) {
            return sourceObject[propertyName] = value;
        }
    };
}