// pages/order/order_list.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		listItemCurrent : 0
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		var that = this;
		wx.request({
			url: 'https://mb.shaodaijiao.net/wechat/order',
			data: { 'msId': 610, 'status': 0},
			method: 'POST',
			responseType: 'text',
			header: { "Content-Type": "application/x-www-form-urlencoded" },
			success: function (data) {
				if (data.data.dataCount == undefined){
					// 没有数据返回
					return;
				}
				that.setData({
					orders : data.data.orderList
				})
			},
			fail: function (data) {
				// 请求失败
			},
			complete: function () {
				// 无论调用成功或失败都会执行
			}
		})
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},
	click_order_titile : function (e) {
		// 设置当前选中
		var id = e.target.id;
		this.setData({
			listItemCurrent : id
		})
		// 请求数据,重新给orders赋值
		var that = this;
		wx.request({
			url: 'https://mb.shaodaijiao.net/wechat/order',
			data: { 'msId': 610, 'status': id },
			method: 'POST',
			responseType: 'text',
			header: { "Content-Type": "application/x-www-form-urlencoded" },
			success: function (data) {
				if (data.data.dataCount == undefined) {
					// 没有数据返回
					return;
				}
				that.setData({
					orders: data.data.orderList
				})
			},
			fail: function (data) {
				// 请求失败
			},
			complete: function () {
				// 无论调用成功或失败都会执行
			}
		})
	}
})