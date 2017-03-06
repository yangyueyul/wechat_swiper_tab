Page({
    data: {
        tabs: ["未借出", "已借出", "未归还", "已归还"],
        activeIndex: 0,
        sliderOffset: 0
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.mTabWidth = res.windowWidth / that.data.tabs.length;
            }
        });
    },
    bindChange: function (e) {
        var that = this;
        var curIndex = e.detail.current;
        that.setData({
            sliderOffset: curIndex * that.mTabWidth,
            activeIndex: curIndex
        });
    },
    tabClick: function (e) {
        var that = this;
        var cIndex = e.currentTarget.id;
        that.setData({
            sliderOffset: cIndex * that.mTabWidth,
            activeIndex: cIndex
        });
    }
})
