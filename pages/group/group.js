//index.js
//获取应用实例
import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();
Page({
  data: {
    tapCurrent:0,
     is_show:false,
     is_show1:false,
  },
  
  onLoad: function () {
   
  },
  mask:function(e){
   this.setData({
    is_show:false,
    is_show1:false,
   })
 },
 appoint:function(e){
  this.setData({
    is_show:true,
   })
 },
 group:function(e){
  this.setData({
    is_show1:true,
   })
 },
  tabCont:function(e){
      var currentId=e.currentTarget.dataset.id;
      this.setData({
       tapCurrent:currentId
      });
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
