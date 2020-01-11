<template>
	<view class="authenticationIdcard">
		<view class="list">
			<catLabel 
				text="手机号" 
				inputType="number" 
				dataType="text" 
				v-model="operator.tel" 
			/>
			<catLabel 
				text="运营商" 
				dataType="selector"
				v-model="operator.operator"
				:initIndex="operatorIndex" 
				:selectList="operatorList"  
				@handSelect="handoperator" 
			/>
			<catLabel 
				text="服务密码" 
				inputType="number" 
				dataType="text" 
				v-model="operator.password" 
			/>
		</view>
		<view class="tips">
			温馨提示： <br>
			忘记服务密码？发送【服务密码】到10001可重置密码
		</view>
		
		<view class="agreement">
			<checkbox class="check" value="cb" :checked="isCheckbox" />同意
			<text class="agreementText" @click="agreementClick">《运营商数据采集协议》</text>
		</view>
		
		<button class="btnSubmit" @click="submitClick">提交</button>
		
	</view>
</template>

<script>
	import catLabel from "@/components/cat-label/cat-label.vue"
	export default {
		name: 'operator',
		components: {
			catLabel
		},
		data() {
			return {
				operator: {
					tel: '',
					operator: '',
					password: ''	
				},
				operatorIndex: 0,
				operatorList: [
					{label:'广东电信',value:1,index:0},
					{label:'广东移动',value:2,index:1},
					{label:'广东联通',value:3,index:2},
				],
				
				isCheckbox: false,
				
			}
		},
		methods: {
			
			// 运营商选择
			handoperator(val) {
					this.operatorIndex = val.checkArr.index;
			},
			
			// 协议
			agreementClick() {
				uni.navigateTo({url: './agreement'})
			},
			
			// 提交
			submitClick() {
				uni.showToast({title: '提交成功',duration: 1000})
				uni.navigateTo({
					url: './index'
				})
				
			}
			
		}
		
	}
	
</script>

<style lang="scss">
	.authenticationInfo {
		position: relative;
		.list {
			padding-top: 10px;
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
			padding: 11px;
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
