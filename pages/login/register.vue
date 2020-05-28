<template>
	<view class="registerContainer">
		<view class="register">已有账号？立即 <text @click="loginClick" class="text">登录</text></view>
		<form @submit="formSubmit">
			<input class="uni-input" name="userName" placeholder="输入用户名" />		
			<input class="uni-input" name="name" placeholder="请输入名称" />	
			<!-- <input class="uni-input" name="email" placeholder="输入邮箱" />	 -->
			<input class="uni-input" name="phone" placeholder="请输入手机号" />	
			<input class="uni-input" name="password" password placeholder="输入密码" />
			<input class="uni-input" name="confirmPassword" password placeholder="再次输入密码" />
			<!-- <input class="uni-input code" name="code" placeholder="输入短信验证码" />	 -->
<!-- 			<button class="btnCode" @click="codeClick">
				获取验证码
				<text class="countDown">{{countDown}}</text>
			</button> -->
			<button class="btnSubmit" form-type="submit">注册</button>
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
				countDown: ''
			}
		},
		methods: {
			// 跳转到登录页面
			loginClick() {
				uni.navigateTo({
					url: './login'
				})
			},
			
			// 获取验证码
			codeClick() {
				let num = 10;
				let timer;
				timer = setInterval(() => {	
					num = num - 1;
					console.log(num)
					this.countDown = num + 's';
					if(num < 0) {
						this.countDown = '';
						clearInterval(timer)
					}
				},1000)
			},
			
			formSubmit(e) {
				let formdata = e.detail.value;
				console.log(formdata)
				if(formdata.userName == '') {
					this.error = "用户名不能为空"
					return 
				}
				if(formdata.email == '') {
					this.error = "邮箱不能为空"
					return 
				}
				if(formdata.name == '') {
					this.error = "名称不能为空"
					return 
				}
				if(formdata.phone == '') {
					this.error = "手机号码不能为空"
					return 
				}
				let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(!phoneReg.test(formdata.phone)) {
					this.error = "请输入有效的手机号码"
					return 
				}
				if(formdata.password == '') {
					this.error = "密码不能为空"
					return 
				}
				// let reg = /^(?=.*[a-zA-Z])\w{6,}$/;
				let reg = /^\w{6,}$/;
				if(!reg.test(formdata.password)) {
						this.error = "密码必须至少是6字符且至少有一个小写字母"
						return 
				}
				if(formdata.password != formdata.confirmPassword) {
					this.error = "两次输入的面必须一致"
					return 
				}
				console.log(formdata.password.length)
				this.error = "";
				let query= {
					LoginName: formdata.userName, //用户名
					// email: formdata.email,  //邮箱 
					Phone: formdata.phone, //手机号
					Name: formdata.name, //手机号
					LoginPwd: formdata.password,  //密码
					ConfirmPwd: formdata.confirmPassword,  //确认密码
 					// nickName: '', //昵称3-20
					// verifyCode: '', 验证码
				}
				console.log(query)
				
				uni.request({
					url: urlConfig + '/api/Account/Register',
					method: 'POST',
					data: query,
					success: (res) => {
						console.log(res)
						console.log(res)
							if(res.statusCode == 200) {
								uni.showToast({title: '注册成功',duration: 2000});
								uni.navigateTo({
									url: './login'
								})
							}
					}
				})
				// this.$api.register(query).then(data => {
				// 	console.log(data)
				// 	if(data[1].statusCode == 200) {
				// 		uni.showToast({title: '注册成功',duration: 2000});
				// 		uni.navigateTo({
				// 			url: './login'
				// 		})
				// 	}
				// }).catch(error => {
					
				// })
				
			}
		}
	}
</script>

<style lang="scss">
	.registerContainer {
		padding: 0 20px;
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
		.code {
			display: inline-block;
			width: calc(100% - 140px);	
		}
		.btnCode {
			display: inline-block;
			margin-left: 10px;
			width: 110px;
			height: 40px;
			line-height: 40px;
			vertical-align: top;
			font-size: 12px;
			color: #666;
		}
		.countDown {
			margin-left: 2px;
			color: #497DF5;
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
