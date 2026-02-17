//Tue Feb 17 2026 03:19:39 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
var userAgent = navigator.userAgent.toLowerCase();
var isApp = userAgent.indexOf("leadeon") > -1;
if (isApp) {
  document.getElementById("external-view").style.display = "none";
  document.getElementById("internal-view").style.display = "block";
  autoLogin();
} else {
  document.getElementById("external-view").style.display = "block";
  document.getElementById("internal-view").style.display = "none";
}
function jumpToApp() {
  var _0x2f161b = window.location.host;
  var _0x332fbb = _0x2f161b + "/ssoLogin";
  var _0x6cb320 = "&channelId=P00000049303";
  if (/iphone|ipad|ipod/.test(userAgent)) {
    window.location.href = "cn.10086.app://" + _0x332fbb + _0x6cb320;
  } else {
    if (/android/.test(userAgent)) {
      window.location.href = "com.greenpoint://android.mc10086.activity?url=" + _0x332fbb + _0x6cb320;
    } else {
      alert("请在手机上打开此页面");
    }
  }
}
function autoLogin() {
  var _0x4c9989 = false;
  leadeon.userStatus({
    debug: _0x4c9989,
    success: function (_0x32e7fd) {
      var _0x351bca = _0x32e7fd.status;
      var _0x446a53 = _0x32e7fd.otherStatus;
      if (_0x351bca == 0 && _0x446a53 == 0) {
        leadeon.showLogin({
          debug: _0x4c9989,
          success: function (_0x351c28) {},
          error: function (_0x53a0ed) {
            alert("无法拉起登录框，请手动登录~");
          }
        });
      } else {
        leadeon.checkSessionIsvalid({
          success: function (_0x2ad697) {
            if (_0x2ad697.status == 1) {
              leadeon.getUserInfo({
                debug: _0x4c9989,
                success: function (_0x217390) {
                  try {
                    var _0x30d373 = _0x217390.token;
                    var _0x2259b8 = document.getElementById("token-display");
                    var _0x30d154 = JSON.stringify(_0x217390, null, 2);
                    function _0x4c49b0(_0x4bf1a0) {
                      var _0x171454 = encodeURIComponent(_0x4bf1a0);
                      var _0x37f671 = "fmcc-toolmune-secret";
                      var _0x198901 = "";
                      for (var _0x59eabe = 0; _0x59eabe < _0x171454.length; _0x59eabe++) {
                        _0x198901 += String.fromCharCode(_0x171454.charCodeAt(_0x59eabe) ^ _0x37f671.charCodeAt(_0x59eabe % _0x37f671.length));
                      }
                      return btoa(_0x198901).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
                    }
                    var _0x2bbcaa = _0x4c49b0(JSON.stringify(_0x217390));
                    try {
                      sessionStorage.setItem("ssoDebugInfo", _0x2bbcaa);
                    } catch (_0x4814c2) {}
                    if (_0x2259b8) {
                      _0x2259b8.innerText = _0x30d154;
                    }
                    if (_0x30d373) {
                      window.location.replace("/toolmune/" + _0x2bbcaa);
                    } else {
                      alert("登录信息格式错误: 无法获取Token");
                    }
                  } catch (_0x365e4e) {
                    alert("解析用户信息失败: " + _0x365e4e.message);
                  }
                },
                error: function (_0x7999f) {
                  alert("未获取到APP登录信息,请重新登录APP后操作~");
                }
              });
            } else {
              leadeon.overTime();
            }
          }
        });
      }
    },
    error: function (_0xce5eae) {
      alert("未检测到APP登录信息,请重新登录APP后操作~");
    }
  });
}
(function () {
  "use strict";

  function _0x4e1151() {
    document.body.innerHTML = "Access Denied.";
  }
  function _0x21787a() {
    const _0x5effb0 = function () {
      return !1;
    }.constructor("debugger");
    setInterval(function () {
      _0x5effb0();
    }, 100);
  }
  function _0x577dfa() {
    const _0x37ac17 = 160;
    setInterval(function () {
      const _0xcda16e = window.outerWidth - window.innerWidth > _0x37ac17,
        _0x31ff9c = window.outerHeight - window.innerHeight > _0x37ac17;
      if (_0xcda16e || _0x31ff9c) {
        _0x4e1151();
      }
    }, 1000);
  }
  function _0x100139() {
    setInterval(function () {
      const _0x507cab = performance.now();
      for (let _0x377ef2 = 0; _0x377ef2 < 10000; _0x377ef2++) {
        /a/.test("a");
      }
      debugger;
      const _0x42b7b0 = performance.now();
      if (_0x42b7b0 - _0x507cab > 50) {
        _0x4e1151();
      }
    }, 2000);
  }
  function _0x2b4b86() {
    ["log", "warn", "info", "error", "table", "clear", "trace"].forEach(function (_0x1009d2) {
      console[_0x1009d2] = function () {};
    });
  }
  function _0x1bcb97() {
    const _0x28e264 = function () {
        return !0;
      },
      _0x3313a8 = _0x28e264.toString();
    if (_0x3313a8.indexOf("\n") !== -1 || _0x3313a8.indexOf("    ") !== -1) {
      _0x4e1151();
    }
  }
  function _0x56ef85() {
    try {
      _0x2b4b86();
      _0x1bcb97();
      _0x21787a();
      _0x577dfa();
      _0x100139();
    } catch (_0x133670) {}
  }
  document.readyState === "complete" ? _0x56ef85() : window.addEventListener("load", _0x56ef85);
})();
(function (_0x14e3ff, _0x1c87be, _0xf3b4ae) {
  _0xf3b4ae = "al";
  try {
    _0xf3b4ae += "ert";
    _0x1c87be = encode_version;
    if (!(typeof _0x1c87be !== "undefined" && _0x1c87be === "jsjiami.com.v5")) {
      _0x14e3ff[_0xf3b4ae]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x2dfb70) {
    _0x14e3ff[_0xf3b4ae]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";