import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();


Page({
   data: {
    img1:0,
    text: '这是一条会滚动的文字滚来滚去的文字跑马灯，哈哈哈哈哈哈哈哈',
    marqueePace: 1,
    marqueeDistance: 0,
    marqueeDistance2: 0,
    marquee2copy_status: false,
    marquee2_margin: 60,
    size: 14,
    orientation: 'left',
    interval: 20,

  },
  //事件处理函数
 
  onLoad(options) {
    const self = this;
    console.log(self.data.img1);
    var length = self.data.text.length * self.data.size;
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    self.setData({
      img1:self.data.img1,
      length: length,
      windowWidth: windowWidth,
      marquee2_margin: length < windowWidth ? windowWidth - length : self.data.marquee2_margin
    });
    self.run2();
  },
  
  run2: function () {
    var self = this;
    var interval = setInterval(function () {
      if (-self.data.marqueeDistance2 < self.data.length) {
        self.setData({
          marqueeDistance2: self.data.marqueeDistance2 - self.data.marqueePace,
          marquee2copy_status: self.data.length + self.data.marqueeDistance2 <= self.data.windowWidth + self.data.marquee2_margin,
        });
      } else {
        if (-self.data.marqueeDistance2 >= self.data.marquee2_margin) {
          self.setData({
            marqueeDistance2: self.data.marquee2_margin
          });
          clearInterval(interval);
          self.run2();
        } else {
          clearInterval(interval);
          self.setData({
            marqueeDistance2: -self.data.windowWidth
          });
          self.run2();
        }
      }
    }, self.data.interval);
  },
  intoPath(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'nav');
  },
  intoPathRedirect(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'redi');
  }, 
})

  