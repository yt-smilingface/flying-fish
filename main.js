import Vue from 'vue'
import App from './App'


import headers from '@/common/headers.js'
import urlConfig from '@/common/config.js'

Vue.prototype.$headers = headers
Vue.prototype.$urlConfig = urlConfig

import request from './common/request.js'
import api from './api/index.js'
import url from './common/config.js'


Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$api = api
Vue.prototype.$url = url

let loginInfo;
Vue.prototype.checkLogin = function(backpage){
	let userInfo = uni.getStorage({
		key: 'userInfo',
		success: (res) => {
			// console.log('res',res);
			loginInfo = res.data;
			// return res
		},	
		fail: (fail) => {
			uni.showModal({
			    title: '提示',
			    content: '您需要先登录',
			    success: function (res) {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/login/login?backpage='+ backpage
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
			    }
			});
			return false
		}
	})
	return loginInfo
}

App.mpType = 'app'

const app = new Vue({
    ...App,
})
app.$mount()
