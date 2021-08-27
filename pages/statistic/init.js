import * as echarts from '../../ec-canvas/echarts';
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
          {value: 735, name: '直接访问1'},
          {value: 580, name: '邮件营销1'},
          {value: 484, name: '联盟广告1'},
          {value: 300, name: '视频广告1'}
      ]
  }
  ]
}

const BarOption = {
  title: {
    text: '逐月支出',
    left: '5%'
  },
  legend: {
      orient: 'vertical',
      top:'center',
      right:'10%'
  },
  grid: {
    left: "5%",
    top: "20%",
    right: "5%",
    bottom: "0",
    containLabel: true
  },
  xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
  }]
}

function initPie(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  chart.setOption(pieOption);
  return chart;
}

function initBar(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  chart.setOption(BarOption);
  return chart;
}

// 点击按钮后初始化图表
function initChart(component,option) {
  component.init((canvas, width, height, dpr) => {
    // 获取组件的 canvas、width、height 后的回调函数
    // 在这里初始化图表
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr // new
    });
    chart.setOption(option);
    // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
    // this.chart = chart;

    // this.setData({
    //   isLoaded: true,
    //   isDisposed: false
    // });

    // 注意这里一定要返回 chart 实例，否则会影响事件处理等
    return chart;
  });
} 


export {
  initPie,
  initBar,
  initChart
} 