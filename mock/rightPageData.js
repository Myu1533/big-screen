// 右侧界面数据
module.exports = {
  'GET /api/rightPageData': {
    sick: {
      data: [80, 152, 101, 134, 90, 130],
      xData: ['01-11', '01-12', '01-13', '01-14', '01-15', '01-15']
    },
    areaRaising: {
      data1: [80, 152, 101, 134, 90, 130],
      data2: [120, 182, 191, 210, 170, 110],
      data3: [110, 132, 201, 154, 150, 80],
      data4: [90, 142, 161, 114, 190, 170],
      xData: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
      barData: [32.2, 60.0, 32.6, 36.4, 53.3, 35.0],
    },
    browseCategories: {
      data: [782, 621.2, 322.1, 525.3, 265],
      indicator: [
        {
          name: '老年男性',
          max: 1000,
        },
        {
          name: '老年女性',
          max: 1000,
        },
        {
          name: '成年男性',
          max: 1000,
        },
        {
          name: '成年女性',
          max: 1000,
        },
        {
          name: '未成年',
          max: 1000,
        }
      ],
    },
    userIdentityCategory: {
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
      ],
    },
    offline: {
      feedback: [
        {
          title: '服务质量',
          number: 90,
        },
        {
          title: '交互体验',
          number: 82,
        },
        {
          title: '安全防护',
          number: 85,
        },
      ],
      offlinePortalData: {
        data1: [80, 152, 101, 134, 90, 130],
        data2: [120, 182, 191, 210, 170, 110],
        data3: [110, 132, 201, 154, 150, 80],
        data4: [90, 142, 161, 114, 190, 170],
        xData: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
        barData: [32, 60, 32, 36, 53, 35],
      },
    },
  },
};
