import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();

Page({
  data: {
   
    },

  onLoad(options){
     const self = this;
  },
  addOrder(){
    wx.navigateTo({
      url:'/pages/store/store'
    })
  },
  intoPath(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'nav');
  },

  intoPathRedi(e){
    const self = this;
    wx.navigateBack({
      delta:1
    })
  },
 
})

  