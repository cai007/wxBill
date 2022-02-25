const app = getApp();
const server_prefix = "";
const service = {
  //查询用户信息
  getUsers() {
    return app.request({
      url: `${server_prefix}/users`,
      method: "get",
    });
  },
  //查询所有支出分类信息
  getTypes() {
    return app.request({
      url: `${server_prefix}/types`,
      method: "get",
    });
  },
  //添加收支分类信息
  addTypes(data) {
    return app.request({
      url: `${server_prefix}/addTypes`,
      method: "post",
      data
    });
  },
  //删除收支分类信息
  deleteTypes(data) {
    return app.request({
      url: `${server_prefix}/deleteTypes`,
      method: "post",
      data
    });
  },
  //添加一笔账单
  addBill(data) {
    return app.request({
      url: `${server_prefix}/add`,
      method: "post",
      data
    });
  },
  //删除账单
  deleteBill(data) {
    return app.request({
      url: `${server_prefix}/deleteBill`,
      method: "post",
      data
    });
  },
   //修改账单
   updateBill(data) {
    return app.request({
      url: `${server_prefix}/updateBill`,
      method: "post",
      data
    });
  },
  //查询账单明细
  showBillDetails(data) {
    return app.request({
      url: `${server_prefix}/showBillDetails`,
      method: "get",
      data
    });
  },
  //查询年度账单信息
  showBills(params) {
    return app.request({
      url: `${server_prefix}/showBills`,
      method: "get",
      params
    });
  },
   //登录
   login() {
    return app.request({
      url: `${server_prefix}/login`,
      method: "post",
    });
  },
   //根据时间段统计账单分类消费
   showTypeDataByDate(params) {
      return app.request({
        url: `${server_prefix}/showTypeDataByDate`,
        method: "get",
        params
      });
    },
   //根据时间段统计各月账单信息
   showMonthBillsByDate(params) {
      return app.request({
        url: `${server_prefix}/showMonthBillsByDate`,
        method: "get",
        params
      });
    },
    //根据时间段和类别查询详细账单
   showTypeDetailsByDate(params) {
      return app.request({
        url: `${server_prefix}/showTypeDetailsByDate`,
        method: "get",
        params
      });
    },
    //查询家庭各成员余额
   showUserBalance(params) {
    return app.request({
      url: `${server_prefix}/showUserBalance`,
      method: "get",
      params
    });
  },
};

export default service;