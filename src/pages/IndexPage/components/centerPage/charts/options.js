import echarts from 'echarts/lib/echarts';
import 'echarts/map/js/china';
//  地图数据
const mapData = {
  citys: [
    {
      name: '昆明市疾控中心',
      value: [102.707459,25.026114, 2],
      symbolSize: 5,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '传染病处置小组03',
      value: [102.494307,25.212274],
      symbolSize: 3,
      itemStyle: {
        normal: {
          color: '#46bee9'
        },
      },
    },
    {
      name: '传染病处置小组05',
      value: [102.725019,25.142676],
      symbolSize: 3,
      itemStyle: {
        normal: {
          color: '#46bee9'
        },
      },
    },
    {
      name: '传染病处置小组11',
      value: [102.725019,25.142676],
      symbolSize: 3,
      itemStyle: {
        normal: {
          color: '#46bee9'
        },
      },
    },
    {
      name: '传染病处置小组02',
      value: [102.716608,25.037284],
      symbolSize: 3,
      itemStyle: {
        normal: {
          color: '#46bee9'
        },
      },
    },
    {
      name: '传染病处置小组10',
      value: [102.671461,25.030739],
      symbolSize: 3,
      itemStyle: {
        normal: {
          color: '#46bee9'
        },
      },
    },
    {
      name: '意外事件处置小组02',
      value: [102.708945, 25.03051],
      symbolSize: 3,
      itemStyle: {
        normal: {
          color: '#46bee9'
        },
      },
    },
    {
      name: '意外事件处置小组03',
      value: [102.481947,24.605697],
      symbolSize: 3,
      itemStyle: {
        normal: {
          color: '#46bee9'
        },
      },
    },
    {
      name: '污染处置小组04',
      value: [102.717559,25.068625],
      symbolSize: 3,
      itemStyle: {
        normal: {
          color: '#46bee9'
        },
      },
    },
    {
      name: '不明原因处置小组02',
      value: [102.65053,24.98285],
      symbolSize: 3,
      itemStyle: {
        normal: {
          color: '#46bee9'
        },
      },
    },
    {
      name: '传染病处置小组01',
      value: [103.260231,25.545559],
      symbolSize: 3,
      itemStyle: {
        normal: {
          color: '#46bee9'
        },
      },
    },
    {
      name: '自然灾害处置小组03',
      value: [103.185107,26.085755],
      symbolSize: 3,
      itemStyle: {
        normal: {
          color: '#46bee9'
        },
      },
    },
    {
      name: '食品安全处置小组03',
      value: [102.468768,25.561356],
      symbolSize: 3,
      itemStyle: {
        normal: {
          color: '#46bee9'
        },
      },
    },
    {
      name: '传染病处置小组05',
      value: [103.276557,24.754668],
      symbolSize: 3,
      itemStyle: {
        normal: {
          color: '#46bee9'
        },
      },
    }
  ]
};

export const mapOptions = (params) => ({
  title: {
    show: false,
    text: '疾控中心可视化平台',
    left: 'center',
    textStyle: {
      color: '#fff',
    },
  },
  legend: {
    show: false,
  },
  geo: {
    nameMap: {
      Kunming: '昆明',
    },
    map: 'Kunming',
    label: {
      emphasis: {
        show: false,
      },
    },
    zoom: 1.2,
    itemStyle: {
      normal: {
        borderColor: 'rgba(255,209,163, .5)', //区域边框颜色
        areaColor: 'rgba(73,86,166,.1)', //区域颜色
        borderWidth: 0.5, //区域边框宽度
        shadowBlur: 5,
        shadowColor: 'rgba(107,91,237,.7)',
      },
      emphasis: {
        borderColor: '#FFD1A3',
        areaColor: 'rgba(102,105,240,.3)',
        borderWidth: 1,
        shadowBlur: 5,
        shadowColor: 'rgba(135,138,255,.5)',
      },
    },
  },
  series: [
    {
      name: '地点',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke',
      },
      label: {
        emphasis: {
          show: true,
          position: 'right',
          formatter: '{b}',
        },
      },
      symbolSize: 2,
      showEffectOn: 'render',
      itemStyle: {
        normal: {
          color: '#46bee9',
        },
      },
      data: mapData.citys,
    },
    {
      name: '线路',
      type: 'lines',
      coordinateSystem: 'geo',
      zlevel: 2,
      zoom: 1,
      large: true,
      effect: {
        show: true,
        constantSpeed: 30,
        symbol: 'pin',
        symbolSize: 3,
        trailLength: 0,
      },
      lineStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#58B3CC',
              },
              {
                offset: 1,
                color: '#F58158',
              },
            ],
            false
          ),
          width: 1,
          opacity: 0.2,
          curveness: 0.1,
        },
      },
      data: params.moveLines,
    },
  ],
});
