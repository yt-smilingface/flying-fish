	let headers = {}

	var userInfo = uni.getStorage({
		key: 'userInfo',
		success: (res) => {
			headers['Authorization'] = 'Bearer ' + res.data.info.accessToken
		},
	})	
			

export default headers