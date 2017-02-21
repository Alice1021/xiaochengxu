// pages/cart/cart.js
Page({
  data:{
    cartList:"",
    allPrice:"",
    nums:"",
    haveCart:true
  },
  onShow:function(){
    // console.log(1)
    var that=this;
    var cartList=wx.getStorageSync('goods');
    if(cartList){
        that.setData({
          cartList:cartList
        })
    }
    var userID=wx.getStorageSync('userID');
    if(userID){
      var cartList=wx.getStorageSync('goods');
      if(cartList&&cartList.length!=0){
        that.setData({
          haveCart:true
        })
      }else{
        that.setData({
          haveCart:false
        })
      }
    }else{
       that.setData({
          haveCart:false
        })
    }
    //  console.log("cartList",cartList)
    
   
    that.text()
    
  },
  goSee:function(){
    console.log(222);
     wx.switchTab({
      url: '../home/home'
    })
  },
  delete:function(e){
    var cartList=this.data.cartList;
    // console.log(e.target.dataset);
    var index=e.target.dataset.index;
    var goods=e.target.dataset.goods;
    cartList.splice(index,1);
    this.setData({
      cartList:cartList
    })
    wx.setStorage({
      key:"goods",
      data:cartList
    })
    this.text()
  },
  reduce:function(e){
    var cartList=this.data.cartList;
    // console.log(e.target.dataset.goods);
    var goods=e.target.dataset.goods;
    // console.log(e.target.dataset.index);
    var index=e.target.dataset.index;
    var num=goods.num;
    if(num==1){
      wx.showToast({
        title: '数量不能少于1',
        icon: 'success',
        duration: 2000
      })
    }else{
      cartList[index].num--;
      this.setData({
        cartList:cartList,
      })
    }
     wx.setStorage({
      key:"goods",
      data:cartList
    })
    this.text()
  },
  add:function(e){
    // console.log(e.target.dataset);
    var goods=e.target.dataset.goods;
    var index=e.target.dataset.index;
    var cartList=this.data.cartList;
     var num=goods.num;
    if(num==5){
      wx.showToast({
        title: '最多只能购买5件',
        icon: 'success',
        duration: 2000
      })
    }else{
      cartList[index].num++;
      this.setData({
        cartList:cartList,
      })
    }
     wx.setStorage({
      key:"goods",
      data:cartList
    })
    this.text()
  },
  text:function(){
    var cartList=this.data.cartList;
    console.log("cartlist",cartList)
    var allPrice=0;
    var nums=0;
    var len=cartList.length;
    for(var i=0;i<len;i++){
      var price=(cartList[i].num*cartList[i].price);
     nums+=cartList[i].num
      allPrice+=price*1;
    }
    this.setData({
      allPrice:allPrice.toFixed(2),
      nums:nums
    })
  }

})