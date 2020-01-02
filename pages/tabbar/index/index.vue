<template>
	<view class="indexContainer">
		<!-- banner图片 -->
		<image class="banner" mode="widthFix" :src="banner" alt="banner"></image>
		
		<!-- 领取额度 -->
		<view class="getQuota" @click="getQuotaClick">
			<image class="quotaImg" :src="quotaImg" alt="quotaImg"></image>
			<view class="quotaText">
				<view style="color:#1D2C4C">领取额度</view>
				<view style="color:#7C89A4">查看您的分期额度</view>
			</view>
			<image class="quotaArrow" :src="quotaArrow" alt="quotaArrow"></image>
		</view>
		
		<!-- 优惠套餐限时购买 -->
		<view class="title">
			<image class="sellImg" :src="sellImg" alt="sellImg"></image>
			优惠套餐限时购买
		</view>
		<view class="QS-tabs-box">
			<QSTabs 
			ref="tabs" 
			:tabs="tabs" 
			animationMode="line3" 
			:current="current" 
			@change="change"
			activeColor="#adadad"
			lineColor="#f1505c"
			swiperWidth="750">
			</QSTabs>
		</view>
		<swiper 
		class="tabsSwiper"
		:style="{'height': '600rpx'}" 
		:current="swiperCurrent" 
		@transition="transition"
		@animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
				<scroll-view scroll-y style="height: 100%;width: 100%;" >
						<view class="scroll-item" 
							v-for="(ite, ind) in iteItem" :key="ind"
							@click="iteClick(ite)"
							>
							<view class="scroll-item-text-box">
								<image class="tabsImage" :src="ite.image" mode=""></image>
								<view class="tips">商品名称</view>
								<view class="name">{{ite.name}}</view>
								<view class="tips">价格/优惠</view>
								<view class="time">{{ite.time}}</view>
							</view>
						</view>
				</scroll-view>
			</swiper-item>
			
			
		</swiper>
		

		
		
		
	</view>
</template>

<script>
	import QSTabs from '@/utils/QS-tabs.vue';
	
	const Sys = uni.getSystemInfoSync();
	
	export default {
		name: 'index',
		components: {
			QSTabs
		},
		data() {
			return {
				banner: require("@/static/image/banner_index.png"),
				quotaImg: require("@/static/image/wallet.svg"),
				quotaArrow: require("@/static/image/arrow_right.svg"),
				sellImg: require("@/static/image/sell.svg"),
				
			
				tabs:["网站会员","餐饮美食","生活服务","健康体验"],
				current: 0,
				swiperCurrent: 0,
				dx: 0,
				iteItem: [
					{
						image: require("@/static/image/banner_index.png"),
						name: '爱奇艺季度VIP会员',
						time: '20.00元/1个月'
					},
					{
						image: require("@/static/image/banner_index.png"),
						name: '爱奇艺季度VIP会员',
						time: '20.00元/1个月'
					},
					{
						image: require("@/static/image/banner_index.png"),
						name: '爱奇艺季度VIP会员',
						time: '20.00元/1个月'
					},
					{
						image: require("@/static/image/banner_index.png"),
						name: '爱奇艺季度VIP会员',
						time: '20.00元/1个月'
					},
				]
			
			}
		},
		methods: {
			// 获取额度点击事件
			getQuotaClick() {
				
			},
			
			change(index) {
				this.swiperCurrent = index;
			},
			transition({ detail: { dx } }) {
				this.$refs.tabs.setDx(dx);
				console.log('aaaa')
			},
			animationfinish({detail: { current }}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
				console.log('nbbnbnb')
			},
			iteClick(item) {
				
			}
			
		}
	}
	
</script>

<style lang="scss">
	.indexContainer {
		.banner { 
			width: 100%;
			height: 150px;
		}
		.getQuota {
			margin-top: 8px;
			padding: 5px 10px;
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
		
		.QS-tabs-box {
			background-color: #fff;
		}
		.tabsSwiper {
			.scroll-item {
				margin-top:6px;
				padding: 10px;
				background-color: #fff;
				&:active {
					background-color: #fafafa;
				}
				.scroll-item-text-box {
					position: relative;
					padding-left: 90px;
				}
			}
			.tabsImage {	
				position: absolute;
				top: 0;
				left: 0;
				width: 80px;
				height: 80px;
				background-color: #F7F8F9;
			}
			.tips {
				font-size: 12px;
				color: #7C89A4;
			}
			.name {
				margin-bottom: 10px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 16px;
				color: #1D2C4C;
			}
			.time {
				font-size: 16px;
				color: #FA652B ;
			}
		}
		.title {
			margin-top: 8px;
			padding: 0 10px;
			height: 36px;
			line-height: 36px;
			background-color: #fff;
			border-bottom: 1px solid #E4E8F0;
			font-size: 14px;
			color: #1D2C4C;
			.sellImg {
				margin-right: 6px;
				width: 14px;
				height: 14px;
				vertical-align: -2px;
			}
		}
		
		
	}
</style>
