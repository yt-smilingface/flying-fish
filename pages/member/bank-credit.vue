<template>
	<view class="authenticationBank">
		<view class="tabs">
			<view class="tab" 
				v-for="(item, index) in tabsItem" 
				:key="index"
				:class="{'active': tabsActive == index}"
				@click="tabsChange(item,index)">
				{{item.text}}
			</view>
		</view>
		<view class="item" 
			v-for="(item, index) in items" 
			:key="index"
			@click="itemClick(item)">
			<image class="image" :src="item.images"></image>
			<text class="text">{{item.text}}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		name: 'bank',
		data() {
			return {
				tabsActive: 0,
				tabsItem: [
					{text: '借记卡'},
					{text: '信用卡'}
				],
				info: {type: '借记卡'},
				items: [
					{text: '光大银行',images: require("@/static/image/bank/guangda.svg")},
					{text: '交通银行',images: require("@/static/image/bank/jiaotong.svg")},
					{text: '招商银行',images: require("@/static/image/bank/zhaoshang.svg")},
					{text: '中国银行',images: require("@/static/image/bank/zhongguo.svg")},
					{text: '建设银行',images: require("@/static/image/bank/jianshe.svg")},
					{text: '中信银行',images: require("@/static/image/bank/zhongxin.svg")},
					{text: '平安银行',images: require("@/static/image/bank/pingan.svg")},
					{text: '农业银行',images: require("@/static/image/bank/nongye.svg")},
					{text: '工商银行',images: require("@/static/image/bank/gongshang.svg")},
					{text: '浦发银行',images: require("@/static/image/bank/pufa.svg")}
				]
				
			}
		},
		methods: {
			tabsChange(item,index) {
				this.tabsActive = index
				this.info.type = item.text
			},
			
			itemClick(item) {
				this.info.item = item
				console.log(this.info)
				uni.navigateTo({	
					url: './bank-edit?item=' + encodeURIComponent(JSON.stringify(this.info)) 
				});

			}
			
		}
		
	}
	
</script>

<style lang="scss">
	.authenticationBank {
		.tabs {
			display: flex;
			width: calc(100% - 40px);
			margin: 10px auto;
			height: 34px;
			line-height: 34px;
			background-color: #fff;
			box-shadow: 0 0 3px #eee;
			border-radius: 4px;
			font-size: 14px;
			color: #444;
			border-bottom: 2px solid #fff;
			transition: all .2s;
			.tab {
				flex: 1;
				text-align: center;
			}
			.tab.active {
				border-bottom: 2px solid #497DF5;
			}
		}
		
		.item {
			margin: 1px 0;
			padding: 15px; 
			background-color: #fff;
			.image {
				width: 30px;
				height: 30px; 
				vertical-align: top;
				display: inlne-block;
			}
			.text {
				margin-left: 6px;
				heihgt: 30px;
				line-heihgt: 30px;
				vertical-align: -3px;
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
				background-image: linear-gradient(to right, #FA6859, #FF905B);
			}
		}
		
	}
</style>
