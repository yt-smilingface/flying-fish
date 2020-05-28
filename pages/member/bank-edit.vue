<template>
	<view class="authenticationBankEdit">
		<view class="header">
			<image class="image" :src="info.item.images"></image>
			<view class="container">
				<view class="title">{{info.item.text}}</view>
				<view class="type">{{info.type}}</view>
			</view>
		</view>
		
		<view class="cardInfo">
			<catLabel text="银行卡卡号" dataType="text" inputType="number" v-model="form.phone"/>
			<catLabel text="手机号码" dataType="text" inputType="number" v-model="form.tel"/>
			<button class="codeText" @click="codeClick" :disabled="isCode">{{codeText}}</button>
			<catLabel text="验证码" dataType="text" inputType="number" v-model="form.code"/>
			<catLabel text="有效期截止" dataType="text" v-model="form.time"/>
			<catLabel text="安全码后四位" dataType="text" inputType="number" v-model="form.safetyCode"/>
		</view>
		
		<view class="submit">
			<button class="button" type="primary" @click="submit">确定</button>
		</view>
		
	</view>
</template>

<script>
	import catLabel from "@/components/cat-label/cat-label.vue"
	export default {
		name: 'bank',
		components: {
			catLabel
		},
		data() {
			return {
				info: {},
				codeText: '获取验证码',
				isCode: false,
				form: {
					phone: '',
					tel: '',
					code: '',
					time: '',
					safetyCode: ''
				},	
			}
		},
		onLoad: function (option) {
			console.log('options',option)
			if(option.length != {}) {
				this.info = JSON.parse(decodeURIComponent(option.item));
				console.log(this.info) //打印出上个页面传递的参数。
			}
		},
		methods: {
			
			// 发送验证码
			codeClick() {
				let num = 60
				let timer
				timer = setInterval(() =>{
					this.isCode = true
					this.codeText = '重新获取' + num
					num -= 1
					if(num < 0) {
						this.isCode = false
						this.codeText = '获取验证码'
						clearInterval(timer)
					}
				},1000)
			},
				
			// 确定
			submit() {
				
			}	
			
		}
		
	}
	
</script>

<style lang="scss">
	.authenticationBankEdit {
		.header {
			margin: 10px 0;
			height: 50px;
			padding: 10px;
			background-color: #fff;
			.image {
				display: inline-block;
				width: 50px;
				height: 50px;
				vertical-align: top;
			}
			.container {
				margin-left: 10px;
				display: inline-block;
				vertical-align: top;
				.title {
					margin-top: 7px;
					font-size: 14px;
					font-weight: bolder;
					color: #1D2C4C;
				}
				.type {
					font-size: 14px;
					color: #888;
				}
			}
		}
		
		.cardInfo {
			position: relative;
			.codeText {
				position: absolute;
				top: 92px;
				right: 20px;
				background-color: transparent;
				font-size: 12px;
				color: #497DF5;
				z-index: 999;
				&::after {
					border: none;
				}
			}
		}
		
		
		.submit {
			position: fixed;
			bottom: 0;
			left: 0;
			padding: 15px;
			width: calc(100% - 30px);
			background-color: #fff;;
			.button {	
				height: 44px;
				line-height: 44px;
				background-image: linear-gradient(to right, #4778F5, #56A7EF);
			}
		}
		
	}
</style>
