/* globals swipeViewIndex */
const extend = require('js-base/core/extend');
const ChatbotPgDesign = require('ui/ui_pgChatbot');
const chatBotReplyStructure = require('components/ChatBotReplyStructure');
const WebSocket = require('sf-core/net/websocket');
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
var maxWidth = Screen.width * 3 / 5;
var layoutHeightOfChat = 0;
var heightExpand = 50;
var widthExpand = 60;
//HelveticaNeu_bc

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

function onShow(superOnShow) {
  superOnShow();

  setOnMessageTrigger.call(this);
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();

  const page = this;
  this.layoutHeaderBar.headerBarTitle.text = "CHATBOT";
  this.chatScrollView.layout.height = layoutHeightOfChat;

  myWebSocket = new WebSocket({ url: "https://self-service-server-smartface.azurewebsites.net/" });

  this.layoutHeaderBar.rightItem1.width = 25;
  this.layoutHeaderBar.rightItem1.height = 25;
  this.layoutHeaderBar.rightItem1.image = Image.createFromFile("images://ic_info_outline_white.png");

  this.sendLabel.onTouch = function() {
    sender = true;
    applyMessageOnScreen.call(page);
  }.bind(page);

  this.layoutHeaderBar.rightItem1.onTouch = function() {
    initAlerView().show();
  }.bind(page);
}

function applyMessageOnScreen() {
  const page = this;

  var messageComponent = new chatBotReplyStructure();
  var senderText = page.sendText.text;
  var currentText = ((sender) ? senderText : evaluatedData);
  var sizeOfLabelObj = sizeOfLabel(currentText);
  messageComponent.chatBotLabel.text = currentText;

  if (sender) {
    page.chatScrollView.layout.addChild(messageComponent, 'messageComponent', '', {
      marginTop: 0,
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

    replyToWs(currentText);
    page.sendText.text = "";
  }
  else {
    page.chatScrollView.layout.addChild(messageComponent, 'messageComponent', '', {
      marginTop: 0,
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
  layoutHeightOfChat += Math.ceil(messageComponent.maxHeight);
  this.chatScrollView.layout.height = layoutHeightOfChat;

  // Make sure new messages to stick to the text area
  let chatScrollViewMarginTop = this.chatScrollView.height - layoutHeightOfChat;
  this.chatScrollView.dispatch({
    type: "updateUserStyle",
    userStyle: {
      marginTop: chatScrollViewMarginTop > 0 ? chatScrollViewMarginTop : 0
    }
  });

  this.chatScrollView.layout.applyLayout();

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
      let evaluateData = constString.concat(" ", text + " page.. ");
      evaluatedData = evaluateData;
      applyMessageOnScreen.call(page);

      //sets timer to enable to user intract with chatbot
      nativagetFoundPage(text).call(page);
    }
    else {
      let evaluateData = data.replace(noInclude, "");
      evaluatedData = evaluateData;
      applyMessageOnScreen.call(page);
    }
  };
}

function replyToWs(text) {
  myWebSocket.send({ data: text });
}

function nativagetFoundPage(pageName) {
  PageFinder.findPage(pageName, function(tabName, index) {
    if (tabName !== null && index !== null) {
      //sets the index
      // tabBar.setIndex(tabName);
      var tabPath = "/tabs/" + tabName;
      console.log(" tabName " + tabName);
      swipeViewIndex.currentIndex = index;

      Timer.setTimeout({
        task: () => {
          //navigates the desired page
          console.log("tabPath"+tabPath)
          this.router.push(tabPath)
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
    text: "OK",
    onClick: function() {
      console.log("OK clicked.");
    }
  });

  return inforAlertView;
}

function sizeOfLabel(text) {
  var sizeOfLabelObj = Font.create(Font.DEFAULT, 16, Font.NORMAL).sizeOfString(text, maxWidth);
  return sizeOfLabelObj = { height: sizeOfLabelObj.height + heightExpand, width: sizeOfLabelObj.width + widthExpand };
}

function scrollBasedOnScrollHeight(scrollHeight) {
  if (layoutHeightOfChat / scrollHeight >= 1) {
    return true;
  }
  else {
    return false;
  }
}


module && (module.exports = ChatbotPg);
