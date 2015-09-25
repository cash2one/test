define('common:widget/oui/lib/city/1.0.1/new-city', ['require', 'exports', 'module', 'common:widget/oui/lib/jquery/1.9.1/jquery'],function(require, exports, module){
	var $ = require('common:widget/oui/lib/jquery/1.9.1/jquery');
var PC = {
    /** 省份数据 */
    p : [ {
        k : "北京",
        v : "北京"
    }, {
        k : "上海",
        v : "上海"
    }, {
        k : "广东",
        v : "广东"
    }, {
        k : "江苏",
        v : "江苏"
    }, {
        k : "浙江",
        v : "浙江"
    }, {
        k : "山东",
        v : "山东"
    }, {
        k : "天津",
        v : "天津"
    }, {
        k : "重庆",
        v : "重庆"
    }, {
        k : "四川",
        v : "四川"
    }, {
        k : "河北",
        v : "河北"
    }, {
        k : "山西",
        v : "山西"
    }, {
        k : "内蒙古",
        v : "内蒙古"
    }, {
        k : "辽宁",
        v : "辽宁"
    }, {
        k : "吉林",
        v : "吉林"
    }, {
        k : "黑龙江",
        v : "黑龙江"
    }, {
        k : "安徽",
        v : "安徽"
    }, {
        k : "福建",
        v : "福建"
    }, {
        k : "江西",
        v : "江西"
    }, {
        k : "河南",
        v : "河南"
    }, {
        k : "湖南",
        v : "湖南"
    }, {
        k : "广西",
        v : "广西"
    }, {
        k : "湖北",
        v : "湖北"
    }, {
        k : "陕西",
        v : "陕西"
    }, {
        k : "新疆",
        v : "新疆"
    }, {
        k : "青海",
        v : "青海"
    }, {
        k : "宁夏",
        v : "宁夏"
    }, {
        k : "甘肃",
        v : "甘肃"
    }, {
        k : "西藏",
        v : "西藏"
    }, {
        k : "云南",
        v : "云南"
    }, {
        k : "海南",
        v : "海南"
    }, {
        k : "贵州",
        v : "贵州"
    }, {
        k : "香港",
        v : "香港"
    }, {
        k : "澳门",
        v : "澳门"
    }, {
        k : "台湾",
        v : "台湾"
    } ],
    /** 城市数据 */
    c : [ {
        k : "东城",
        v : "北京"
    },{
        k : "西城",
        v : "北京"
    },{
        k : "崇文",
        v : "北京"
    },{
        k : "宣武",
        v : "北京"
    },{
        k : "朝阳",
        v : "北京"
    },{
        k : "丰台",
        v : "北京"
    },{
        k : "石景山",
        v : "北京"
    },{
        k : "海淀",
        v : "北京"
    },{
        k : "门头沟",
        v : "北京"
    },{
        k : "房山",
        v : "北京"
    },{
        k : "通州",
        v : "北京"
    },{
        k : "顺义",
        v : "北京"
    },{
        k : "昌平",
        v : "北京"
    },{
        k : "大兴",
        v : "北京"
    },{
        k : "怀柔",
        v : "北京"
    },{
        k : "平谷",
        v : "北京"
    },{
        k : "密云",
        v : "北京"
    },{
        k : "延庆",
        v : "北京"
    }, {
        k : "黄浦",
        v : "上海"
    },  {
        k : "卢湾",
        v : "上海"
    },  {
        k : "徐汇",
        v : "上海"
    },  {
        k : "长宁",
        v : "上海"
    },  {
        k : "静安",
        v : "上海"
    },  {
        k : "普陀",
        v : "上海"
    },  {
        k : "闸北",
        v : "上海"
    },  {
        k : "虹口",
        v : "上海"
    },  {
        k : "杨浦",
        v : "上海"
    },  {
        k : "闵行",
        v : "上海"
    },  {
        k : "宝山",
        v : "上海"
    },  {
        k : "嘉定",
        v : "上海"
    },  {
        k : "浦东新区",
        v : "上海"
    },  {
        k : "金山",
        v : "上海"
    },  {
        k : "松江",
        v : "上海"
    },  {
        k : "青浦",
        v : "上海"
    },  {
        k : "南汇",
        v : "上海"
    },  {
        k : "奉贤",
        v : "上海"
    },  {
        k : "崇明",
        v : "上海"
    }, {
        k : "广州",
        v : "广东"
    }, {
        k : "汕尾",
        v : "广东"
    }, {
        k : "阳江",
        v : "广东"
    }, {
        k : "揭阳",
        v : "广东"
    }, {
        k : "茂名",
        v : "广东"
    }, {
        k : "江门",
        v : "广东"
    }, {
        k : "韶关",
        v : "广东"
    }, {
        k : "惠州",
        v : "广东"
    }, {
        k : "梅州",
        v : "广东"
    }, {
        k : "汕头",
        v : "广东"
    }, {
        k : "深圳",
        v : "广东"
    }, {
        k : "珠海",
        v : "广东"
    }, {
        k : "佛山",
        v : "广东"
    }, {
        k : "肇庆",
        v : "广东"
    }, {
        k : "湛江",
        v : "广东"
    }, {
        k : "中山",
        v : "广东"
    }, {
        k : "河源",
        v : "广东"
    }, {
        k : "清远",
        v : "广东"
    }, {
        k : "云浮",
        v : "广东"
    }, {
        k : "潮州",
        v : "广东"
    }, {
        k : "东莞",
        v : "广东"
    }, {
        k : "南京",
        v : "江苏"
    }, {
        k : "无锡",
        v : "江苏"
    }, {
        k : "镇江",
        v : "江苏"
    }, {
        k : "苏州",
        v : "江苏"
    }, {
        k : "南通",
        v : "江苏"
    }, {
        k : "扬州",
        v : "江苏"
    }, {
        k : "盐城",
        v : "江苏"
    }, {
        k : "徐州",
        v : "江苏"
    }, {
        k : "淮阴",
        v : "江苏"
    }, {
        k : "连云",
        v : "江苏"
    }, {
        k : "常州",
        v : "江苏"
    }, {
        k : "泰州",
        v : "江苏"
    }, {
        k : "宿迁",
        v : "江苏"
    }, {
        k : "淮安",
        v : "江苏"
    }, {
        k : "连云港",
        v : "江苏"
    }, {
        k : "衢州",
        v : "浙江"
    }, {
        k : "杭州",
        v : "浙江"
    }, {
        k : "湖州",
        v : "浙江"
    }, {
        k : "嘉兴",
        v : "浙江"
    }, {
        k : "宁波",
        v : "浙江"
    }, {
        k : "绍兴",
        v : "浙江"
    }, {
        k : "台州",
        v : "浙江"
    }, {
        k : "温州",
        v : "浙江"
    }, {
        k : "丽水",
        v : "浙江"
    }, {
        k : "金华",
        v : "浙江"
    }, {
        k : "舟山",
        v : "浙江"
    }, {
        k : "菏泽",
        v : "山东"
    }, {
        k : "济南",
        v : "山东"
    }, {
        k : "青岛",
        v : "山东"
    }, {
        k : "淄博",
        v : "山东"
    }, {
        k : "德州",
        v : "山东"
    }, {
        k : "烟台",
        v : "山东"
    }, {
        k : "潍坊",
        v : "山东"
    }, {
        k : "济宁",
        v : "山东"
    }, {
        k : "泰安",
        v : "山东"
    }, {
        k : "临沂",
        v : "山东"
    }, {
        k : "滨州",
        v : "山东"
    }, {
        k : "东营",
        v : "山东"
    }, {
        k : "威海",
        v : "山东"
    }, {
        k : "枣庄",
        v : "山东"
    }, {
        k : "日照",
        v : "山东"
    }, {
        k : "莱芜",
        v : "山东"
    }, {
        k : "聊城",
        v : "山东"
    }, {
        k : "和平",
        v : "天津"
    }, {
        k : "河东",
        v : "天津"
    },{
        k : "河西",
        v : "天津"
    },{
        k : "南开",
        v : "天津"
    },{
        k : "河北",
        v : "天津"
    },{
        k : "红桥",
        v : "天津"
    },{
        k : "塘沽",
        v : "天津"
    },{
        k : "汉沽",
        v : "天津"
    },{
        k : "大港",
        v : "天津"
    },{
        k : "东丽",
        v : "天津"
    },{
        k : "西青",
        v : "天津"
    },{
        k : "津南",
        v : "天津"
    },{
        k : "北辰",
        v : "天津"
    },{
        k : "武清",
        v : "天津"
    },{
        k : "宝坻",
        v : "天津"
    },{
        k : "宁河",
        v : "天津"
    },{
        k : "静海",
        v : "天津"
    },{
        k : "蓟县",
        v : "天津"
    },{
        k : "万州",
        v : "重庆"
    },{
        k : "涪陵",
        v : "重庆"
    },{
        k : "渝中",
        v : "重庆"
    },{
        k : "大渡口",
        v : "重庆"
    },{
        k : "江北",
        v : "重庆"
    },{
        k : "沙坪坝",
        v : "重庆"
    },{
        k : "九龙坡",
        v : "重庆"
    },{
        k : "南岸",
        v : "重庆"
    },{
        k : "北碚",
        v : "重庆"
    },{
        k : "万盛",
        v : "重庆"
    },{
        k : "双桥",
        v : "重庆"
    },{
        k : "渝北",
        v : "重庆"
    },{
        k : "巴南",
        v : "重庆"
    },{
        k : "黔江",
        v : "重庆"
    },{
        k : "长寿",
        v : "重庆"
    },{
        k : "江津",
        v : "重庆"
    },{
        k : "合川",
        v : "重庆"
    },{
        k : "永川",
        v : "重庆"
    },{
        k : "南川",
        v : "重庆"
    },{
        k : "綦江",
        v : "重庆"
    },{
        k : "潼南",
        v : "重庆"
    },{
        k : "铜梁",
        v : "重庆"
    },{
        k : "大足",
        v : "重庆"
    },{
        k : "荣昌",
        v : "重庆"
    },{
        k : "璧山",
        v : "重庆"
    },{
        k : "梁平",
        v : "重庆"
    },{
        k : "城口",
        v : "重庆"
    },{
        k : "丰都",
        v : "重庆"
    },{
        k : "垫江",
        v : "重庆"
    },{
        k : "武隆",
        v : "重庆"
    },{
        k : "忠县",
        v : "重庆"
    },{
        k : "开县",
        v : "重庆"
    },{
        k : "云阳",
        v : "重庆"
    },{
        k : "奉节",
        v : "重庆"
    },{
        k : "巫山",
        v : "重庆"
    },{
        k : "巫溪",
        v : "重庆"
    },{
        k : "石柱土家族",
        v : "重庆"
    },{
        k : "秀山土家族苗族",
        v : "重庆"
    },{
        k : "酉阳土家族苗族",
        v : "重庆"
    },{
        k : "彭水苗族土家族",
        v : "重庆"
    }, {
        k : "成都",
        v : "四川"
    }, {
        k : "攀枝花",
        v : "四川"
    }, {
        k : "自贡",
        v : "四川"
    }, {
        k : "绵阳",
        v : "四川"
    }, {
        k : "南充",
        v : "四川"
    }, {
        k : "达州",
        v : "四川"
    }, {
        k : "遂宁",
        v : "四川"
    }, {
        k : "广安",
        v : "四川"
    }, {
        k : "巴中",
        v : "四川"
    }, {
        k : "泸州",
        v : "四川"
    }, {
        k : "宜宾",
        v : "四川"
    }, {
        k : "内江",
        v : "四川"
    }, {
        k : "乐山",
        v : "四川"
    }, {
        k : "凉山彝族",
        v : "四川"
    }, {
        k : "雅安",
        v : "四川"
    }, {
        k : "甘孜藏族",
        v : "四川"
    }, {
        k : "阿坝藏族羌族",
        v : "四川"
    }, {
        k : "德阳",
        v : "四川"
    }, {
        k : "广元",
        v : "四川"
    }, {
        k : "资阳",
        v : "四川"
    }, {
        k : "邯郸",
        v : "河北"
    }, {
        k : "石家庄",
        v : "河北"
    }, {
        k : "保定",
        v : "河北"
    }, {
        k : "张家口",
        v : "河北"
    }, {
        k : "承德",
        v : "河北"
    }, {
        k : "唐山",
        v : "河北"
    }, {
        k : "廊坊",
        v : "河北"
    }, {
        k : "沧州",
        v : "河北"
    }, {
        k : "衡水",
        v : "河北"
    }, {
        k : "邢台",
        v : "河北"
    }, {
        k : "秦皇岛",
        v : "河北"
    }, {
        k : "朔州",
        v : "山西"
    }, {
        k : "忻州",
        v : "山西"
    }, {
        k : "太原",
        v : "山西"
    }, {
        k : "大同",
        v : "山西"
    }, {
        k : "阳泉",
        v : "山西"
    }, {
        k : "晋中",
        v : "山西"
    }, {
        k : "长治",
        v : "山西"
    }, {
        k : "晋城",
        v : "山西"
    }, {
        k : "临汾",
        v : "山西"
    }, {
        k : "吕梁地区",
        v : "山西"
    }, {
        k : "运城",
        v : "山西"
    }, {
        k : "呼伦贝尔",
        v : "内蒙古"
    }, {
        k : "呼和浩特",
        v : "内蒙古"
    }, {
        k : "包头",
        v : "内蒙古"
    }, {
        k : "乌海",
        v : "内蒙古"
    }, {
        k : "乌兰察布盟",
        v : "内蒙古"
    }, {
        k : "通辽",
        v : "内蒙古"
    }, {
        k : "赤峰",
        v : "内蒙古"
    }, {
        k : "鄂尔多斯",
        v : "内蒙古"
    }, {
        k : "巴彦淖尔盟",
        v : "内蒙古"
    }, {
        k : "锡林郭勒盟",
        v : "内蒙古"
    }, {
        k : "兴安盟",
        v : "内蒙古"
    }, {
        k : "阿拉善盟",
        v : "内蒙古"
    }, {
        k : "沈阳",
        v : "辽宁"
    }, {
        k : "铁岭",
        v : "辽宁"
    }, {
        k : "大连",
        v : "辽宁"
    }, {
        k : "鞍山",
        v : "辽宁"
    }, {
        k : "抚顺",
        v : "辽宁"
    }, {
        k : "本溪",
        v : "辽宁"
    }, {
        k : "丹东",
        v : "辽宁"
    }, {
        k : "锦州",
        v : "辽宁"
    }, {
        k : "营口",
        v : "辽宁"
    }, {
        k : "阜新",
        v : "辽宁"
    }, {
        k : "辽阳",
        v : "辽宁"
    }, {
        k : "朝阳",
        v : "辽宁"
    }, {
        k : "盘锦",
        v : "辽宁"
    }, {
        k : "葫芦岛",
        v : "辽宁"
    }, {
        k : "长春",
        v : "吉林"
    }, {
        k : "吉林",
        v : "吉林"
    }, {
        k : "延边朝鲜族",
        v : "吉林"
    }, {
        k : "四平",
        v : "吉林"
    }, {
        k : "通化",
        v : "吉林"
    }, {
        k : "白城",
        v : "吉林"
    }, {
        k : "辽源",
        v : "吉林"
    }, {
        k : "松原",
        v : "吉林"
    }, {
        k : "白山",
        v : "吉林"
    }, {
        k : "延边",
        v : "吉林"
    }, {
        k : "哈尔滨",
        v : "黑龙江"
    }, {
        k : "齐齐哈尔",
        v : "黑龙江"
    }, {
        k : "牡丹江",
        v : "黑龙江"
    }, {
        k : "佳木斯",
        v : "黑龙江"
    }, {
        k : "绥化",
        v : "黑龙江"
    }, {
        k : "黑河",
        v : "黑龙江"
    }, {
        k : "大兴安岭地区",
        v : "黑龙江"
    }, {
        k : "伊春",
        v : "黑龙江"
    }, {
        k : "大庆",
        v : "黑龙江"
    }, {
        k : "七台河",
        v : "黑龙江"
    }, {
        k : "鸡西",
        v : "黑龙江"
    }, {
        k : "鹤岗",
        v : "黑龙江"
    }, {
        k : "双鸭山",
        v : "黑龙江"
    }, {
        k : "滁州",
        v : "安徽"
    }, {
        k : "合肥",
        v : "安徽"
    }, {
        k : "蚌埠",
        v : "安徽"
    }, {
        k : "芜湖",
        v : "安徽"
    }, {
        k : "淮南",
        v : "安徽"
    }, {
        k : "马鞍山",
        v : "安徽"
    }, {
        k : "安庆",
        v : "安徽"
    }, {
        k : "宿州",
        v : "安徽"
    }, {
        k : "阜阳",
        v : "安徽"
    }, {
        k : "黄山",
        v : "安徽"
    }, {
        k : "淮北",
        v : "安徽"
    }, {
        k : "铜陵",
        v : "安徽"
    }, {
        k : "宣城",
        v : "安徽"
    }, {
        k : "六安",
        v : "安徽"
    }, {
        k : "巢湖",
        v : "安徽"
    }, {
        k : "池州",
        v : "安徽"
    }, {
        k : "福州",
        v : "福建"
    }, {
        k : "厦门",
        v : "福建"
    }, {
        k : "宁德",
        v : "福建"
    }, {
        k : "莆田",
        v : "福建"
    }, {
        k : "泉州",
        v : "福建"
    }, {
        k : "漳州",
        v : "福建"
    }, {
        k : "龙岩",
        v : "福建"
    }, {
        k : "三明",
        v : "福建"
    }, {
        k : "南平",
        v : "福建"
    }, {
        k : "鹰潭",
        v : "江西"
    }, {
        k : "新余",
        v : "江西"
    }, {
        k : "南昌",
        v : "江西"
    }, {
        k : "九江",
        v : "江西"
    }, {
        k : "上饶",
        v : "江西"
    }, {
        k : "抚州",
        v : "江西"
    }, {
        k : "宜春",
        v : "江西"
    }, {
        k : "吉安",
        v : "江西"
    }, {
        k : "赣州",
        v : "江西"
    }, {
        k : "景德镇",
        v : "江西"
    }, {
        k : "萍乡",
        v : "江西"
    }, {
        k : "商丘",
        v : "河南"
    }, {
        k : "郑州",
        v : "河南"
    }, {
        k : "安阳",
        v : "河南"
    }, {
        k : "新乡",
        v : "河南"
    }, {
        k : "许昌",
        v : "河南"
    }, {
        k : "平顶山",
        v : "河南"
    }, {
        k : "信阳",
        v : "河南"
    }, {
        k : "南阳",
        v : "河南"
    }, {
        k : "开封",
        v : "河南"
    }, {
        k : "洛阳",
        v : "河南"
    }, {
        k : "焦作",
        v : "河南"
    }, {
        k : "鹤壁",
        v : "河南"
    }, {
        k : "濮阳",
        v : "河南"
    }, {
        k : "周口",
        v : "河南"
    }, {
        k : "漯河",
        v : "河南"
    }, {
        k : "驻马店",
        v : "河南"
    }, {
        k : "三门峡",
        v : "河南"
    }, {
        k : "岳阳",
        v : "湖南"
    }, {
        k : "长沙",
        v : "湖南"
    }, {
        k : "湘潭",
        v : "湖南"
    }, {
        k : "株洲",
        v : "湖南"
    }, {
        k : "衡阳",
        v : "湖南"
    }, {
        k : "郴州",
        v : "湖南"
    }, {
        k : "常德",
        v : "湖南"
    }, {
        k : "益阳",
        v : "湖南"
    }, {
        k : "娄底",
        v : "湖南"
    }, {
        k : "邵阳",
        v : "湖南"
    }, {
        k : "湘西土家族苗族",
        v : "湖南"
    }, {
        k : "张家界",
        v : "湖南"
    }, {
        k : "怀化",
        v : "湖南"
    }, {
        k : "永州",
        v : "湖南"
    }, {
        k : "吉首",
        v : "湖南"
    }, {
        k : "防城港",
        v : "广西"
    }, {
        k : "南宁",
        v : "广西"
    }, {
        k : "柳州地区",
        v : "广西"
    }, {
        k : "桂林",
        v : "广西"
    }, {
        k : "梧州",
        v : "广西"
    }, {
        k : "贵港",
        v : "广西"
    }, {
        k : "百色",
        v : "广西"
    }, {
        k : "钦州",
        v : "广西"
    }, {
        k : "河池",
        v : "广西"
    }, {
        k : "北海",
        v : "广西"
    }, {
        k : "玉林",
        v : "广西"
    }, {
        k : "崇左",
        v : "广西"
    }, {
        k : "来宾",
        v : "广西"
    }, {
        k : "武汉",
        v : "湖北"
    }, {
        k : "襄樊",
        v : "湖北"
    }, {
        k : "鄂州",
        v : "湖北"
    }, {
        k : "孝感",
        v : "湖北"
    }, {
        k : "黄冈",
        v : "湖北"
    }, {
        k : "黄石",
        v : "湖北"
    }, {
        k : "咸宁",
        v : "湖北"
    }, {
        k : "荆州",
        v : "湖北"
    }, {
        k : "宜昌",
        v : "湖北"
    }, {
        k : "恩施土家族苗族",
        v : "湖北"
    }, {
        k : "十堰",
        v : "湖北"
    }, {
        k : "随州",
        v : "湖北"
    }, {
        k : "荆门",
        v : "湖北"
    }, {
        k : "天门",
        v : "湖北"
    }, {
        k : "西安",
        v : "陕西"
    }, {
        k : "咸阳",
        v : "陕西"
    }, {
        k : "延安",
        v : "陕西"
    }, {
        k : "榆林",
        v : "陕西"
    }, {
        k : "渭南",
        v : "陕西"
    }, {
        k : "商洛",
        v : "陕西"
    }, {
        k : "安康",
        v : "陕西"
    }, {
        k : "汉中",
        v : "陕西"
    }, {
        k : "宝鸡",
        v : "陕西"
    }, {
        k : "铜川",
        v : "陕西"
    }, {
        k : "塔城地区",
        v : "新疆"
    }, {
        k : "哈密地区",
        v : "新疆"
    }, {
        k : "和田地区",
        v : "新疆"
    }, {
        k : "阿勒泰地区",
        v : "新疆"
    }, {
        k : "克孜勒苏柯尔克孜",
        v : "新疆"
    }, {
        k : "博尔塔拉蒙古",
        v : "新疆"
    }, {
        k : "克拉玛依",
        v : "新疆"
    }, {
        k : "乌鲁木齐",
        v : "新疆"
    }, {
        k : "奎屯",
        v : "新疆"
    }, {
        k : "石河子",
        v : "新疆"
    }, {
        k : "昌吉回族",
        v : "新疆"
    }, {
        k : "吐鲁番地区",
        v : "新疆"
    }, {
        k : "巴音郭楞蒙古",
        v : "新疆"
    }, {
        k : "阿克苏地区",
        v : "新疆"
    }, {
        k : "喀什地区",
        v : "新疆"
    }, {
        k : "伊犁哈萨克",
        v : "新疆"
    }, {
        k : "海北藏族",
        v : "青海"
    }, {
        k : "西宁",
        v : "青海"
    }, {
        k : "海东地区",
        v : "青海"
    }, {
        k : "黄南藏族",
        v : "青海"
    }, {
        k : "海南藏族",
        v : "青海"
    }, {
        k : "果洛藏族",
        v : "青海"
    }, {
        k : "玉树藏族",
        v : "青海"
    }, {
        k : "海西蒙古族藏族",
        v : "青海"
    }, {
        k : "格尔木",
        v : "青海"
    }, {
        k : "银川",
        v : "宁夏"
    }, {
        k : "石嘴山",
        v : "宁夏"
    }, {
        k : "吴忠",
        v : "宁夏"
    }, {
        k : "中卫",
        v : "宁夏"
    }, {
        k : "固原",
        v : "宁夏"
    }, {
        k : "临夏回族",
        v : "甘肃"
    }, {
        k : "兰州",
        v : "甘肃"
    }, {
        k : "定西地区",
        v : "甘肃"
    }, {
        k : "平凉地区",
        v : "甘肃"
    }, {
        k : "庆阳地区",
        v : "甘肃"
    }, {
        k : "金昌",
        v : "甘肃"
    }, {
        k : "张掖",
        v : "甘肃"
    }, {
        k : "酒泉",
        v : "甘肃"
    }, {
        k : "天水",
        v : "甘肃"
    }, {
        k : "陇南地区",
        v : "甘肃"
    }, {
        k : "甘南藏族",
        v : "甘肃"
    }, {
        k : "白银",
        v : "甘肃"
    }, {
        k : "嘉峪关",
        v : "甘肃"
    }, {
        k : "拉萨",
        v : "西藏"
    }, {
        k : "日喀则地区",
        v : "西藏"
    }, {
        k : "山南地区",
        v : "西藏"
    }, {
        k : "林芝地区",
        v : "西藏"
    }, {
        k : "昌都地区",
        v : "西藏"
    }, {
        k : "那曲地区",
        v : "西藏"
    }, {
        k : "阿里地区",
        v : "西藏"
    }, {
        k : "樟木口岸",
        v : "西藏"
    }, {
        k : "西双版纳傣族",
        v : "云南"
    }, {
        k : "德宏傣族景颇族",
        v : "云南"
    }, {
        k : "昭通",
        v : "云南"
    }, {
        k : "昆明",
        v : "云南"
    }, {
        k : "大理白族",
        v : "云南"
    }, {
        k : "红河哈尼族彝族",
        v : "云南"
    }, {
        k : "曲靖",
        v : "云南"
    }, {
        k : "保山",
        v : "云南"
    }, {
        k : "文山壮族苗族",
        v : "云南"
    }, {
        k : "玉溪",
        v : "云南"
    }, {
        k : "楚雄彝族",
        v : "云南"
    }, {
        k : "思茅地区",
        v : "云南"
    }, {
        k : "临沧地区",
        v : "云南"
    }, {
        k : "怒江傈僳族",
        v : "云南"
    }, {
        k : "迪庆藏族",
        v : "云南"
    }, {
        k : "丽江地区",
        v : "云南"
    }, {
        k : "海口",
        v : "海南"
    },{
        k : "三亚",
        v : "海南"
    },{
        k : "五指山",
        v : "海南"
    },{
        k : "琼海",
        v : "海南"
    },{
        k : "儋州",
        v : "海南"
    },{
        k : "文昌",
        v : "海南"
    },{
        k : "万宁",
        v : "海南"
    },{
        k : "东方",
        v : "海南"
    },{
        k : "定安",
        v : "海南"
    },{
        k : "屯昌",
        v : "海南"
    },{
        k : "澄迈",
        v : "海南"
    },{
        k : "临高",
        v : "海南"
    },{
        k : "白沙黎族",
        v : "海南"
    },{
        k : "昌江黎族",
        v : "海南"
    },{
        k : "乐东黎族",
        v : "海南"
    },{
        k : "陵水黎族",
        v : "海南"
    },{
        k : "保亭黎族苗族",
        v : "海南"
    },{
        k : "琼中黎族苗族",
        v : "海南"
    }, {
        k : "贵阳",
        v : "贵州"
    }, {
        k : "遵义",
        v : "贵州"
    }, {
        k : "安顺",
        v : "贵州"
    }, {
        k : "黔南布依族苗族",
        v : "贵州"
    }, {
        k : "黔东南苗族侗族",
        v : "贵州"
    }, {
        k : "铜仁地区",
        v : "贵州"
    }, {
        k : "毕节地区",
        v : "贵州"
    }, {
        k : "六盘水",
        v : "贵州"
    }, {
        k : "黔西南布依族苗族",
        v : "贵州"
    }, {
        k : "中西区",
        v : "香港"
    }, {
        k : "湾仔区",
        v : "香港"
    }, {
        k : "东区",
        v : "香港"
    }, {
        k : "南区",
        v : "香港"
    }, {
        k : "油尖旺区",
        v : "香港"
    }, {
        k : "深水埗区",
        v : "香港"
    }, {
        k : "九龙城区",
        v : "香港"
    }, {
        k : "黄大仙区",
        v : "香港"
    }, {
        k : "观塘区",
        v : "香港"
    }, {
        k : "荃湾区",
        v : "香港"
    }, {
        k : "葵青区",
        v : "香港"
    }, {
        k : "沙田区",
        v : "香港"
    }, {
        k : "西贡区",
        v : "香港"
    }, {
        k : "大埔区",
        v : "香港"
    }, {
        k : "北区",
        v : "香港"
    }, {
        k : "元朗区",
        v : "香港"
    }, {
        k : "屯门区",
        v : "香港"
    }, {
        k : "离岛区",
        v : "香港"
    }, {
        k : "澳门",
        v : "澳门"
    }, {
        k : "台北",
        v : "台湾"
    },  {
        k : "高雄",
        v : "台湾"
    }, {
        k : "基隆",
        v : "台湾"
    }, {
        k : "台中",
        v : "台湾"
    }, {
        k : "台南",
        v : "台湾"
    }, {
        k : "新竹",
        v : "台湾"
    }, {
        k : "嘉义",
        v : "台湾"
    }],

    /** 初始化SELECT */

    init:function(provinceId,cityid){
    	var pr = eval(PC.p);
    	var ci = eval(PC.c);
    	$(provinceId).empty();
    	$(cityid).empty();
    	for(var index in pr){
    		$(provinceId).append("<li datavalue="+pr[index].k+"><span>"+pr[index].k+"</span></li>");
    	};



    	$(".J_popBox").delegate('li','click',function(e){

    		var tar = $(e.currentTarget);

    		 if(tar.parent('ul').attr('id') == "J_select_jiguan"){
    				var dom = $("#J_select_jiguan1");
    				dom.parent('div').find('.J_txt').text('请选择');
    				dom.parent('div').find('input').attr('value','');
	    		 dom.empty();
	    		  for(var index in ci){
	    		     if(ci[index].v == tar.attr("datavalue"))
	    		     dom.append("<li datavalue="+ci[index].k+"><span>"+ci[index].k+"</span></li>");
	    	    	};
    		    }

    		 if(tar.parent('ul').attr('id') == "J_select_hukou"){
    				var dom = $("#J_select_hukou1");
    				dom.parent('div').find('.J_txt').text('请选择');
    				dom.parent('div').find('input').attr('value','');
	    		    dom.empty();
	    		  for(var index in ci){
	    		     if(ci[index].v == tar.attr("datavalue"))
	    		     dom.append("<li datavalue="+ci[index].k+"><span>"+ci[index].k+"</span></li>");
	    	    	};
    		    }

    		 if(tar.parent('ul').attr('id') == "J_select_gongzuo"){
    				var dom = $("#J_select_gongzuo1");
    				dom.parent('div').find('.J_txt').text('请选择');
    				dom.parent('div').find('input').attr('value','');
	    		 dom.empty();
	    		  for(var index in ci){
	    		     if(ci[index].v == tar.attr("datavalue"))
	    		     dom.append("<li datavalue="+ci[index].k+"><span>"+ci[index].k+"</span></li>");
	    	    	};
    		    }

    		  });

    },

     readcity:function(){

    	 var ci = eval(PC.c);
     	var pd = $("#pData").data("province").split("|");

     	var p1=[],p2=[],p3=[];

     	if(pd[0] !=null){
     		p1 = pd[0].split(":");
     	}
 		if(pd[1] !=null){
 	    		p2 = pd[1].split(":");
 	    	}
 		if(pd[2] !=null){
 			p3 = pd[2].split(":");
 		}

 		if($.trim(p1[0]) == "") {p1[0] = "请选择"; p1[1] = "请选择";}
 		if($.trim(p2[0]) == "") {p2[0] = "请选择"; p2[1] = "请选择";}
 		if($.trim(p3[0]) == "") {p3[0] = "请选择"; p3[1] = "请选择";}


     	$('#homeProvince').attr('value',$.trim(p1[0]));
     	$('#homeCity').attr('value',$.trim(p1[1]));
     	$('#liveProvince').attr('value',$.trim(p2[0]));
     	$('#liveCity').attr('value',$.trim(p2[1]));
     	$('#province').attr('value',$.trim(p3[0]));
     	$('#city').attr('value',$.trim(p3[1]));

     	$('#homeProvince').parent('div').find('.J_txt').text($.trim(p1[0]));
     	$('#homeCity').parent('div').find('.J_txt').text($.trim(p1[1]));
     	$('#liveProvince').parent('div').find('.J_txt').text($.trim(p2[0]));
     	$('#liveCity').parent('div').find('.J_txt').text($.trim(p2[1]));
     	$('#province').parent('div').find('.J_txt').text($.trim(p3[0]));
     	$('#city').parent('div').find('.J_txt').text($.trim(p3[1]));


//城市根据省份插入数据
    	for(var index in ci){
    		if(ci[index].v ==$.trim(p1[0]))
    		  $('#J_select_jiguan1').append("<li datavalue="+ci[index].k+"><span>"+ci[index].k+"</span></li>");
    	};

    	for(var index in ci){
    		if(ci[index].v ==$.trim(p2[0]))
    		  $('#J_select_hukou1').append("<li datavalue="+ci[index].k+"><span>"+ci[index].k+"</span></li>");
    	};
    	for(var index in ci){
    		if(ci[index].v ==$.trim(p3[0]))
    		  $('#J_select_gongzuo1').append("<li datavalue="+ci[index].k+"><span>"+ci[index].k+"</span></li>");
    	};

     }

};

    module.exports=PC;
});
