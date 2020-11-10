//  地图数据
const mapData = [
  { name: "五华区", value: 89000 },
  { name: "盘龙区", value: 50000 },
  { name: "东川区", value: 800 },
  { name: "西山区", value: 1000 },
  { name: "呈贡区", value: 600 },
  { name: "禄劝彝族苗族自治县", value: 1500 },
  { name: "寻甸回族彝族自治县", value: 1600 },
  { name: "嵩明县", value: 18000 },
  { name: "宜良县", value: 180 },
  { name: "石林彝族自治县", value: 19000 },
  { name: "官渡区", value: 2100 },
  { name: "晋宁区", value: 21000 },
  { name: "安宁市", value: 0 },
  { name: "富民县", value: 10000 }
];

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
  visualMap: {
    type: 'piecewise',
    min: 1,
    max: 10000,
    realtime: false,
    inRange: {
      color: ['lightskyblue', 'yellow', 'orangered', 'red'],
      symbolSize: [1, 10000]
    },
    outOfRange: {
      color: ['#ffffff', 'darkred']
    },
    textStyle: {
      color: '#ffffff'
    }
  },
  series: [
    {
      name: "疫情",
      type: "map",
      mapType: 'Kunming',
      data: mapData,
      encode: {
        value: 2,
      },
      label: {
        show: true
      },
      itemStyle: {
        color: "orange",
      },
      emphasis: {
        label: {
          show: true,
        },
      },
    },
  ],
});
