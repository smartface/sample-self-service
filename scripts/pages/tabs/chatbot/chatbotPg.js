/* globals swipeViewIndex */
const extend = require('js-base/core/extend');
const ChatbotPgDesign = require('ui/ui_chatbotPg');
const chatBotReplyStructure = require('components/ChatBotReplyStructure');
const FlexLayout = require('sf-core/ui/flexlayout');
const addChild = require("@smartface/contx/lib/smartface/action/addChild");
const Color = require('sf-core/ui/color');
const WebSocket = require('sf-core/net/websocket');
const Router = require('sf-core/router');
const PageFinder = require("./PageFinder");
const Timer = require("sf-core/timer");
const Image = require('sf-core/ui/image');
const AlertView = require('sf-core/ui/alertview');
const Screen = require('sf-core/device/screen');
const Font = require('sf-core/ui/font');
const ScrollView = require('sf-core/ui/scrollview');

var noInclude = '_NOINCLUDE,';
var sender;
var evaluatedData;

const ChatbotPg = extend(ChatbotPgDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
var myWebSocket = null;
var heightOfChatScrollview;

function onShow(superOnShow) {
  superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
  this.layoutHeaderBar.headerBarTitle.text = "ChatBot"


  heightOfChatScrollview = Screen.height * 1 / 4;
  this.chatScrollView.layout.height = heightOfChatScrollview;

  // placeHolder.scrollViewPlaceHolder = new FlexLayout();

  // this.chatScrollView.layout.addChild(placeHolder.scrollViewPlaceHolder, 'placeHolder', '', {
  //   height: placeHolderHeight,
  //   flexProps: {
  //     positionType: "RELATIVE",
  //     alignSelf: "FLEX_START"
  //   },
  //   backgroundColor: '#FFFFFF'
  // });

  myWebSocket = new WebSocket({ url: "https://safe-sands-45992.herokuapp.com" });
  setOnMessageTrigger();

  this.layoutHeaderBar.rightItem1.width = 25;
  this.layoutHeaderBar.rightItem1.height = 25;
  this.layoutHeaderBar.rightItem1.image = Image.createFromFile("images://ic_info_outline_white.png")

  this.sendLabel.onTouch = function() {
    sender = true;
    applyMessageOnScreen();
  }.bind(this)

  this.layoutHeaderBar.rightItem1.onTouch = function() {
    initAlerView().show();
  }.bind(this)
}

// function send_onPress() {
//   const page = this;
//   var text = page.sendText.text;
//   var sizeOfLabelObj = sizeOfLabel(text);

//   if (text) {

//     var userSendMessage = new chatBotReplyStructure();
//     userSendMessage.chatBotLabel.text = text;

//     page.chatScrollView.layout.addChild(userSendMessage, 'newSendMessage', '', {
//       marginTop: 15,
//       marginRight: 5,
//       marginLeft: 5,
//       width: null,
//       maxHeight: sizeOfLabelObj.height,
//       maxWidth: sizeOfLabelObj.width,
//       flexGrow: 1,
//       flexProps: {
//         flexDirection: "ROW_REVERSE",
//         positionType: "RELATIVE",
//         alignSelf: "FLEX_END"
//       },
//       backgroundColor: '#FFFFFF'
//     });

//     userSendMessage.chatBotLabel.dispatch({
//       type: "updateUserStyle",
//       userStyle: {
//         textColor: "#FFFFFF",
//         backgroundColor: "#4A90E2"
//       }
//     });

//     userSendMessage.contentfl.dispatch({
//       type: "updateUserStyle",
//       userStyle: {
//         backgroundColor: "#4A90E2"
//       }
//     });

//     userSendMessage.messageIconImageView.dispatch({
//       type: "updateUserStyle",
//       userStyle: {
//         width: 0,
//         height: 0,
//         visible: false
//       }
//     });

//     //calculate scrollview height dynamic
//     heightOfChatScrollview += sizeOfLabelObj.height;
//     // placeHolderHeight -= sizeOfLabelObj.height;
//     this.chatScrollView.layout.height = heightOfChatScrollview;
//     // placeHolder.scrollViewPlaceHolder.dispatch({
//     //   type: "updateUserStyle",
//     //   userStyle: {
//     //     height: placeHolderHeight
//     //   }
//     // });

//     page.layout.applyLayout();

//     if (scrollBasedOnScrollHeight(page.chatScrollView.height)) {
//       page.chatScrollView.scrollToEdge(ScrollView.Edge.BOTTOM);
//     };

//     //send to Websocket server
//     replyToWs(text);
//     //after sending text make it empty
//     page.sendText.text = "";
//   }
//   else {
//     alert("Please enter something");
//   }
// }

// function send_onReceived(text) {
//   const page = this;

//   var sizeOfLabelObj = sizeOfLabel(text);

//   if (text) {

//     var wsSendMessage = new chatBotReplyStructure();
//     wsSendMessage.chatBotLabel.text = text;

//     page.chatScrollView.layout.addChild(wsSendMessage, 'wsSendMessage', '', {
//       marginTop: 15,
//       marginRight: 5,
//       marginLeft: 5,
//       width: null,
//       maxWidth: sizeOfLabelObj.width,
//       maxHeight: sizeOfLabelObj.height,
//       flexGrow: 1,
//       flexProps: {
//         flexDirection: "ROW",
//         positionType: "RELATIVE",
//         alignSelf: "FLEX_START",
//       },
//       backgroundColor: '#FFFFFF'
//     });

//     //calculate scrollview height dynamic
//     heightOfChatScrollview += sizeOfLabelObj.height;
//     this.chatScrollView.layout.height = heightOfChatScrollview;
//     // placeHolderHeight -= sizeOfLabelObj.height;
//     // this.chatScrollView.layout.height = heightOfChatScrollview;
//     // placeHolder.scrollViewPlaceHolder.dispatch({
//     //   type: "updateUserStyle",
//     //   userStyle: {
//     //     height: placeHolderHeight
//     //   }
//     // });

//     page.layout.applyLayout();

//     //In order to achive samebehavior implement timeOut.
//     if (scrollBasedOnScrollHeight(page.chatScrollView.height)) {
//       setTimeout(function() {
//         page.chatScrollView.scrollToEdge(ScrollView.Edge.BOTTOM);
//       }, 200);

//     }
//   }
//   else {
//     alert("Please enter something");
//   }
// }

function applyMessageOnScreen() {
  const page = this;

  var messageComponent = new chatBotReplyStructure();

  if (sender) {

    var text = page.sendText.text;
    var sizeOfLabelObj = sizeOfLabel(text);
    messageComponent.chatBotLabel.text = text;

    page.chatScrollView.layout.addChild(messageComponent, 'messageComponent', '', {
      marginTop: 15,
      marginRight: 5,
      marginLeft: 5,
      width: null,
      maxHeight: sizeOfLabelObj.height,
      maxWidth: sizeOfLabelObj.width,
      flexGrow: 1,
      flexProps: {
        flexDirection: "ROW_REVERSE",
        positionType: "RELATIVE",
        alignSelf: "FLEX_END"
      },
      backgroundColor: '#FFFFFF'
    });

    messageComponent.chatBotLabel.dispatch({
      type: "updateUserStyle",
      userStyle: {
        textColor: "#FFFFFF",
        backgroundColor: "#4A90E2"
      }
    });

    messageComponent.contentfl.dispatch({
      type: "updateUserStyle",
      userStyle: {
        backgroundColor: "#4A90E2"
      }
    });

    messageComponent.messageIconImageView.dispatch({
      type: "updateUserStyle",
      userStyle: {
        width: 0,
        height: 0,
        visible: false
      }
    });
  }
  else {
    var sizeOfLabelObj = sizeOfLabel(evaluatedData);

    page.chatScrollView.layout.addChild(messageComponent, 'messageComponent', '', {
      marginTop: 15,
      marginRight: 5,
      marginLeft: 5,
      width: null,
      maxWidth: sizeOfLabelObj.width,
      maxHeight: sizeOfLabelObj.height,
      flexGrow: 1,
      flexProps: {
        flexDirection: "ROW",
        positionType: "RELATIVE",
        alignSelf: "FLEX_START",
      },
      backgroundColor: '#FFFFFF'
    });
  }

  //calculate scrollview height dynamic
  heightOfChatScrollview += sizeOfLabelObj.height;
  this.chatScrollView.layout.height = heightOfChatScrollview;
  // placeHolderHeight -= sizeOfLabelObj.height;
  // this.chatScrollView.layout.height = heightOfChatScrollview;
  // placeHolder.scrollViewPlaceHolder.dispatch({
  //   type: "updateUserStyle",
  //   userStyle: {
  //     height: placeHolderHeight
  //   }
  // });

  page.layout.applyLayout();

  //In order to achive samebehavior implement timeOut.
  if (scrollBasedOnScrollHeight(page.chatScrollView.height)) {
    setTimeout(function() {
      page.chatScrollView.scrollToEdge(ScrollView.Edge.BOTTOM);
    }, 200);

  }
}

function setOnMessageTrigger() {
  const page = this;
  myWebSocket.onMessage = function(e) {

    sender = false;
    var data = e.string;

    if (data.search(noInclude) === -1) {
      var text = data;
      var constString = "Succeeded! I am navigating you to "
      var evaluateData = constString.concat(" ", text + " page.. ");
      evaluatedData = evaluateData;
      applyMessageOnScreen.call(page);

      //sets timer to enable to user intract with chatbot
      nativagetFoundPage(text);
    }
    else {
      var evaluateData = data.replace(noInclude, "");
      evaluatedData = evaluateData;
      applyMessageOnScreen.call(page);
    }

    console.log("message is " + JSON.stringify(e));
  };
}

function replyToWs(text) {
  myWebSocket.send({ data: text });
}

function nativagetFoundPage(pageName) {
  PageFinder.findPage(pageName, function(tabName, index) {
    if (tabName !== null && index !== null) {
      //sets the index
      tabBar.setIndex(tabName);
      var tabPath = "tabs/" + tabName;
      swipeViewIndex.currentIndex = index;

      Timer.setTimeout({
        task: () => {
          //navigates the desired page
          Router.go(tabPath)
        },
        delay: 2000
      });
    }
  });
}

function initAlerView() {
  var inforAlertView = new AlertView({
    title: "Ask For",
    message: 'Pages \n -Leave Management \n -Expense Management \n -Salary \n -Employment History \n -Employee Directory \n -Leaveapprovals \n -My Company \n Or Type for keywords as leave, approval etc.'
  });

  inforAlertView.addButton({
    index: AlertView.ButtonType.POSITIVE,
    text: "Okey",
    onClick: function() {
      console.log("Okey clicked.");
    }
  });

  return inforAlertView;
}

function sizeOfLabel(text) {
  var sizeOfLabelObj = Font.create(Font.DEFAULT, 17, Font.NORMAL).sizeOfString(text, 250);
  return sizeOfLabelObj = { height: sizeOfLabelObj.height + 50, width: sizeOfLabelObj.width + 60 };
}

function scrollBasedOnScrollHeight(scrollHeight) {
  if (heightOfChatScrollview / scrollHeight >= 1) {
    return true;
  }
  else {
    return false;
  }
}


module && (module.exports = ChatbotPg);
