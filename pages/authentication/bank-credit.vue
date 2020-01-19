<template>
	<view class="authenticationBank">
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
			itemClick(item) {
				uni.navigateTo({	
					url: './credit?item=' + encodeURIComponent(JSON.stringify(item)) 
				});

			}
			
		}
		
	}
	
</script>

<style lang="scss">
	.authenticationBank {
		.item {
			margin: 8px 0;
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
		
	}
</style>
