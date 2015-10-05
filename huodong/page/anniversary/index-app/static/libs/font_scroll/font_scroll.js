define(function(require, exports, module){

    var jQuery = require('jquery');

    (function($){
        $.fn.FontScroll = function(options){
            var d = {time: 3000,s: 'fontColor',num: 1}
            var o = $.extend(d,options);

            this.children('ul').addClass('line');
            var _con = this.children('ul');
            // console.log(_con);
            var _conH = _con.height() || 430; //滚动总高度
            var _conChildH = _con.children().eq(0).height() || 43;//一次滚动高度
            var _temp = _conChildH;  //临时变量
            var _time = d.time;  //滚动间隔
            var _s = d.s;  //滚动间隔

            _con.clone().insertAfter(_con);//初始化克隆
            // debugger;
            //样式控制
            var num = d.num;
            var _p = this.find('li');
            var allNum = _p.length;

            _p.eq(num).addClass(_s);


            var timeID = setInterval(Up,_time);

            this.hover(function(){
                clearInterval(timeID)
            },function(){
                timeID = setInterval(Up,_time);
            });

            function Up(){
                _con.animate({marginTop: '-'+_conChildH});
                //样式控制
                _p.removeClass(_s);
                num += 1;
                _p.eq(num).addClass(_s);

                // console.log(_conH,_conChildH);

                if(_conH == _conChildH){
                    _con.animate({marginTop: '-'+_conChildH},"normal",over);
                } else {
                    _conChildH += _temp;
                }
            }
            function over(){
                
                _con.attr("style",'margin-top:430');
                _conChildH = _temp;
                num = 1;
                _p.removeClass(_s);
                _p.eq(num).addClass(_s);
            }
        }
    })(jQuery);

});