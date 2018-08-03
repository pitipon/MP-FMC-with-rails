// pages/post/post.js

const app = getApp()

const myRequest = require('../../lib/api/request');

Page({
  data: {},
  // Form Submit Button
  bindSubmit: function (e) {
 
    let page = this
    wx.showToast({ title: 'Sending...', icon: 'loading', duration: 1000 })
    
    // Post new story to API
    myRequest.post({
      path: 'stories',
      data: {
        story: {
          name: e.detail.value.name,
          text: e.detail.value.text
        }
      },
      success(res) {
        console.log(res)
      }
    })
    

    setTimeout(function () {
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }, 1000)

  }
})