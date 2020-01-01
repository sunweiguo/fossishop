// pages/home/home.js

import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeA:null,
    bannerB:null,
    grid:[],
    activityD:null,
    themeE:null,
    themeESpu:[],
    themeF:null,
    bannerG:null,
    themeH:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.initAllData()
  },

  //初始化首页的数据
  async initAllData() {
    /*一次性调出所有的主题数据，以对象的形式保存数据的状态*/
    const theme = new Theme()
    await theme.getThemes()
    const themeA = await theme.getHomeLocationA()
    const themeE = await theme.getHomeLocationE()
    const themeF = await theme.getHomeLocationF()
    const themeH = await theme.getHomeLocationH()
    let themeESpu = []
    if(themeE.online){
      const data = await Theme.getHomeLocationESpu()
      if(data){
        themeESpu = data.spu_list.slice(0,8)
      }
    }

    const bannerB = await Banner.getHomeLocationB()
    const bannerG = await Banner.getHomeLocationG()
    const grid = await Category.getGridCategory()
    const activityD = await Activity.getHomeLocationD()
    this.setData({
      themeA,
      bannerB,
      grid,
      activityD,
      themeE,
      themeESpu,
      themeF,
      bannerG,
      themeH,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  }
})