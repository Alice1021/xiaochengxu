// pages/login/login.js
Page({
  
  data:{
    userID:"",
    password:""
  },
  username: function(e) {
    // console.log(e);
     var that=this;
     that.setData({
       userID: e.detail.value
     })
    
  },
  password: function(e) {
     var that=this;
     that.setData({
       password: e.detail.value
     })
  },
  warn:function(){
    var that=this;
     wx.setStorage({
        key:"userID",
        data:that.data.userID
      });
     
    wx.request({
      url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
      data: {
        status:"login",
        userID:that.data.userID,
        password:that.data.password
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        //  console.log(typeof res.data);
         var data=res.data;
         if(data==0){
           wx.showToast({  
              title: '用户名不存在',  
              icon: 'success',  
              duration: 2000  
            })  
         }else if(data==2){
            wx.showToast({  
              title: '用户名密码不符',  
              icon: 'success',  
              duration: 2000  
            })  
         }else{
            var userID=that.data.userID;
            var password=that.data.password;
            if(userID==""){
              wx.showToast({  
                title: '用户名不能为空',  
                icon: 'success',  
                duration: 2000  
              })
            }else if(password==""){
              wx.showToast({  
                title: '密码不能为空',  
                icon: 'success',  
                duration: 2000  
              })
            }else{
              wx.showToast({  
                title: '登录成功',  
                icon: 'success',  
                duration: 2000  
              })
            }
         }
      },
     
    })

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
     wx.setNavigationBarTitle({
      title:"登录"
    })

  },
  toRegister:function(){
     wx.navigateTo({
        url: './../register/register'
      })
  },
  
})