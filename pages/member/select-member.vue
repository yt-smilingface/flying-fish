<template>
	<view class="memberSelectMember">
		<view class="list">
			<radio-group @change="radioChange">
				<view class="item" v-for="(item, index) in cardItem" :key="index">
					<image class="image" :src="item.iamge"></image>
					<text class="name">{{item.name}}</text>
					<text class="number">({{item.fourthnumber}})</text>
					<text class="type">{{item.type}}</text>
					<radio class="radio" :value="item.number" color="#ff8618" :checked="index == current" />
				</view>
			</radio-group>
		</view>
		
		<button class="add" type="default" @click="addMode">
			<image class="add-image" src="../../static/image/icon_add.png"></image>
			添加
		</button>
		
	
		<view class="agreement" @click="agreement"> 《飞鱼会员用户使用协议》</view>
		
		<view class="submit">
			<view class="money">实付金额： {{money}}</view>
			<button class="button" type="primary" @click="submit">立即支付</button>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		name: 'select-member',
		data() {
			return {
				money: '',
				current: '',
				cardItem: [
					{
						iamge: require("@/static/image/vip.svg"),
						name: '中国银行',
						number: '12248634966317496',
						fourthnumber: '1234',
						type: '信用卡'
					},
					{
						iamge: require("@/static/image/vip.svg"),
						name: '中国银行',
						number: '122483334966317496',
						fourthnumber: '5624',
						type: '信用卡'
					},
				],
				
			}
		},
		onLoad: function(option) {
			this.money = option.money
		},
		methods: {
			// 用户协议
			agreement() {
				uni.navigateTo({
					url: './agreement'
				})
			},
			
			// 点击银行卡单选框
			radioChange(item) {
				console.log(item)
			},
			
			// 添加支付方式
			addMode() {
				uni.navigateTo({
					url: './bank-credit'
				})
			},
				
				
			
			// 立即支付
			submit() {
				
				// uni.navigateTo({
				// 	url: './agreement'
				// })
				
			}
				
			
		}
	}
</script>
	
<style lang="scss">
	.memberSelectMember {
		.list {
			.item {
				padding: 20rpx 40rpx;
				margin-top: 20rpx;
				background-color: #fff;
				height: 60rpx;
				line-height: 60rpx;
				vertical-align: top;
			}
			.image {
				float: left;
				width: 60rpx;
				height: 60rpx;
			}
			.name {
				float: left;
				margin-left: 20rpx;
				margin-right: 20rpx;
				font-size: 28rpx;
				color: #1D2C4C;
			}
			.number {
				float: left;
				font-size: 28rpx;
				color: #7C89A4;
			}
			.type {
				float: left;
				margin-left: 40rpx;
				font-size: 28rpx;
				color: #9B9B9B;
			}
			.radio {
				float: right;
				width: 30rpx;
				height: 30rpx; 
			}
		}
		
		.add {
			margin-top: 20rpx;
			height: 80rpx;
			line-height: 80rpx;
			background-color: #fff;
			font-size: 14px;
			color: #1D2C4C;
			&:active {
				background-color: #f6f6f6;
				border: 1px solid #f0f0f0;
			}
			.add-image {
				width: 28rpx;
				height: 28rpx;
				margin-right: 20rpx;
				vertical-align: -2rpx;
			}
			&::after {
				border-radius: 0;
				border: 1px solid #F7F8F9;
			}
		}
		
		.agreement {
			margin-left: 15px;
			font-size: 12px;
			margin-top: 10px;
			color: #F5A623;
		}
		
		.submit {
			position: fixed;
			bottom: 0;
			left: 0;
			padding: 15px;
			width: calc(100% - 30px);
			background-color: #fff;;
			.money {
				margin-bottom: 6px;
				font-size: 14px;
				color: #9B9B9B;
			}
			.button {	
				height: 44px;
				line-height: 44px;
				background-image: linear-gradient(to right, #FA6859, #FF905B);
			}
		}
		
	}
</style>
