/* eslint-disable */
export default{init,callbacks}
function init(params, callbacks, modules) {
	var appKey = params.appKey;
	var token = params.token;
	var navi = params.navi || "";
	modules = modules || {};
	var RongIMLib = modules.RongIMLib || window.RongIMLib;
	var RongIMClient = RongIMLib.RongIMClient;
	var protobuf = modules.protobuf || null;



	//私有云切换navi导航，私有云格式 '120.92.10.214:8888'
	if(navi !== ""){
		config.navi = navi;
	}

	//私有云切换api,私有云格式 '172.20.210.38:81:8888'
	var api = params.api || "";
	if(api !== ""){
		config.api = api;
	}

	//support protobuf url + function
	if(protobuf != null){
		config.protobuf = protobuf;
	};
	RongIMLib.RongIMClient.init(appKey);
	// 初始化视频通话
  var options = {
    container : {
      local: null //local 为放置视频窗口的 DOM 节点
    }
  };
// 初始化 WebCallLib
  RongIMLib.RongCallLib.init(options);
  var instance = RongIMClient.getInstance();
  var CallLibInstance = RongIMLib.RongCallLib.getInstance();
	// 连接状态监听器
	RongIMClient.setConnectionStatusListener({
		onChanged: function (status) {
			// console.log('status----->'+status);
		    switch (status) {
		        case RongIMLib.ConnectionStatus["CONNECTED"]:
		        case 0:
		        	console.log("连接成功")
		            callbacks.getInstance && callbacks.getInstance(instance);
                callbacks.getClibInstance&& callbacks.getClibInstance(CallLibInstance);
		            break;

		        case RongIMLib.ConnectionStatus["CONNECTING"]:
		        case 1:
		        	console.log("连接中")
		            break;

		        case RongIMLib.ConnectionStatus["DISCONNECTED"]:
		        case 2:
		        	console.log("当前用户主动断开链接")
		            break;

		        case RongIMLib.ConnectionStatus["NETWORK_UNAVAILABLE"]:
		        case 3:
		        	console.log("网络不可用")
		            break;

		        case RongIMLib.ConnectionStatus["CONNECTION_CLOSED"]:
		        case 4:
		        	console.log("未知原因，连接关闭")
		            break;

		        case RongIMLib.ConnectionStatus["KICKED_OFFLINE_BY_OTHER_CLIENT"]:
		        case 6:
		        	console.log("用户账户在其他设备登录，本机会被踢掉线")
		            break;

		        case RongIMLib.ConnectionStatus["DOMAIN_INCORRECT"]:
		        case 12:
		        	console.log("当前运行域名错误，请检查安全域名配置")
		            break;
		    }
		}
	});

  RongIMClient.setOnReceiveMessageListener({
    onReceived: function(message) {
      switch (message.messageType) {
        case RongIMClient.MessageType.InviteMessage:
          // 收到音视频通话邀请
          break;
        case RongIMClient.MessageType.SummaryMessage:
          // 结束音频通话后收到
          break;
        case RongIMClient.MessageType.RingingMessage:
          // 响铃消息
          break;
        case RongIMClient.MessageType.AcceptMessage:
          // 同意接听音视频通话消息
          break;
        case RongIMClient.MessageType.MediaModifyMessage:
          // 视频转音频消息
          break;
        //other conversationTypes
      }
    }
  });
	/*
	文档：http://www.rongcloud.cn/docs/web.html#3、设置消息监听器

	注意事项：
		1：为了看到接收效果，需要另外一个用户向本用户发消息
		2：判断会话唯一性 ：conversationType + targetId
		3：显示消息在页面前，需要判断是否属于当前会话，避免消息错乱。
		4：消息体属性说明可参考：http://rongcloud.cn/docs/api/js/index.html
	*/
	RongIMClient.setOnReceiveMessageListener({
		// 接收到的消息
		onReceived: function (message) {
		    // 判断消息类型
			console.log("新消息: " + message.targetId);
			console.log(message);
			callbacks.receiveNewMessage && callbacks.receiveNewMessage(message);
		}
	});

	//开始链接
	RongIMClient.connect(token, {
		onSuccess: function(userId) {
			callbacks.getCurrentUser && callbacks.getCurrentUser({userId:userId});
			console.log("链接成功，用户id----->：" + userId);
		},
		onTokenIncorrect: function() {
			console.log('token无效');
		},
		onError:function(errorCode){
			console.log(errorCode);
		}
	});
}

