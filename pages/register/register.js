// pages/register/register.js
Page({
  data:{
    userID:"",
    passWord1:"",
    password2:""
  },
  username: function(e) {
    var that=this;
    that.setData({
      userID: e.detail.value
    })
    
  },
  password1: function(e) {
    var that=this;
    that.setData({
      passWord1: e.detail.value
    })
  },
  password2: function(e) {
    var that=this;
    that.setData({
      passWord2: e.detail.value
    })
  },
   onLoad:function(options){
     
    // 页面初始化 options为页面跳转所带来的参数
     wx.setNavigationBarTitle({
      title:"注册"
    })
   
  },
  warn:function(){
    var that=this;
     wx.request({
      url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
      data: {
        status:"register",
        userID:that.data.userID,
        password:that.data.passWord1
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data);
        var data=res.data;
        if(data==0){
          wx.showToast({  
            title: '用户名重名',  
            icon: 'success',  
            duration: 2000  
          })  
        }else if(data==1){
           wx.showToast({  
            title: '注册成功',  
            icon: 'success',  
            duration: 2000  
          })  
        }else if(data==2){
            wx.showToast({  
            title: '数据库报错',  
            icon: 'success',  
            duration: 2000  
          }) 
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

  },
  toLogin:function(){
     wx.navigateTo({
        url: './../login/login'
      })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})