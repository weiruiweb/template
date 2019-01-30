import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();


Page({
  data: {
   slider: [],
    swiperCurrent: 3,
    slider: [
    {
      picUrl: '/images/banner1.jpg'
    },
    {
      picUrl: '/images/banner1.jpg'
    },
    {
      picUrl: '/images/banner1.jpg'
    },
    {
      picUrl: '/images/banner1.jpg'
    },
    {
      picUrl: '/images/banner1.jpg'
    },
    {
      picUrl: '/images/banner1.jpg'
    },
    {
      picUrl: '/images/banner1.jpg'
    },
    {
      picUrl: '/images/banner1.jpg'
    },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,
    beforeColor: "white",//指示点颜色  
    afterColor: "coral",//当前选中的指示点颜色 
  },
  onLoad(options) {
    const self = this;
  },
   //轮播图的切换事件 
  swiperChange: function (e) {
    //只要把切换后当前的index传给<swiper>组件的current属性即可 
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  dotsChange: function (e) {
    //只要把切换后当前的index传给<swiper>组件的current属性即可 
    this.setData({
      dotsCurrent: e.detail.current
    })
  },
  //点击指示点切换 
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  chuangEvents: function (e) {
    this.setData({
      dotsCurrent: e.currentTarget.id
    })
  },
})

  