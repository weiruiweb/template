import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();


Page({
  data: {
    is_select:0,
    isShow:false,
    is_discount:0,
  },
  //事件处理函数
  select:function(e){
     var current = e.currentTarget.dataset.id;
    this.setData({
      is_select:current
    })
  },
  select_discount:function(e){
     var current = e.currentTarget.dataset.id;
    this.setData({
      is_discount:current
    })
  },
  
  goBuy:function(){
    var isShow = !this.data.isShow;
    this.setData({
      isShow:isShow
    })
  },
   close:function(){
    this.setData({
      isShow:false
    })
  },
  onLoad(options) {
    const self = this;

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

  