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
		
		<!-- 认证之后显示内容 -->
		<view class="loan" v-for="(loan, loanIndex) in loans" :key="loanIndex">
			<view class="head">
				<text class="headtitle">{{loan.title}}</text>
				<image class="fast" :src="loanFast"></image>
				<text class="nameNum">{{loan.nameNum}}人今日已申请</text>
			</view>
			<view class="container">
				<view class="left">
					<view class="moneyNum">{{loan.moneyNum}}</view>
					<view class="tips">最高额度(元)</view>
				</view>
				<view class="content">
					<view class="contenttitle">一分钟申请，十分钟到账</view>
					<view class="tips">利息0.03%，期限3-24个月</view>
				</view>
				<view class="right">
					<button class="btnApply" type="primary" size="mini" @click="applyClick(loan)">申请</button>
				</view>
			</view>
		</view>
		
		<!-- 会员专区 -->
		<view class="title" style="border-bottom: none;">会员专区</view>
		<view class="member">
			<view class="memberBanner" @click="memberClick">
				<text style="color: #1D2C4C">升级会员，</text>
				<text style="color: #F5A623">加速审批，通过率提高</text>
				<text style="color: #FA652B">50%</text>
			</view>
			<view class="memberBannerTop" v-if="isMemberTop">
				<view class="toptitle">{{memberTop.title}}</view>
				<view class="time">有效期至 {{memberTop.time}}</view>
				<view class="tution" @click="tutionClick">续费</view>
			</view>
			<view class="memberItem">
				<view class="container">
					<view class="left">
						<view class="moneyNum">{{member.moneyNum}}</view>
						<view class="tips">目前可用额度</view>
					</view>
					<view class="right">
						<view class="term">
							想用多久 <text class="text">{{member.term}}</text>
							<view class="arrow" @click="termClick(member)">
								修改<image class="arrowLink" :src="memberArrow"></image>
							</view>
						</view>
						<view class="term">
							想怎么用 <text class="text">{{member.purpose}}</text>
							<view class="arrow" @click="purposeClick(member)">
								选择<image class="arrowLink" :src="memberArrow"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="btnCash" @click="cashClick(member)">立即提现</view>
			</view>
		</view>
		
		<!-- 优惠套餐限时购买 -->
		<view class="title"><image class="sellImg" :src="sellImg" alt="sellImg"></image>优惠套餐限时购买</view>
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
		:style="{'height': '300px'}" 
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
	import QSTabs from '@/components/QS-tabs/QS-tabs.vue';
	
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
				
				loanFast: require("@/static/image/loan.svg"),
				loans: [
					{
						title: '去哪借',
						nameNum: '243',
						moneyNum: 200000
					},
					{
						title: '秒借',
						nameNum: '43',
						moneyNum: 300000
					}
				],
				
				memberArrow: require("@/static/image/arrow_right_line.svg"),
				member: {
					moneyNum: 1000,
					term: '12期',
					purpose: '请选择用途'
				},
				
				tabsSwiperHeight: '',
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
				],
				
				isMemberTop: false,
				memberTop: {
					title: '高级会员',
					time: '2010-10-1',
				}
			
			}
		},
		mounted() {
			
		},
		methods: {
			// 获取额度点击事件
			getQuotaClick() {
				uni.showToast({
				    title: '获取额度',
				    duration: 2000
				});
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
			
			// 优惠套餐点击事件
			iteClick(item) {
				uni.showToast({
				    title: item.name,
				    duration: 2000
				});
			},
			
			// 点击申请
			applyClick(loan) {
				uni.showToast({
				    title: '申请',
				    duration: 2000
				});
			},
			
			// 点击升级会员
			memberClick() {
				uni.navigateTo({	
					url: '../../member/join'
				})
			},
			
			// 想用多久 选择 
			termClick(member){
				uni.showToast({
				    title: '想用多久',
				    duration: 2000
				});
			},
			
			// 想怎么用
			purposeClick(member) {
				uni.showToast({
				    title: '想怎么用',
				    duration: 2000
				});
			},
			
			// 点击立即提现
			cashClick(member) {
				uni.navigateTo({
					url: '../../authentication/apply'
				})
			},
			
			// 续费
			tutionClick() {
				uni.showToast({
				    title: '续费',
				    duration: 2000
				});
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
		
		.QS-tabs-box {
			background-color: #fff;
		}
		.tabsSwiper {
			.scroll-item {
				margin-top:6px;
				padding: 10px 15px;
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
				line-height: 12px;
				font-size: 12px;
				color: #7C89A4;
			}
			.name {
				margin-bottom: 2px;
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
			padding: 0 15px;
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
		
		.loan {
			margin-top: 8px;
			background-color: #fff;
			padding: 10px 15px;
			.head {
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #E4E8F0;
				.headtitle {
					margin-right: 8px;
					display: inline-block;
					vertical-align: top;
					font-size: 15px;
					font-weight: bolder;
					color: #1D2C4C;
				}
				.fast {
					display: inline-block;
					vertical-align: top;
					width: 60px;
					height: 40px;
				}
				.nameNum {
					height: 40px;
					line-height: 40px;
					float: right;
					font-size: 12px;
					color: #7C89A4;
				}
			}
			.container {
				margin-top: 10px;
				display: flex;
				.left {
					flex: 1;
					.moneyNum {
						line-height: 26px;
						font-size: 18px;
						font-weight: bolder;
						color: #F5A623;
					}
				}
				.content {
					flex: 2;
					.contenttitle {
						line-height: 26px;
						font-size: 12px;
						color: #1D2C4C;
					}
				}
				.right {
					flex: 1;
					text-align: right;
					.btnApply {
						margin-top: 10px;
						background-image: linear-gradient(to right, #FA652B, #FF7E0A);
						border-radius: 15px;
					}
				}
				.tips {
					line-height: 20px;
					font-size: 12px;
					color: #9B9B9B;
				}
			}
		}
		
		.member {
			padding: 0 15px;
			background-color: #fff;
			.memberBanner {
				background-color: #FFF1E3;
				padding: 10px 0;
				text-align: center;
				font-size: 12px;
			}
			.memberBannerTop {
				position: relative;
				background-color: #FFF1E3;
				padding: 10px;
				.toptitle {
					font-size: 14px;
					font-weight: bolder;
					color: #FF7E0A;	
				}
				.time {
					margin-top: 10px;
					font-size: 12px;
					color: #9A7C5F;
				}
				.tution {
					position: absolute;
					top: 18px;
					right: 10px;
					display: inline-block;
					padding: 0 20px;
					height: 30px;
					line-height: 30px;
					background-color: #fff;
					border-radius: 15px;
					font-size: 12px;
					color: #FF7E0A;
				}
			}
			.container {
				margin: 10px 0;
				display: flex;
				.left {
					flex: 1;
					.moneyNum {
						line-height: 26px;
						font-size: 18px;
						font-weight: bolder;
						color: #F5A623;
					}
					.tips {
						line-height: 20px;
						font-size: 12px;
						color: #9B9B9B;
					}
				}
				.right {
					flex: 3;
					.term {
						height: 24px;
						line-height: 24px;
						font-size: 12px;
						color: #9B9B9B;
					}
					.text {
						margin-left: 6px;
						color: #1D2C4C;
					}
					.arrow {
						float: right;
					}
					.arrowLink {
						display: inline-block;
						width: 12px;
						height: 10px;
					}
				}
			}
			.btnCash {
				height: 40px;
				line-height: 40px;
				text-align: center;
				border-top: 1px solid #E4E8F0;
				font-size: 14px;
				font-weight: bolder;
				color: #FA652B;
			}
			
		}
		
		
		
	}
</style>
