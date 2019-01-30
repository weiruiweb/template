//logs.js
const util = require('../../utils/util.js')
const app = getApp()


Page({
  data: {
    
  },
  onLoad: function () {
    this.setData({
      fonts:app.globalData.font
    })
  },
  submit:function(){
     wx.redirectTo({
      url:'/pages/userProjectState/userProjectState'
    })
  }
})
