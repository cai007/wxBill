// pages/statistic/index.js
import { initPie,initBar ,initChart} from "./init.js"
function setOption(chart) {
  let option = []
  chart.setOption(option)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initPie
    },
    ecbar:{
      onInit: initBar
    },
    ecbar1:{
      lazyLoad: true
    }
  },
  
  dispose: function () {
    if (this.chart) {
      this.chart.dispose();
    }

    this.setData({
      isDisposed: true
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const pieOption = {
      title: {
          text: '支出类型',
          left: '5%'
      },
      legend: {
          orient: 'vertical',
          top:'center',
          right:'10%'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['30%', '50%'],
          center:['30%','50%'],
          avoidLabelOverlap: false,
          label: {
              show: false,
              position: 'center',
          },
          labelLine: {
              show: false
          },
          data: [
              {value: 1048, name: '搜索引擎'},
              {value: 735, name: '直接访问'},
              {value: 580, name: '邮件营销'},
              {value: 484, name: '联盟广告'},
              {value: 300, name: '视频广告'}
          ]
      }
      ]
    }
    setTimeout(()=>{
      initChart(this.ecComponent,pieOption)
    },1000)
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取组件
    this.ecComponent = this.selectComponent('#mychart-bar1');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().setData({
      active:3
    })
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