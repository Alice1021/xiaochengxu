// pages/detail/detail.js
Page({
  data:{
    cartList:"",
    proList:"",
    goodsID:"",
    itemID:"",
    imgList:"",
    price:"",
    name:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
      wx.setNavigationBarTitle({
        title: options.goodsName
      })
      var that=this;
      if(options.goodsID){
          wx.request({
          url: 'http://127.0.0.1:8081/json/homelist.json',
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          data:{
            goodsID:options.goodsID
          },
          success: function(res){
            // success
            var data=res.data;
            
            // console.log(data);
            that.setData({
              proList:data,
              goodsID:data[options.goodsID-1].goodsID,
              imgList:data[options.goodsID-1].imgList,
              price:data[options.goodsID-1].price,
              name:data[options.goodsID-1].name
            })
          },
        
        })
      }else if(options.nineID){
        wx.request({
          url: 'http://127.0.0.1:8081/json/nine.json',
          data: {
            nineID:options.nineID
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            // console.log(res.data)
            var data=res.data;
            that.setData({
              proList:data,
              nineID:data[options.nineID-1].goodsID,
              imgList:data[options.nineID-1].imgList,
              price:data[options.nineID-1].price,
              name:data[options.nineID-1].name
            })
          },
        })
      }else if(options.itemID){
          wx.request({
            url: 'http://127.0.0.1:8081/json/goods.json',
            data: {
               itemID:options.itemID,
               itemaID:options.itemaID,
               itembID:options.itembID,
               itemcID:options.itemcID,
               itemdID:options.itemdID,
               itemeID:options.itemeID,
               itemfID:options.itemfID
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res){
              // success
              // console.log(res.data);
              var data=res.data;
              // console.log(data);
              // console.log(options.itemID)
              if(options.itemID=="0"){
                 var datas=data[0];
                 that.setData({
                    proList:datas,
                    itemaID:datas[options.itemaID-1].itemaID,
                    imgList:datas[options.itemaID-1].imgList,
                    price:datas[options.itemaID-1].price,
                    name:datas[options.itemaID-1].name
                  })
              }
              else if(options.itemID=="1"){
                 var datas=data[1];
                //  console.log(res.data);
                 that.setData({
                    proList:datas,
                    itembID:datas[options.itembID-1].itembID,
                    imgList:datas[options.itembID-1].imgList,
                    price:datas[options.itembID-1].price,
                    name:datas[options.itembID-1].name
                  })
              }
              else if(options.itemID=="2"){
                 var datas=data[2];
                 that.setData({
                    proList:datas,
                    itemcID:datas[options.itemcID-1].itemcID,
                    imgList:datas[options.itemcID-1].imgList,
                    price:datas[options.itemcID-1].price,
                    name:datas[options.itemcID-1].name
                  })
              }
              else if(options.itemID=="3"){
                 var datas=data[3];
                 that.setData({
                    proList:datas,
                    itemdID:datas[options.itemdID-1].itemdID,
                    imgList:datas[options.itemdID-1].imgList,
                    price:datas[options.itemdID-1].price,
                    name:datas[options.itemdID-1].name
                  })
              }
              else if(options.itemID=="4"){
                 var datas=data[4];
                 that.setData({
                    proList:datas,
                    itemeID:datas[options.itemeID-1].itemeID,
                    imgList:datas[options.itemeID-1].imgList,
                    price:datas[options.itemeID-1].price,
                    name:datas[options.itemeID-1].name
                  })
              }
              else if(options.itemID=="5"){
                 var datas=data[5];
                 that.setData({
                    proList:datas,
                    itemfID:datas[options.itemfID-1].itemfID,
                    imgList:datas[options.itemfID-1].imgList,
                    price:datas[options.itemfID-1].price,
                    name:datas[options.itemfID-1].name
                  })
              }
            },
          })
      }
  },
  addCart:function(){
    var that=this;
    var userID=wx.getStorageSync('userID');
    // console.log(userID);
    if(userID){    
      var arr=[]; 
       var cartList= wx.getStorageSync('goods');
       if(cartList&&cartList.length!=0){
         arr=cartList;
        //  console.log("arr",arr)
          var obj={
            imgList:that.data.imgList,
            price:that.data.price,
            name:that.data.name,
            num:1
          };
          var len=arr.length;
          for(var i=0;i<len;i++){
              if(obj.imgList==arr[i].imgList){
                  arr[i].num++;
                  break;
              }
              else if(obj.imgList!=arr[i].imgList&&i==len-1){
                  arr.push(obj);
                  break;
              }
          }
          wx.setStorage({
            key:"goods",
            data:arr
          })
       }else{
         var obj={
            imgList:that.data.imgList,
            price:that.data.price,
            name:that.data.name,
            num:1
         };
         arr.push(obj);
         wx.setStorage({
            key:"goods",
            data:arr
          })
       } 
       wx.showToast({  
          title: '成功加入购物车',  
          icon: 'success',  
          duration: 2000  
        }) 

    }else{
      wx.navigateTo({
        url: './../login/login'
      })
    }
    
  },
 
})