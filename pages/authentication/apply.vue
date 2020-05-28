<template>
	<view class="authenticationIndex">
		<!-- 额度信息 -->
		<view class="quota">
			<view class="item" v-for="(quota, quotaIndex) in quotaItem" :key="quotaIndex">
				<view class="title">{{quota.title}}</view>
				<view class="subtitle">{{quota.subtitle}}</view>
			</view>
		</view>

		
		<view class="list">
			<uni-list>
			    <uni-list-item 
						v-for="(list, index) in listItem"
						:key="index"
						:title="list.title" 
						:thumb="list.thumb" 
						:showText="list.showText"
						:showActive="list.showActive"
						:showTxt="list.showTxt"
						@click="listClick(list,index)"
					/>
			</uni-list>
		</view>
		<view class="tips">需提交认证材料即可立即领钱</view>
		
		<view class="submit">
			<button class="button" type="primary" @click="submit">立即领钱</button>
		</view>
		
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list/uni-list-item/uni-list-item.vue'
	export default {
		name: 'index',
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				quotaArrow: require("@/static/icon_logo.png"),
				
				quotaItem: [
					{title: '500,000',subtitle: '贷款额度(元)'},
					{title: '0.03%',subtitle: '最低利率(日)'},
					{title: '3-24',subtitle: '支持期限(月)'}
				],
				
				listItem: [
					{
						title: '基本信息',
						thumb: require("@/static/image/basic.svg"),
						showText: true,
						showActive: false,
						showTxt: '立即认证',
					},
					{
						title: '运营商认证',
						thumb: require("@/static/image/operator.svg"),
						showText: true,
						showActive: false,
						showTxt: '立即认证',
					},
					{
						title: '身份证信息',
						thumb: require("@/static/image/idcode.svg"),
						showText: true,
						showActive: false,
						showTxt: '立即认证',
					},
					{
						title: '绑定储蓄卡',
						thumb: require("@/static/image/scard.svg"),
						showText: true,
						showActive: false,
						showTxt: '立即认证',
					},
					{
						title: '信用卡账单认证',
						thumb: require("@/static/image/bill.svg"),
						showText: true,
						showActive: false,
						showTxt: '立即认证',
					},
				],
				
				
			}
		},
		methods: {
			listClick(list,index) {
				switch (index) {
					case 0:
						uni.navigateTo({
							url: './info',
						})
					break
					case 1:
						uni.navigateTo({
							url: './operator'
						})
					break
					case 2:
					uni.navigateTo({
						url: './idCard'
					})
					break
					case 3:
					uni.navigateTo({
						url: './savings'
					})
					break
					case 4:
					uni.navigateTo({
						url: './credit'
					})
					break
					default:
				}
			},
			
			// 确定提交
			submit() {
				uni.showToast({title: '立即领钱 ',duration: 1000,icon:'none'});
			}
			
			
			
		}
		
	}
	
</script>

<style lang="scss">
	.authenticationIndex {
		position: relative;

		.quota {
			display: flex;
			margin:15px;	
			padding: 15px;
			background-image: linear-gradient(to right, #FA6859, #FF905B);
			border-radius: 4px;
			color: #fff;
			.item {
				flex: 1;
				position: relative;
				padding: 0 12px;
				border-right: 1px solid rgba(250,250,250,.2);
			}
			.item:first-child {
				padding-left: 0;
			}
			.item:last-child {
				padding-right: 0;
				border-right: none;
			}
			.title {
				font-size: 18px;
				font-weight: bolder;
			}
			.subtitle {
				font-size: 12px;
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
		.tips {
			padding: 15px;
			font-size: 11px;
			color: #9B9B9B;
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
				background-image: linear-gradient(to right, #FA6859, #FF905B);
			}
		}
		
		
	}
</style>
