// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active:0,
    list: [{
      key: "home",
      icon:  "imgs/bill/home.png",
      iconActive:  "imgs/bill/home-select.png",
      label: "首页",
      url: "/pages/home/index"
    },
    {
      key: "bill",
      icon:  "imgs/bill/bill.png",
      iconActive:  "imgs/bill/bill-select.png",
      label: "账单",
      url: "/pages/billList/index"
    },
    {
      key: "add",
      icon:  "imgs/system/icon_input_trade.png",
      iconActive:  "/imgs/system/icon_input_trade.png",
      label: "添加",
      url: "/pages/statistic/index"
    },
    {
      key: "statistic",
      icon:  "/imgs/bill/trend.png",
      iconActive:  "/imgs/bill/trend-select.png",
      label: "统计",
      url: "/pages/statistic/index"
    },
    {
      key: "my",
      icon:  "/imgs/bill/user.png",
      iconActive:  "/imgs/bill/user-select.png",
      label: "我的",
      url: "/pages/my/index"
    }
  ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setKey(e) {
      console.log("e:", e)
      const index = e.currentTarget.dataset.active
      this.setData({
        active:index
      })
      // if (index == 2) {
      //   wx.navigateTo({
      //     url: this.data.list[index].url,
      //   })
      // } else {
      //   wx.switchTab({
      //     url: this.data.list[index].url
      //   });
      //   console.log('ddddddddddd',this.data.active)
      // }
    },
  }
})
