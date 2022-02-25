// app.js
App({
  request(options) {
    let that = this;
    let { url, data, params, method, headers } = options;
      wx.showLoading({
        title: "加载中",
        mask:true  
      });
    return new Promise((resolve, reject) => {
      console.log("发送给" + url + "的数据为:", data);
      let query = "";
      if (params && Object.keys(params).length > 0) {
        query = "?";
        for (let key in params) {
          query += key + "=" + params[key] + "&";
        }
        query = query.substr(0, query.length - 1);
      }
      let header = {
        "content-type": "application/json",
        // Authorization: this.globalData.token,
        ...headers,
      };
      // let OpenId = this.globalData.token;
      // console.log("当前OpenId:", OpenId);
      // if (OpenId) {
      //   header["OpenId"] = OpenId;
      // }

      wx.request({
        url: that.globalData.apiUrl + url + query, //仅为示例，并非真实的接口地址
        data: data || "",
        method: method || "POST",
        header,
        success(res) {
          console.log(url + "返回的数据为:", res);
          if (res.errMsg == 'request:ok') {
            wx.hideLoading();
            resolve(res.data);
          } else {
            console.log(res.data.msg || "接口故障");
            wx.hideLoading();
            if(res.data.code == '10230' || res.data.code == '10286')
              wx.navigateTo({
                url: '/pages/login/index',
              })
            wx.showToast({
              title: res.data.msg || "接口故障",
              icon: "none",
            });
            reject();
          }
        },
        fail(err) {
          console.log(err);
          wx.hideLoading();
          wx.showToast({
            title: err.msg || "接口故障",
            icon: "none",
          });
          reject();
        },
      });
    });
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    apiUrl:"http://101.200.188.103:3000"
  }
})
