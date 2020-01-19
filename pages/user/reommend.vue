<template>
	<view class="userRecommend">
		<view class="list">
			<catLabel 
				text="想借多少" 
				inputType="number" 
				dataType="text" 
				v-model="form.money" 
				@blur="blurMoney"
			/>
			<catLabel 
				text="使用途径" 
				dataType="selector"
				v-model="form.trem"
				:initIndex="termIndex" 
				:selectList="termList"  
				@handSelect="handTerm" 
			/>
			<catLabel 
				text="借款时间(月)" 
				dataType="selector"	
				v-model="form.purose"
				:initIndex="purposeIndex" 
				:selectList="purposeList"  
				@handSelect="handPurpose" 
			/>
			<catLabel 
				text="更喜欢" 
				dataType="selector"	
				v-model="form.like"
				:initIndex="likeIndex" 
				:selectList="likeList"  
				@handSelect="handlike" 
			/>
		</view>
		<!-- <button class="btnSubmit" @click="submitClick">提交</button> -->
		
		<view class="hr">精彩推荐</view>
		
		<view
			class="item"
			v-for="(items, itemIndex) in item"
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
</template>

<script>
	import catLabel from "@/components/cat-label/cat-label.vue"
	export default {
		name: 'info',
		components: {
			catLabel
		},
		data() {
			return {
				form: {
					money: '',
					trem: '请选择借款期限',
					purose: '请选择借款意图',
					like: '请选择更喜欢内容'
				},
				
				termIndex: 0,
				termList: [
					{label:'3个月',value:1,index:0},
					{label:'6个月',value:2,index:1},
					{label:'9个月',value:3,index:2},
					{label:'12个月',value:4,index:3},
				],
				
				purposeIndex: 0,
				purposeList: [
					{label:'装修',value:1,index:0},
					{label:'医疗',value:2,index:1},
					{label:'个人消费',value:3,index:2},
				],
				
				likeIndex: 0,
				likeList: [
					{label:'极速贷款',value:1,index:0},
					{label:'微粒贷',value:2,index:1},
					{label:'借呗',value:3,index:2},
				],
				
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
		},
		methods: {
			// 借款金额失去焦点验证
			blurMoney(val) {
				console.log(val)
			},
			
			// 借款期限下拉
			handTerm(val) {
					this.termIndex = val.checkArr.index;
			},
			
			// 借款用途下拉
			handPurpose(val) {
					this.purposeIndex = val.checkArr.index;
			},
			
			// 更喜欢下拉
			handlike(val) {
					this.likeIndex = val.checkArr.index;
			},
			
			// 下一步
			submitClick() {
				console.log(this.form)
				uni.navigateTo({
					url: './contacts'
				})
			}
			
		}
		
	}
	
</script>

<style lang="scss">
	.userRecommend {
		position: relative;
		.list {
			padding-top: 10px;
		}
		.list .cat-label:last-child .container {
			border: none;	
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
		.hr {
			position: relative;
			margin-top: 40px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			font-size: 14px;
			color: #7C89A4;
			&::before {
				content: "";
				position: absolute;
				top: 19px;
				right: calc(50% + 40px);
				display: block;
				width: calc(50% - 55px);
				height: 1px;
				background-color: #E4E8F0;
			}
			&::after {
				content: "";
				position: absolute;
				top: 19px;
				left: calc(50% + 40px);
				display: block;
				width: calc(50% - 55px);
				height: 1px;
				background-color: #E4E8F0;
			}
		}
		
		.item {
			background-color: #fff;
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
</style>
