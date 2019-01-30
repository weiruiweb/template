import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();


Page({
   data: {
    marquee:0,   //每次移动X坐标
    windowHeight:50,     //小程序宽度
    maxScroll:0      //文本移动至最左侧宽度及文本宽度
  },
  //事件处理函数
  onLoad: function (options) {
      const self = this;
      self.setData({
        marquee: self.data.windowHeight
      });
      self.data.maxScroll = self.data.windowHeight * 6;
      self.scrolltxt();
  },
  scrolltxt:function(){
    const self = this;
    var interval = setInterval(function () {
      var next = self.data.marquee-1; //每次移动距离
      if( next<0 && Math.abs(next)>self.data.maxScroll ){
        next = self.data.windowHeight;
        clearInterval(interval);
        self.scrolltxt();
      }
      self.setData({
        marquee: next
      });
    }, 30);
  }
})

  