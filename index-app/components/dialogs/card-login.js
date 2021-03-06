define(function (require, exports, module){

  var bridge = require('bridge');
  var login = bridge.webviewLogin;
  var register = bridge.webviewRegister;

  var tpl = [
    '<div class="modal_header"></div>',
    '<span class="btn-close btn-close-pos"></span>',
    '<div class="login_wrap">',
        '<h3>您还没有登录哦</h3>',
        '<div class="button_wrap">',
           '<a href="javascript:void(0);" onclick="login()" class="login">登录</a>',
           '<a href="javascript:void(0);" onclick="register()" class="register">注册</a>',
        '</div>',
    '</div>',
    '<div class="modal_footer"></div>'
  ];

  var str = tpl.join("");
  
  module.exports = str;
});