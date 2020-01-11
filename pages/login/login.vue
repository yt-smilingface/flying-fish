<template>
	<view class="loginContainer">
		<view disabled class="register">没有账号？立即 <text @click="registerClick" class="text">注册</text></view>
		<form @submit="formSubmit">
			<input class="uni-input" name="name" placeholder="输入账号" />	
			<input class="uni-input" name="password" password placeholder="输入密码" />	
			<button class="btnSubmit" form-type="submit">登录</button>
		</form>
		<view class="error">{{error}}</view>
	</view>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				error: ''
			}
		},
		methods: {
			registerClick() {
				uni.navigateTo({
						url: './register'
				});
			},
			formSubmit(e) {
				let formdata = e.detail.value;
				console.log(formdata)
				if(formdata.name == '') {
					this.error = "用户名不能为空"
					return 
				}
				if(formdata.password == '') {
					this.error = "密码不能为空"
					return 
				}
				
				if(formdata.name == '1') {
					this.error = "用户名或密码错误"
					return 
				}
				this.error = "";
				
				uni.switchTab({
						url: '/pages/tabbar/index/index'
				})
				
			}
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
			margin-bottom: 20px;;
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
