<template>
	<view class="userContainer">
		<view class="userHeader">
			<image class="headImg" :src="head.img"></image>
			<view class="time" >{{head.time}}</view>
			<view class="user" @click="userLogin">
				{{head.user}} 
				<image class="headState" :src="head.statey"></image>
				<image class="headState" :src="head.staten"></image>
			</view>
		</view>
		
		<!-- 领取额度 -->
		<view class="getQuota" @click="getQuotaClick">
			<image class="quotaImg" :src="quotaImg" alt="quotaImg"></image>
			<view class="quotaText">
				<view style="color:#1D2C4C">领取额度</view>
				<view style="color:#7C89A4">查看您的分期额度</view>
			</view>
			<image class="quotaArrow" :src="quotaArrow" alt="quotaArrow"></image>
		</view>
		
		<view class="list">
			<uni-list>
			    <uni-list-item title="我的订单" :thumb="list.orderThumb" @click="listClick(0)"></uni-list-item>
			    <uni-list-item title="精彩推荐" :thumb="list.orderRecommend" @click="listClick(1)"></uni-list-item>
			    <uni-list-item title="浏览记录" :thumb="list.orderBrowse" @click="listClick(2)"></uni-list-item>
			    <uni-list-item title="关于我们" :thumb="list.orderAbout" @click="listClick(3)"></uni-list-item>
			</uni-list>
		</view>
		
		<view class="warning">{{warning}}</view>
		
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list/uni-list-item/uni-list-item.vue'
	export default {
		name: 'user-index',
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				head: {
					img: require("@/static/image/icon_head.svg"),
					time: '',
					user: '登录',
					statey: require("@/static/image/auth_reading.svg"),
					staten: require("@/static/image/auth_yes.svg"),
				},
				
				quotaImg: require("@/static/image/wallet.svg"),
				quotaArrow: require("@/static/image/arrow_right.svg"),
				
				list: {
					orderThumb: require("@/static/image/order.svg"),
					orderRecommend: require("@/static/image/recommend.svg"),
					orderBrowse: require("@/static/image/browse.svg"),
					orderAbout: require("@/static/image/about.svg"),
				},
				
				warning: '根据国家法律规定，禁止向未成年人以及大学生提供贷款服务。'
				
			}
		},
		onLoad() {
			
		},
		mounted() {
			this.getUserInfo()
			this.getTime()
		},
		methods: {
			// 获取个人信息
			getUserInfo() {
				let userInfo = uni.getStorage({
					key: 'userInfo',
					success: (res) => {
						this.head.user = res.data.info.name
					},
					fail: (fail) => {
						this.head.user = '登录'
					}
				})
			},
			
			// 获取时间段
			getTime() {
				let date = new Date()
				let hour = date.getHours()
				if(hour < 12) {
					this.head.time = '早上好'
				} else if(hour > 12 && hour < 13) {
					this.head.time = '中午好'
				} else if(hour > 13 && hour < 18) {
					this.head.time = '下午好'
				} else {
					this.head.time = '晚上好'
				}
			},
			
			// 获取额度点击事件
			getQuotaClick() {
				uni.navigateTo({
					url: '../../authentication/index'
				})
			},
			
			// 点击登录
			userLogin() {
				let isLogin = false
				uni.navigateTo({
				    url: '../../login/login?isLogin=' + isLogin
				});
			},
			
			listClick(val) {
				let checkLogin = this.checkLogin();
				if(!checkLogin) {
					return
				};
				switch (val) {
					case 0:
					uni.navigateTo({
						url: '../../user/order'
					})
					break
					case 1:
					uni.navigateTo({
						url: '../../user/reommend'
					})
					break
					case 2:
						uni.navigateTo({
							url: '../../user/browse'
						})
					break
					case 3:
						uni.navigateTo({
							url: '../../user/about'
						})
					break
					default:
				}
			}
			
			
			
		}
		
	}
	
</script>

<style lang="scss">
	.userContainer {
		position: relative;
		&::before {
			content: '';
			display: block;
			width: 100%;
			height: 80px;
			background-image: linear-gradient(to bottom, #FE9F1A, #FEC655);
		}
		.userHeader {
			position: relative;
			margin-top: -60px;
			margin: -40px 15px 0 15px;
			padding: 10px 10px 10px 80px;
			border-radius: 5px;
			background-color: #fff;
			.headImg {
				position: absolute;
				top: 10px;
				left: 10px;
				width: 60px;
				height: 60px;
				border-radius: 5px;
				background-color: #f0f0f0;
			}
			.time {
				margin-top: 10px;
				font-size: 14px;
				color: #7C89A4;
			}
			.user {
				line-height: 30px;
				font-size: 18px;
				font-weight: bolder;
				color: #1D2C4C;
			}
			.headState {
				vertical-align: -2px;
				width: 60px;
				height: 20px;
			}
		}
		
		.getQuota {
			margin-top: 8px;
			padding: 5px 15px;
			background-color: #fff;
			&:active {
				background-color: #fafafa;
			}
			.quotaImg {
				display: inline-block;
				width: 50px;
				height: 50px;
				vertical-align: middle;
				margin-right: 14px;
			}
			.quotaText {
				display: inline-block;
				vertical-align: middle;
				font-size: 12px;
			}
			.quotaArrow {
				display: inline-block;
				width: 20px;
				height: 50px;
				line-height: 50px;
				vertical-align: middle;
				float: right;
			}
		}
		
		.list {
			margin-top: 8px;
			.uni-list-item {
				padding: 0 15px;
			}
			.uni-list-item__icon {
				margin-top: 5px;
			}
		}
		
		.warning {
			margin: 10px;
			font-size: 12px;
			color: #9B9B9B;
		}
		
		
		
	}
</style>
