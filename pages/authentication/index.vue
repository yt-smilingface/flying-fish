<template>
	<view class="authenticationIndex">
		<!-- 认证信息 -->
		<view class="getQuota" @click="getQuotaClick">
			<view class="quotaText">
				<view style="font-size: 14px;color:#1D2C4C">认证信息</view>
				<view style="font-size: 12px;color:#7C89A4">提交认证信息即可领取额度</view>
			</view>
			<image class="quotaArrow" :src="quotaArrow" alt="quotaArrow"></image>
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
		
		<button class="btnSubmit" @click="submitClick">确定</button>
		
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
				],
				
				
			}
		},
		methods: {
			listClick(list,index) {
				switch (index) {
					case 0:
						uni.navigateTo({url: './info'})
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
					default:
				}
			},
			
			// 确定提交
			submitClick() {
				uni.showToast({title: '提交成功 ',duration: 1000,icon:'none'});
			}
			
			
			
		}
		
	}
	
</script>

<style lang="scss">
	.authenticationIndex {
		position: relative;
		.getQuota {
			margin-top: 8px;
			height: 60px;
			padding: 5px 15px;
			background-color: #fff;
			&:active {
				background-color: #fafafa;
			}
			.quotaText {
				margin-top: 10px;
				line-height: 22px;
				display: inline-block;
				vertical-align: middle;
				font-size: 12px;
			}
			.quotaArrow {
				display: inline-block;
				margin-top: 5px;
				width: 50px;
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
		
		.btnSubmit {
			margin: 20px 11px;
			height: 44px;
			line-height: 44px;
			background-image: linear-gradient(to right, #4778F5, #56A7EF);
			color: #fff;
			&:active {
				opacity: 0.8;
			}
		}
		
		
	}
</style>
