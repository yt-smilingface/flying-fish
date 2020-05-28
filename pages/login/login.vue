<template>
	<view class="loginContainer">
		<view disabled class="register">没有账号？立即 <text @click="registerClick" class="text">注册</text></view>
		<form @submit="formSubmit">
			<input class="uni-input" :value="name" name="name" placeholder="输入账号" />	
			<input class="uni-input" :value="password" name="password" password placeholder="输入密码" />	
			<button class="btnSubmit" form-type="submit">登录</button>
		</form>
		<view class="error">{{error}}</view>
	</view>
</template>

<script>
	import urlConfig from '../../common/config.js'
	export default {
		name: 'login',
		data() {
			return {
				error: '',
				name: 'ceshi',
				password: '123456q',
				isLogin: true,
			}
		},
		onLoad: function (option) {
			console.log('options',option)
			if(option.length != {}) {
				if(option.isLogin == 'false') {
					this.isLogin = false
				}
			}
		},
		mounted() {
			this.getData()
		},
		methods: {
			// 检测是否有缓存,如果有缓存,直接调往首页页面
			getData() {
				if(this.isLogin) {
					var userInfo = uni.getStorage({
						key: 'userInfo',
						success: (res) => {
							let query = {
								loginName: res.data.loginName,
								loginPwd: res.data.loginPwd
							}
							this.postLogin(query)
						},
					})	
				}
				
			},
			registerClick() {
				uni.navigateTo({
						url: './register'
				});
			},
			formSubmit(e) {
				let formdata = e.detail.value;
				// console.log(formdata)
				
				if(formdata.name == '') {
					this.error = "用户名不能为空"
					return 
				}
				if(formdata.password == '') {
					this.error = "密码不能为空"
					return 
				}
				this.error = "";
				
				// 缓存数据
				// uni.setStorage({
				// 	key: 'userInfo',
				// 	data: formdata
				// })
				
				let query = {
					loginName: formdata.name,
					loginPwd: formdata.password
				}
				this.postLogin(query)
			},
			
			postLogin(query) {
				uni.request({
					url: urlConfig + '/api/Account/Login',
					method: 'POST',
					data: query,
					success: (res) => {
						if(res.statusCode == 200) {
								uni.setStorage({
									key: 'userInfo',
									data: {
										info: res.data,
										loginName: query.loginName,
										loginPwd: query.loginPwd
									}
								})
								uni.showToast({title: '登录成功',duration: 2000});
								
								uni.navigateTo({
									url: '../tabbar/index/index'
								})
								uni.switchTab({  
									url: '../tabbar/index/index'  
								});  
							} else {
								uni.showToast({title: '账号或密码错误',duration: 2000});
							}
						}
					})
				
			},
			
		}
	}
</script>

<style lang="scss">
	.loginContainer {
		padding: 0 20px;
		// background-color: #fff;
		min-height: 100%;
		.register {
			padding: 40px 0;
			font-size: 14px;
			color: #9B9B9B;
			.text {
				margin-left: 2px;
				color: #497DF5;
			}
		}
		.error {
			margin-top: 24px;
			text-align: center;
			font-size: 14px;
			color: #f00;
		}
		.uni-input {
			margin-bottom: 20px;
			padding: 0 10px;
			height: 40px;
			line-height: 40px;
			background-image: linear-gradient(to right, #F0F2F3, #F4F6F7);
		}
		.uni-input-placeholder {
			font-size: 12px;
			color: #BBC0CA;
		}
		.btnSubmit {
			height: 40px;
			line-hgiht: 40px;
			background-image: linear-gradient(to right, #4778F5, #56A7EF);
			font-size: 14px;
			color: #fff;
		}
	}
</style>
