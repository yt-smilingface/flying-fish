<template>
	<view class="memberJoin">
	
		<uni-list class="list">
			<uni-list-item 
				class="listItem"
				:title="name.title" 	
				:show-arrow="false"
			>
				<view class="note">{{name.note}}</view>
			</uni-list-item>
		
			<uni-list-item 
				class="listItem"
				:title="time.title" 
				:showActive="time.showActive"
				:showText="time.showText"
				:showTxt="time.showTxt"
			>
				<view class="note">{{time.note}}</view>
			</uni-list-item>
		</uni-list>	
		
		<view class="item">
			<view class="title">会员套餐</view>
			<view class="container">
				<view class="memberList">
					<view class="memberItem" 
						v-for="(member, memberIndex) in memberItem" 
						:key="memberIndex"
						:class="{active: memberActive == memberIndex}"
						@click="memberItemClick(member,memberIndex)">
						<view class="memberTitle">{{member.title}}</view>
						<image class="memberImage" :src="member.images"></image>
						<view class="memberNum">{{member.num}}</view>
					</view>
				</view>
			</view>
		</view>		
		
		<view class="item">
			<view class="title">支付方式</view>
			<view class="container">
				<uni-list class="list memberCheck">
					<uni-list-item 
						title="支付宝支付" 	
						:thumb="zhifubaoThumb" 	
						:show-arrow="false"
						@click="memberCheck(0)"
					>
						<view class="check"><radio value="r1" color="#F5A623" :checked="zhifubaoChecked" /></view>
					</uni-list-item>
				
					<uni-list-item 
						title="微信支付" 	
						:thumb="wechatThumb" 
						:show-arrow="false"
						@click="memberCheck(1)"
					>
						<view class="check"><radio value="r1" color="#F5A623" :checked="wechatChecked" /></view>
					</uni-list-item>
				</uni-list>	
			</view>
		</view>
		
		<view class="submit">
			<view class="money">实付金额： {{money}}</view>
			<button class="button" type="primary" @click="submit">立即支付</button>
		</view>
		
		
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list/uni-list-item/uni-list-item.vue'
	export default {
		name: 'member-join',
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				name: {
					title: '账号',
					note: 'ada2ff'
				},
				time: {
					title: '时间',
					note: '季度',
					showText: true,
					showActive: true,
					showTxt: '2010-12-12到期	'	
				},
				memberActive: 0,
				memberItem: [
					{
						title: '初级会员',
						images: require("@/static/image/vip.svg"),
						num: '49.00'
					},
					{
						title: '中级会员',
						images: require("@/static/image/vip.svg"),
						num: '99.00'
					},
					{
						title: '高级会员',
						images: require("@/static/image/vip.svg"),
						num: '199.00'
					}
				],
				zhifubaoThumb: require("@/static/image/zhifubao.svg"),
				wechatThumb: require("@/static/image/wechat.svg"),
				zhifubaoChecked: true,
				wechatChecked: false,
				money: '49.00'
				
			}
		},
		methods: {
			// 点击会员选择
			memberItemClick(item,index) {
				this.memberActive = index;
				this.money = item.num;
			},
			
			// 点击支付方式
			memberCheck(val) {
				if(val == 0) {
					this.zhifubaoChecked = true;
					this.wechatChecked = false;
				}
				if(val == 1) {
					this.zhifubaoChecked = false;
					this.wechatChecked = true;
				}
			},
			
			// 立即支付
			submit() {
				// 支付宝支付
				if(this.zhifubaoChecked) {
					uni.showToast({title: '支付宝支付',duration: 1000})
				}
				// 微信支付
				if(this.wechatChecked) {
					uni.showToast({title: '微信支付',duration: 1000})
				}
				
			}
				
			
		}
	}
</script>
	
<style lang="scss">
	.memberJoin {
		.list {
			margin-top: 10px;
			padding-right: 15px;
			.listItem {
				position: relative;
			}
			.note {
				position: absolute;
				top: 8px;
				left: 40px;
				font-size: 14px;
				font-weight: bolder;
				color: #1D2C4C;
			}
		}
		.item {
			margin-top: 8px;
			background-color: #fff;
			padding: 0 15px;			
			.title {
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #E4E8F0;
				font-size: 14px;
				font-weight: bolder;
				color: #1D2C4C;
			} 
			.memberList {
				display: flex;
				padding: 15px 0;
				margin-right: -10px;
			}
			.memberItem {
				flex: 1;
				position: relative;
				margin-right: 10px;
				padding: 10px;
				border: 1px solid #E4E4E4;
				transition: all 0.3s;
			}
			.memberItem.active {
				border: 1px solid #F5A623;
				background-color: #FFF1E3;
				.memberTitle {
					color: #9A7C5F;
				}
			}
			.memberTitle {
				font-size: 12px;
				color: #9B9B9B;
			}
			.memberImage {
				position: absolute;
				top: 10px;
				right: 10px;
				width: 14px;
				height: 14px;
			}
			.memberNum {
				margin-top: 10px;	
				font-size: 16px;
				font-weight: bolder;
				color: #1D2C4C;
			}
		}
		.memberCheck {
			padding-right: 0;
			.uni-list-item {
				padding-left: 0;
			}
			.check {
				position: absolute;
				top: 10px;	
				right: 0;
				transform:scale(0.7);
			}
		}
		
		.submit {
			position: fixed;
			bottom: 0;
			left: 0;
			padding: 15px;
			width: calc(100% - 30px);
			background-color: #fff;;
			.money {
				margin-bottom: 6px;
				font-size: 14px;
				color: #9B9B9B;
			}
			.button {	
				height: 44px;
				line-height: 44px;
				background-image: linear-gradient(to right, #FA6859, #FF905B);
			}
		}
		
	}
</style>
