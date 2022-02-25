// pages/home/index.js
import api from "../../apis/index"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    monthData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let params = {
      family_id:'my',
      month:'202109'
    }
    api.showBillDetails(params).then(res=>{
      console.log('账单信息',res)
      var incomes = res.filter(item=>item.is_incomes=='1')
      var spends = res.filter(item=>item.is_incomes=='0')
      var _income = 0;
      var _spend = 0;
      if(incomes.length>0)
         _income =  incomes.reduce((total,cur)=>{
          return total + parseFloat(cur.money) 
        },0)
      if(spends.length>0)
         _spend =  spends.reduce((total,cur)=>{
          return total + parseFloat(cur.money) 
        },0)
      this.setData({monthData:res,income:_income,spend:_spend})
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().setData({
      active:0
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
