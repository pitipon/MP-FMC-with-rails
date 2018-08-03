//index.js
//获取应用实例
const app = getApp()

const myRequest = require('../../lib/api/request');

Page({
  data: { items: [] },
  onLoad: function () {
    let page = this
    // Fetch Items from API
    myRequest.get({
      path: 'stories',
      success(res) {
        console.log(res)
        page.setData({items : res.data.stories})
      }
    })
  }
})
