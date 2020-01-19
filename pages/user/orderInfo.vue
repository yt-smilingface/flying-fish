<template>
	<view class="userOrderInfo">
		<view class="banner">
 			<view class="loanNumber">{{loanNumber}}</view>
			<view class="tips">贷款金额(元)</view>
			<image class="loanImage" :src="loanImage"></image>
		</view>
		
		<view class="info">
			<view class="title">借款明细</view>
			<view class="container">
				借款金额<text class="text" style="coloe: #F5A623">{{loan.number}}</text><br>
				放款机构<text class="text">{{loan.type}}</text><br>
				合同期限<text class="text">{{loan.time}}</text><br>
				还款方式<text class="text">{{loan.mode}}</text>
			</view>
		</view>		
		
		<view class="info">
			<view class="title">还款明细</view>
			<view class="container">
				已还本金<text class="text" style="coloe: #F5A623">{{comp.prin}}</text><br>
				已还利息<text class="text">{{comp.intest}}</text><br>
				手续费用<text class="text">{{comp.charge}}</text>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		name: 'operator',
		data() {
			return {
				loanNumber: '100,000',
				loanImage: require("@/static/image/loan_info.svg"),
				
				loan: {
					number: '100，000',
					type: '我来贷',
					time: '2018-01-01至2019-09-09',
					mode: '每月等额'
				},
				comp: {
					prin: '100,00',
					intest: '100',
					charge: '无'
				}
				
			}
		},
		methods: {
			
			
		}
		
	}
	
</script>

<style lang="scss">
	.userOrderInfo {
		position: relative;
		
		.banner {
			position: relative;
			height: 70px;
			margin: 15px;
			padding: 15px;
			background-image: linear-gradient(to right, #FA6859, #FF905B);
			border-radius: 5px;
			color: #fff;
			.loanImage {
				position: absolute;
				top: 0;
				right: 0;
				width: 100px;
				height: 100px;
			}
			.loanNumber {
				line-height: 40px;
				font-size: 18px;
			}
			.tips {
				font-size: 12px;
			}
		}
		.info {
			margin: 15px;
			background-color: #fff;
			box-shadow: 0 0 5px #ddd;
			.title {
				padding: 0 15px;
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #E4E8F0;
				font-size: 14px;
				color: #1D2C4C;
			}
			.container {
				padding: 0 15px;
				line-height: 30px;
				font-size: 14px;
				color: #7C89A4;
			}
			.text {
				margin-left: 10px;
				color: #1D2C4C;
			}
		}
		
	}
</style>
