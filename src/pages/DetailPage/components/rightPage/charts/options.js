import echarts from 'echarts/lib/echarts';

// 关联数据类别
export const BrowseCategoriesOptions = params => ({
  radar: {
    center: ['50%', '50%'],
    radius: '70%',
    name: {
      formatter: function (name) {
        let arr;
        arr = ['{a|' + name + '}'];
        return arr.join('\n');
      },
      textStyle: {
        rich: {
          //根据文字的组设置格式
          a: {
            color: '#BCDCFF',
            fontSize: 14,
            fontWeight: 600,
            fontFamily: 'Source Han Sans CN',
          },
        },
      },
    },
    // 名字和图形的距离
    nameGap: 5,
    indicator: params.indicator,
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    splitArea: {
      areaStyle: {
        color: [
          'rgba(84,136,255, 0.05)',
          'rgba(84,136,255, 0.1)',
          'rgba(84,136,255, 0.2)',
          'rgba(84,136,255, 0.3)',
          'rgba(84,136,255, 0.4)',
          'rgba(84,136,255, 0.5)',
        ].reverse(),
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowBlur: 5,
        shadowOffsetX: 10,
        shadowOffsetY: 10,
      },
    },
  },
  series: [
    {
      name: '用户浏览类别',
      type: 'radar',
      data: [params.data],
      label: {
        show: false,
        formatter: function (params) {
          return params.value + '万';
        },
        color: '#9ae8ac',
        distance: 10,
        align: 'right',
      },
      symbol: 'none',
      symbolSize: [6, 6],
      // 边缘颜色
      lineStyle: {
        color: 'rgba(160,159,246, 0.6)',
        width: 2,
      },
      areaStyle: {
        color: 'rgba(114,113,233,.4)',
        opacity: 0.8,
        shadowColor: 'rgba(115,149,255,1)',
        shadowBlur: 10,
      },
    },
  ],
});

// 反馈
export const FeedbackOptions = params => ({
  title: {
    text: `${params.number}%`,
    left: '45%',
    top: '40%',
    textAlign: 'center',
    textStyle: {
      fontSize: '16',
      fontWeight: '500',
      color: '#909dff',
      textAlign: 'center',
    },
  },
  series: [
    {
      type: 'pie',
      startAngle: 0,
      radius: ['80%', '70%'],
      center: ['50%', '50%'],
      data: [
        {
          value: params.number,
          name: params.title,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#5a8bfa',
                },
                {
                  offset: 1,
                  color: '#831bdb',
                },
              ]),
              shadowColor: 'rgba(175,143,230,.5)',
              shadowBlur: 10,
            },
          },
          label: {
            show: false,
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 0,
              },
            },
          },
          hoverAnimation: false,
        },
        {
          label: {
            show: false,
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 0,
              },
            },
          },
          value: 100 - params.number,
          hoverAnimation: true,
          itemStyle: {
            color: 'rgba(79,76,192, 0.3)',
          },
        },
      ],
    },
  ],
});

//  线下门店流量
export const OfflinePortalOptions = params => ({
  color: ['#D41', '#73DEB3', '#ccc'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999',
      },
      lineStyle: {
        type: 'dashed',
      },
    },
  },
  grid: {
    left: '15',
    right: '15',
    bottom: '0',
    top: '30',
    containLabel: true,
  },
  legend: {
    data: ['新报', '结案', '已结'],
    show: true,
    textStyle: {
      color: '#BCDCFF',
    },
  },
  xAxis: [
    {
      type: 'category',
      data: params.xData,
      axisLabel: {
        color: '#BCDCF0',
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: false,
      },
      boundaryGap: true,
    },
    {
      type: 'category',
      axisLabel: {
        color: '#BCDCF0',
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: false,
      },
      boundaryGap: true,
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: '例',
      nameTextStyle: {
        color: '#BCDCFF',
      },
      axisLabel: {
        color: '#BCDCF0',
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#252938',
        },
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: true,
      },
    }
  ],
  series: [
    {
      name: '新报',
      type: 'bar',
      data: params.data1,
    },
    {
      name: '结案',
      type: 'bar',
      data: params.data2,
    },
    {
      name: '已结',
      type: 'bar',
      data: params.data3,
    },
  ],
});
//  线下门店流量
export const AreaRaisingOptions = params => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999',
      },
      lineStyle: {
        type: 'dashed',
      },
    },
  },
  grid: {
    left: '15',
    right: '15',
    bottom: '0',
    top: '30',
    containLabel: true,
  },
  legend: {
    data: ['盘龙区', '五华区', '西山区', '呈贡区'],
    show: true,
    textStyle: {
      color: '#BCDCFF',
    },
  },
  xAxis: [
    {
      type: 'category',
      data: params.xData,
      axisLabel: {
        color: '#BCDCF0',
        textStyle: {
          fontSize: 12,
        },
      },
      axisTick: {
        show: true,
      },
      boundaryGap: true,
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '新增',
      //网格样式
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#94b5ca',
        },
      },
    },
  ],
  series: [
    {
      name: '盘龙区',
      type: 'line',
      data: params.data1,
    },
    {
      name: '五华区',
      type: 'line',
      data: params.data2,
    },
    {
      name: '西山区',
      type: 'line',
      data: params.data3,
    },
    {
      name: '呈贡区',
      type: 'line',
      data: params.data4,
    }
  ],
});
//  线下门店流量
export const SickOptions = params => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999',
      },
      lineStyle: {
        type: 'dashed',
      },
    },
  },
  grid: {
    left: '15',
    right: '15',
    bottom: '0',
    top: '30',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: params.xData,
      axisLabel: {
        color: '#BCDCF0',
        textStyle: {
          fontSize: 12,
        },
      },
      axisTick: {
        show: true,
      },
      boundaryGap: true,
    }
  ],
  yAxis: [
    {
      type: 'value',
      //网格样式
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#94b5ca',
        },
      },
    },
  ],
  series: [
    {
      name: '患者数量',
      type: 'line',
      data: params.data,
    },
  ],
});
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
    max: 500,
    inRange: {
      color: ['lightskyblue', 'yellow', 'orangered', 'red'],
      symbolSize: [1, 500]
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
        {
          name: '食物中毒',
          value: 198,
        },
        {
          name: '新冠肺炎',
          value: 167,
        },
        {
          name: '流感',
          value: 123,
        },
        {
          name: '山体滑坡',
          value: 23,
        },
        {
          name: '意外事件',
          value: 55,
        },
        {
          name: '污染',
          value: 10,
        },
        {
          name: '非典',
          value: 100,
        },
        {
          name: '洪水',
          value: 1000,
        },
        {
          name: '鼠疫',
          value: 8,
        },
        {
          name: '过期食品',
          value: 200,
        },
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
