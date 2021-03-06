define(function (require, exports, module){

  var bridge = require('bridge');
  var login = bridge.webviewLogin;
  var register = bridge.webviewRegister;

  var tpl = [
    '<span class="btn-close btn-close-pos"></span>',
    '<div class="signup_login_wrap">',
        '<h3>请登录人人贷账号报名</h3>',
        '<div class="button_wrap">',
           '<a href="javascript:void(0);" onclick="login()" class="login">登录</a>',
           '<a href="javascript:void(0);" onclick="register()" class="register">注册</a>',
        '</div>',
    '</div>'
  ];

  var str = tpl.join("");
  
  module.exports = str;
});
