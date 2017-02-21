// pages/home/home.js
Page({
  data:{
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    circular:true,
    interval: 3000,
    duration: 1000,
    proList:""
  },
  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    wx.request({
      url: 'http://127.0.0.1:8081/json/homelist.json',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        var result=res.data;
        
        // console.log(result);
        that.setData({
          proList:result
        })
      },
     
    })
  },
  goto:function(){
    wx.switchTab({
      url: '../cheap/cheap'
    })
  },
  toDetail:function(e){
    var goodsID=e.target.dataset.goodsid;
    var goodsName=e.target.dataset.goodsname;
    //  console.log(goodsID);
    //  console.log(goodsName);
     wx.navigateTo({
        url: './../detail/detail?goodsID='+goodsID+'&goodsName='+goodsName
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