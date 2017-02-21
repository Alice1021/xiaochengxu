// pages/nine/nine.js
Page({
  data:{},
  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    wx.request({
      url: 'http://127.0.0.1:8081/json/nine.json',
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
  toDetail:function(e){
    var nineID=e.target.dataset.nineid;
    var goodsName=e.target.dataset.goodsname;
   // console.log(nineID);
    //console.log(goodsName);
     wx.navigateTo({
        url: './../detail/detail?nineID='+nineID+'&goodsName='+goodsName
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