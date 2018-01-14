 var homeModule =angular.module('homeModule',[]);
 homeModule.controller('homeController',function ($scope) {
     $scope.interfaceDatas = [
         {'value': 'http://www.wpswan.com/mzr/vipparse/index.php?url=', 'desc': '请选择接口（默认梦中人解析优酷丶爱奇艺丶芒果TV丶乐视丶搜狐丶1905接口）'},
         {'value': 'http://jx.api.163ren.com/vod.php?url=', 'desc': '163人解析优酷丶芒果TV丶乐视接口'},
         {'value': 'http://www.82190555.com/video.php?url=', 'desc': '无名小站解析优酷丶爱奇艺丶芒果TV丶乐视接口丶搜狐'},
         {'value': 'https://jiexi.071811.cc/jx.php?url=', 'desc': '石头解析优酷丶爱奇艺丶芒果TV丶乐视丶搜狐接口'},
         {'value': 'http://vip.yingyanxinwen.cn/vip/index.php?url=', 'desc': '言朋影院解析优酷丶爱奇艺丶芒果TV丶乐视丶搜狐丶1905接口'},
         {'value': 'http://www.a305.org/yun.php?url=', 'desc': '眼睛会下雨解析爱奇艺丶芒果TV丶乐视丶1905接口'},
         {'value': 'https://jx.maoyun.tv/index.php?id=', 'desc': '猫云解析爱奇艺丶芒果TV丶搜狐接口'},
         {'value': 'https://api.daidaitv.com/index/?url=', 'desc': '呆呆解析爱奇艺接口'},
         {'value': 'http://api.baiyug.cn/vip/index.php?url=', 'desc': '百域阁解析爱奇艺丶腾讯视频丶芒果TV丶乐视丶搜狐接口'},
         {'value': 'http://www.tuhao13.com/yunparse/index.php?url=', 'desc': '土豪网解析爱奇艺丶乐视接口'},
         {'value': 'http://www.ou522.cn/t2/1.php?url=', 'desc': '云上解析爱奇艺丶芒果TV丶乐视丶搜狐丶1905接口'},
         {'value': 'http://www.a305.org/tong.php?url=', 'desc': '海播解析爱奇艺丶芒果TV丶乐视丶1905接口'},
         {'value': 'http://aikan-tv.com/?url=', 'desc': '爱看解析芒果TV接口'},
         {'value': 'https://api.vparse.org/?url=', 'desc': 'vparse解析芒果TV丶乐视丶搜狐接口'},
         {'value': 'http://17kyun.com/api.php?url=', 'desc': '通用接口(无法播放请尝试切换解析源)'},


     ];
 });