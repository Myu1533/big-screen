// 左侧界面数据
module.exports = {
  'GET /api/leftPageData': {
    accessFrequency: 300,
    peakFlow: 1500,
    trafficSitua: {
      timeList: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
      outData: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
      inData: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
    },
    userSitua: {
      header: ['处置小组', '事件', '地点', '状态'],
      data: [
        ['自然灾害处置小组01', '山体滑坡', '富民县', '现场'],
        ['传染病处置小组02', '新冠肺炎', '西山区','在途'],
        ['食品安全处置小组01', '幼小食物中毒', '盘龙区','现场'],
        ['意外事件处置小组02', '房屋倒塌', '官渡区','撤离'],
        ['污染处置小组04', '水源污染', '官渡区','现场'],
        ['不明原因处置小组02', '未知', '五华区','在途'],
        ['传染病处置小组01', '流感', '呈贡新区','撤离'],
        ['自然灾害处置小组03', '洪水', '晋宁县','现场'],
        ['食品安全处置小组03', '过期食品', '东川区','现场'],
        ['意外事件处置小组01', '交通事故', '嵩明县','现场'],
        ['自然灾害处置小组02', '地震', '安宁市','现场'],
        ['传染病处置小组05', '非典', '宜良县','撤离'],
      ],
    },
  },
};
