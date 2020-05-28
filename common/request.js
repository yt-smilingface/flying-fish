import urlConfig from './config.js'

const request = {}
const headers = {}
const PORT1 = '/baseinfo'
    
request.api = (url, method, data) => {
		var accessToken = ''
		var userInfo = uni.getStorage({
			key: 'userInfo',
			success: (res) => {
				headers['Authorization'] = 'Bearer ' + res.data.info.accessToken
				
				uni.request({
						url: urlConfig + url,
						method,
						data: data,
						dataType: 'json',
						header: headers
				}).then(res => {
					// console.log('rsses',res)
					console.log(res[1].data)
					if(res[1].data.statusCode == 200) {
						return res[1].data
					}
				}).catch(parmas => {
					// console.log(parmas)
　　　　　　switch (parmas[1].statusCode) {
　　　　　　　　case 401:
// 　　　　　　　　　　uni.clearStorageSync()
									console.log('报错401')
									// uni.navigateTo({
									// 	url: '@/pages/login/login'
									// })
　　　　　　　　　　break
　　　　　　　　default:
　　　　　　　　　　uni.showToast({
　　　　　　　　　　　　title: parmas.message,
　　　　　　　　　　　　icon: 'none'
　　　　　　　　　　})
　　　　　　　　　　return Promise.reject()
　　　　　　　　　　break
　　　　　　}
		　　})
				
			},
			fail: (fail) => {
				uni.navigateTo({
					url: '@/pages/login/login'
				})
				console.log('请求失败！')
			}
		})
		

 } 

export default request