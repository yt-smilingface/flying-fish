<template>
	<view class="authenticationcredit">
		<view class="tabs">
			<view class="title" 
				v-for="(tabs, tabsIndex) in tabsItem" 
				:key="tabsIndex"
				:class="{active: isTabs == tabsIndex}"
				@click="tabsClick(tabs,tabsIndex)">
				{{tabs}}
			</view>
		</view>
		
		<view class="list credit" v-if="isTabs == 0">
			<uni-list class="selectCredit">
				<uni-list-item 
					:title="selectCredit.title" 
					:thumb="selectCredit.thumb" 
					@click="selectCreditClick"
				/>
			</uni-list>
			<catLabel 
				text="信用卡号码" 
				inputType="number" 
				dataType="text" 
				v-model="operator.tel" 
			/>
			<catLabel 
				text="网银密码" 
				inputType="number" 
				dataType="text" 
				v-model="operator.password"  
			/>
		</view>
		
		<view class="list" v-if="isTabs == 1">
			
			<catLabel 
				text="身份证号码" 
				inputType="number" 
				dataType="text" 
				v-model="idCard.num" 
			/>
			<catLabel 
				text="登录密码" 
				inputType="password"
				dataType="text" 
				v-model="idCard.password"  
			/>
		</view>
		<view class="agreement">
			<text @click="forgetClick">忘记密码？</text>
		</view>		
		<view class="agreement">
			<checkbox class="check" value="cb" :checked="isCheckbox" />同意
			<text class="agreementText" @click="agreementClick">《网银解析协议》</text>
		</view>		
		<view class="agreement">
			<checkbox class="check" value="cb" :checked="isPreseLogin" />保存登录信息
		</view>
		
		<button class="btnSubmit" @click="submitClick">提交</button>
		
	</view>
</template>

<script>
	import catLabel from "@/components/cat-label/cat-label.vue"
	import uniList from '@/components/uni-list/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list/uni-list-item/uni-list-item.vue'
	export default {
		name: 'operator',
		components: {
			catLabel,
			uniList,
			uniListItem
		},
		data() {
			return {
				tabsItem: ['信用卡号码','身份证号码'],	
				isTabs: 0,
				
				selectCredit: {
					title: '光大银行',
					thumb: require("@/static/image/bank/guangda.svg"),
				},
				operator: {
					tel: '',
					password: ''	
				},
				idCard: {
					num: '',
					password: ''
				},
				
				isCheckbox: false,
				isPreseLogin: false,
				
			}
		},
		onLoad: function (option) {
			console.log(option)
			if(option.length != {}) {
				let res = JSON.parse(decodeURIComponent(option.item));
				console.log(res) //打印出上个页面传递的参数。
				this.selectCredit.title = res.text;	
				this.selectCredit.thumb = res.images;	
			}
		},
		methods: {
			// tabs选项卡
			tabsClick(tabs, index) {
				this.isTabs = index;
			},
			
			// 点击银行
			selectCreditClick() {
				uni.navigateTo({
					url: './bank-credit'
				})
			},
			
			// 忘记密码
			forgetClick() {
				uni.showToast({title: '忘记密码',duration: 1000})
			},
			
			// 协议
			agreementClick() {
				uni.navigateTo({url: './internet-agreement'})
			},
			
			// 提交
			submitClick() {
				uni.showToast({title: '提交成功',duration: 1000})
				uni.navigateTo({
					url: './apply'
				})
				
			}
			
		}
		
	}
	
</script>

<style lang="scss">
	.authenticationcredit {
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
					background-color: #497DF5;
				}
			}
		}
		
		.selectCredit {
			padding-right: 15px;
			margin-bottom: 10px;
		}
		.uni-list-item__icon {
			width: 30px;
		}	
		
		.list .cat-label:last-child .container {
			border: none;
		}
		.tips {
			padding: 11px;
			font-size: 14px;
			color: #9B9B9B;
		}
		.agreement {
			padding: 11px 11px 0 11px;
			font-size: 14px;
			color: #7C89A4;
			.check {
				vertical-align: 3px;
				transform:scale(0.8);
			}
			.agreementText {
				color: #4778F5;
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
