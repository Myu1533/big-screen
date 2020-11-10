export const trafficOptions = (params) => ({
  title: {
    show: false,
  },
  legend: {
    show: true,
    orient: 'vertical',
    left: 10,
    textStyle: {
      color: '#c0c9d2',
    },
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  visualMap: {
    show: false,
    min: 1,
    max: 100000,
    inRange: {
      color: ['lightskyblue', 'yellow', 'orangered', 'red'],
      symbolSize: [1, 100000]
    },
    outOfRange: {
      color: ['#ffffff', 'darkred']
    },
  },
  series: [
    {
      name: '累计',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { name: "五华", value: 89000 },
        { name: "盘龙", value: 50000 },
        { name: "东川", value: 800 },
        { name: "西山", value: 1000 },
        { name: "呈贡", value: 600 },
        { name: "禄劝", value: 1500 },
        { name: "寻甸", value: 1600 },
        { name: "嵩明", value: 18000 },
        { name: "宜良", value: 180 },
        { name: "石林", value: 19000 },
        { name: "官渡", value: 2100 },
        { name: "晋宁", value: 21000 },
        { name: "安宁", value: 0 },
        { name: "富民", value: 10000 }
      ].sort(function (a, b) { return a.value - b.value; }),
      roseType: 'radius',
      label: {
          color: 'rgba(255, 255, 255, 0.3)'
      },
      labelLine: {
          lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
      },
      itemStyle: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
      },

      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
          return Math.random() * 200;
      }
    }
  ],
});

export const userOptions = (params = {}) => ({
  header: params.header,
  data: params.data,
});
