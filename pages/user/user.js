// pages/user/user.js
Page({
  data:{
    textUser:true,
    userID:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  toLogin:function(){
     wx.navigateTo({
        url: './../login/login'
      })
  },
  toRegister:function(){
     wx.navigateTo({
        url: './../register/register'
      })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    var userID= wx.getStorageSync('userID');
    if(userID){
        this.setData({
          textUser:true,
          userID:wx.getStorageSync('userID')
        })
    }else{
      this.setData({
        textUser:false
      })
    }
 


  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})