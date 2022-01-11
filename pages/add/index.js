// pages/add/index.js
import {formatTimeWithWeek} from "../../utils/util"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    user:'cai',
    showUsers:false,
    location:'',
    users:[{
      text:'蔡忠慧',
      id:1
    },{
      text:'安静',
      id:2
    }],
    typeList:[
      {
        id:1,
        name:'早中晚餐'
      },
      {
        id:2,
        name:'交通'
      },
      {
        id:3,
        name:'零食水果'
      },{
        id:4,
        name:'房租房贷'
      },{
        id:5,
        name:'服饰鞋包'
      },
    ],
    showDate:false,
    showTime:false,
    currentDate: new Date().getTime(),
    currentTime:new Date().getHours()+':'+new Date().getMinutes(),
    minDate: new Date().getTime()-60*60*24*365*1000,
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } 
      if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
  showUsers(){
    this.setData({
      showUsers:!this.data.showUsers
    })
  },
  showDate(){
    this.setData({
      showDate:!this.data.showDate
    })
  },
  onConfirm(event) {
    const { picker, value, index } = event.detail;
    console.log(`当前值：${value.text}, 当前索引：${index}`)
    this.setData({user:value.text})
    this.setData({
      showUsers:false
    })
  },

  onCancel() {
    console.log('取消')
  },
  onChange(event) {
    const { picker, value, index } = event.detail;
    console.log(`当前值：${value.text}, 当前索引：${index}`)
    // Toast(`当前值：${value}, 当前索引：${index}`);
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  onDateConfirm(e){
    console.log('日期',e.detail)
    let date = formatTimeWithWeek(new Date(e.detail))
    if(date){
      this.setData({
        showDate:false,
        showTime:true,
        date:date
      })
    }
    
  },
  onDateCancel(){
    this.setData({
      showDate:false,
    })
  },
  onTimeConfirm(e){
    console.log('======',e.detail,e.detail+this.data.date)
    this.setData({
      date:this.data.date+'  '+e.detail
    })
    this.setData({
      showTime:false,
    })
  },

  showPlace(){
    wx.chooseLocation({
      success: (result) => {
        this.setData({location:result.address})
        console.log(result)
      },
    })
  },
  scanBill(){
    console.log('s')
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        // this.setData({
        //   src: res.tempImagePath
        // })
        console.log('ppppppp',res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})