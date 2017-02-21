// pages/cheap/cheap.js
Page({
  data:{
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 500,
    circular:false,
    current:0,
    currentIndex:0,
    proList1:"",
    proList2:"",
    proList3:"",
    proList4:"",
    proList5:"",
    proList6:""
  },
  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    wx.request({
      url: 'http://127.0.0.1:8081/json/goods.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        // console.log(res.data);
        var data1=(res.data)[0];
        // console.log(data1);
        var data2=(res.data)[1];
        var data3=(res.data)[2];
        var data4=(res.data)[3];
        var data5=(res.data)[4];
        var data6=(res.data)[5];
        that.setData({
          proList1:data1,
          proList2:data2,
          proList3:data3,
          proList4:data4,
          proList5:data5,
          proList6:data6


        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })


  },
  toDetail:function(e){
    // console.log(e);
    var itemID=e.currentTarget.dataset.itemid;
    var goodsName=e.currentTarget.dataset.goodsname;
    var a=e.currentTarget.dataset;
    if(a.itemaid){
      var itemaID=a.itemaid;
       wx.navigateTo({
        url: './../detail/detail?itemID='+itemID+'&goodsName='+goodsName+'&itemaID='+itemaID
     })
    }else if(a.itembid){
      var itembID=a.itembid;
       wx.navigateTo({
        url: './../detail/detail?itemID='+itemID+'&goodsName='+goodsName+'&itembID='+itembID
     })
    }else if(a.itemcid){
      var itemcID=a.itemcid;
       wx.navigateTo({
        url: './../detail/detail?itemID='+itemID+'&goodsName='+goodsName+'&itemcID='+itemcID
     })
    }else if(a.itemdid){
      var itemdID=a.itemdid;
       wx.navigateTo({
        url: './../detail/detail?itemID='+itemID+'&goodsName='+goodsName+'&itemdID='+itemdID
     })
    }else if(a.itemeid){
      var itemeID=a.itemeid;
       wx.navigateTo({
        url: './../detail/detail?itemID='+itemID+'&goodsName='+goodsName+'&itemeID='+itemeID
     })
    }else if(a.itemfid){
      var itemfID=a.itemfid;
       wx.navigateTo({
        url: './../detail/detail?itemID='+itemID+'&goodsName='+goodsName+'&itemfID='+itemfID
     })
    }
  },
  changeIndex:function(event){
    let index = event.target.dataset.index;
    // console.log(index)
    this.setData({
      currentIndex:index
    })
  },
  changeItem:function(event){
    //  console.log(event.detail)
   // event.detail = {current: current}
    //console.log(this.data.current)
    this.setData({
      currentIndex:event.detail.current
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