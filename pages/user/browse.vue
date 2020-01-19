<template>
	<view class="userBrowse">
		<view 
			class="list"
			v-for="(list, index) in listItem"
			:key="index"
		>
			<view class="time">{{list.time}}</view>
			<view
				class="item"
				v-for="(items, itemIndex) in list.item"
				:key="itemIndex"
			>
				<view class="title">
					{{items.title}}
					<image 
						v-if="items.hot"
						class="hotImg" src="../../static/image/hot.svg" 
					/>
				</view>
				<view class="container">
					<view class="flex">
						<view class="num">{{items.num}}</view>
						<view class="tips">最高额度(元)</view>
					</view>
					<view class="flex">
						<view class="info">0.51% <text>最低月利率</text></view>
						<view class="info">6-12个月 <text>贷款期限</text></view>
					</view>
					<view class="flex sub">
						<button class="btn">申请</button>
					</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		name: 'operator',
		data() {
			return {
				listItem: [
					{
						time: '2012-12-12 16:30',
						item: [
							{
								title: '我来贷',
								num: '100,000',
								hot: false
							},
							{
								title: '我来贷',
								num: '100,000',
								hot:true
							}
						]
					},
					{
						time: '2012-12-12 16:30',
						item: [
							{
								title: '我来贷',
								num: '100,000',
								hot: true
							},
							{
								title: '我来贷',
								num: '100,000',
								hot: false
							}
						]
					}
				]
				
			}
		},
		methods: {
			
			
		}
		
	}
	
</script>

<style lang="scss">
	.userBrowse {
		position: relative;
		.list {
			margin-top: 15px;
			background-color: #fff;
			.time {
				padding: 0 15px;
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #E4E8F0;
				font-size: 14px;
				color: #9B9B9B;
			}
			.title {
				margin-top: 5px;
				padding: 0 15px;
				height: 30px;
				line-height: 30px;
				font-size: 14px;
				font-weight: bolder;
				color: #1D2C4C;
			}
			.hotImg {
				vertical-align: -2px;
				width: 30px;
				height: 14px;
			}
			.container {
				padding: 0 15px 6px 15px;
				line-height: 24px;
				display: flex;
				border-bottom: 1px solid #E4E8F0;
				.flex {
					flex: 1;
				}
				.num {
					font-size: 18px;
					color: #F5A623;
				}
				.tips {
					font-size: 12px;
					color: #9B9B9B;
				}
				.info {
					font-size: 12px;
					color: #4a4a4a;
					* {
						color: #9B9B9B;
					}
				}
			}
			.sub {
				text-align: right;
			}
			.btn {
				margin-top: 6px;
				display: inline-block;
				height: 26px;
				line-height: 26px;
				border-radius: 13px;
				background-image: linear-gradient(to right, #FA652B, #FF7E0A);
				font-size: 12px;
				color: #fff;
				&:active {
					opaity: .8;
				}
			}
		}
	}
</style>
