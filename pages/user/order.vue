<template>
	<view class="userOrder">
		<!-- <view class="tabs">
			<view class="title" 
				v-for="(tabs, tabsIndex) in tabsItem" 
				:key="tabsIndex"
				:class="{active: isTabs == tabsIndex}"
				@click="tabsClick(tabs,tabsIndex)">
				{{tabs}}
			</view>
		</view>
		
		<view class="order" v-if="isTabs == 0">
			<view 
				class="orderItem"
				v-for="(order, orderIndex) in orderItem"
				:key="orderIndex"
				:class="{overdue: order.type=='1'}"
				@click="orderItemClick(order)"
			>
				<view class="header">
					<text class="objective">{{order.objective}}</text>
					<text class="number">订单号:{{order.number}}</text>
				</view>
				<view class="container">
					<view class="left">
						<view class="sumPre"> 
							<text class="nowPre">{{order.nowPre}}</text>
							/{{order.sumPre}}期
						</view>
						<view class="shouldMoney">本期应还:{{order.shouldMoney}}</view>
						<view class="state">{{order.state}}</view>
					</view>
					<view class="right">
						<view class="expire">{{order.expire}}</view>
						<view class="repay">还款日期:{{order.repay}}</view>
						<view class="loan">借款日期:{{order.loan}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="detail" v-if="isTabs == 1">
			<view 
				class="detailItem" 
				v-for="(detail,detailIndex) in detailItem"
				:key="detailIndex"
				@click="detailItemClick(detail)"
			>
				<view class="number">贷款金额(元): {{detail.number}}</view>
				<view class="types">
					<text class="time">还款时间: {{detail.time}}</text>
					<view class="state">{{detail.state}} <image class="images" :src="detailArrow"></image></view>
				</view>
			</view>
		</view> -->
		
		<view class="memberItem">
			<view class="header">
				<text class="objective">普通会员</text>
				<text class="state">已支付</text>
			</view>
			<view class="container">
				<view class="order">
					<view class="orderitem">卡号：11099092974</view>
					<view class="orderitem">密码：123456</view>
					<view class="vip">VIP</view>
				</view>
				<view class="number">订单金额：99元</view>
				<view class="time">有效时间：2020-02-12 12:20:38 至 
				2020-05-12 16:24:38</view>
			</view>
		</view>
		
		<view class="memberItem">
			<view class="header">
				<text class="objective">高级会员</text>
				<text class="state" style="color: #aaa;">未支付</text>
			</view>
			<view class="container">
				<view class="number">订单金额：199元</view>
				<view class="btnOrder" @click="orderClick">去支付 ></view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		name: 'operator',
		data() {
			return {
				tabsItem: ['贷款订单','贷款详情'],	
				isTabs: 0,
				
				orderItem: [
					{
						type: '0',
						objective: '车辆抵押',
						number: '202001010012',
						nowPre: '3',
						sumPre: '12',
						shouldMoney: '2123',
						state: '待还款',
						expire: '十天到期',
						repay: '2020-01-01',
						loan: '2020-02-02'
					},
					{
						type: '1',
						objective: '车辆抵押',
						number: '202001010012',
						nowPre: '3',
						sumPre: '12',
						shouldMoney: '2123',
						state: '已逾期3天',
						expire: '已逾期',
						repay: '2020-01-01',
						loan: '2020-02-02'
					}
				],
				
				detailArrow: require("@/static/image/arrow_right_line.svg"),
				detailItem: [
					{number: '100,000',time: '2019年12月30日',state: '已结清'},
					{number: '100,000',time: '2019年12月30日',state: '已结清'},
					{number: '100,000',time: '2019年12月30日',state: '已结清'}
				]
				
			}
		},
		methods: {
			// tabs选项卡
			tabsClick(tabs, index) {
				this.isTabs = index;
			},
			
			// 点击订单
			orderItemClick(order) {
				
			},
			// 点击详情
			detailItemClick(detail) {
				uni.navigateTo({
					url: './orderInfo'
				})
			},
			
			// 去支付
			orderClick() {
				uni.navigateTo({
					url: '../member/join'
				})
				
			},
			
		}
		
	}
	
</script>

<style lang="scss">
	.userOrder {
		position: relative;
		
		.tabs {
			margin: 15px;
			background-color: #fff;
			border-radius: 2px;
			display: flex;
			box-shadow: 0 0 5px #ddd;
			.title {
				position: relative;
				flex: 1;
				height: 40px;
				line-height: 40px;
				text-align: center;
				font-size: 14px;
				color: #7C89A4;
				transition: all .3s;
			}
			.title.active {
				font-weight: bolder;
				color: #1D2C4C;
				&:after {
					content: '';
					display: block;
					position: absolute;
					bottom: 0;
					left: 0;
					height: 2px;
					width: 100%;
					background-color: #F5A623;
				}
			}
		}
		.orderItem {
			margin: 10px 15px;
			background-color: #fff;
			box-shadow: 0 0 5px #ddd;
			transition: all .3s;
			&:active {
				background-color: #f8f8f8;
			}
			.header {
				padding: 0 15px;
				height: 40px;
				line-height: 40px;
				font-size: 12px;	
				border-bottom: 1px solid #E4E8F0;
			}
			.objective {
				color: #4a4a4a;
			}
			.number {
				margin-left: 6px;
				color: #7C89A4;
			}
			.container {
				padding: 15px;
				line-height: 28px;
				font-size: 14px;
				display: flex;
				.left {
					flex: 1;
				}
				.right {
					flex: 1;
					text-align: right;
				}
			}	
			.sumPre,
			.loan {
				color: #9b9b9b;
			}
			.nowPre,
			.state,
			.expire {
				color: #F5A623;
			}
			.shouldMoney,
			.repay {
				color: #1D2C4C;
			}
			.expire {
				display: inline-block;
				padding: 0 4px;
				font-size: 12px;
				line-height: 16px;
				border: 1px solid #F5A623;
			}
		}
		.overdue {
			.state,
			.expire {
				color: #FA652B;
			}
			.expire {
				border: 1px solid #FA652B;
			}
		}
		.detailItem {
			margin: 10px 15px;
			padding: 15px;
			background-color: #fff;
			line-height: 24px;
			font-size: 12px;
			transition: all .3s;	
			&:active {
				background-color: #f8f8f8;
			}
			.number {
				color: #1D2C4C;
			}
			.time {
				color: #7C89A4;
			}
			.state {
				float: right;
				color: #9B9B9B;
			}
			.images {
				margin-left: 4px;
				width: 10px;
				height: 10px;
				vertical-align: -1px;
			}
		}
		
		.memberItem {
			margin: 10px 15px;
			background-color: #fff;
			.header {
				padding: 0 15px;
				height: 40px;
				line-height: 40px;
				font-size: 12px;	
				border-bottom: 1px solid #E4E8F0;
				.state {
					float: right;
				}
			}
			.container {
				position: relative;
				padding: 10px;
				.order {
					padding: 10px;
					background-color: #FFF1E3;
					line-height: 24px;
					font-size: 14px;
					color: #ca8216;
				}
				.vip {
					position: absolute;
					top: 30px;
					right: 20px;
					height: 30px;
					line-height: 30px;
					width: 50px;
					text-align: center;
					background-color: #FC7B59;
					border-radius: 3px;
					font-weight: bolder;
					color: #ddd;
				}
				.number {
					line-height: 30px;
					font-size: 14px;
					font-weight: bolder;
					color: #555;
				}
				.time {
					font-size: 11px;
					color: #bbb;
				}
				.btnOrder {
					font-size: 14px;
					color: #F5A623;
				}
			}
		
		}
	}
</style>
