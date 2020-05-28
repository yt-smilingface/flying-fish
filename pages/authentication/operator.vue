<template>
	<view class="authenticationOperator">
		<view class="list">
			<catLabel 
				text="手机号" 
				inputType="number" 
				dataType="text" 
				v-model="operator.phoneNo" 
			/>
			<catLabel 
				text="运营商" 
				dataType="selector"
				v-model="operator.ispName"
				:initIndex="operatorIndex" 
				:selectList="operatorList"  
				@handSelect="handoperator" 
			/>
			<catLabel 
				text="服务密码" 
				inputType="number" 
				dataType="text" 
				v-model="operator.pwd" 
			/>
		</view>
		<view class="tips">
			温馨提示： <br>
			忘记服务密码？发送【服务密码】到10001可重置密码
		</view>
		
		<view class="agreement">
			<checkbox-group class="check" @change="checkboxChange">
				<checkbox value="cb" :checked="isCheckbox" />
				<text class="checkText">同意</text>
			</checkbox-group>
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
					phoneNo: '',
					ispName: '广东电信',
					pwd: ''	
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
					console.log(val)
					this.operatorIndex = val.checkArr.index;
					this.operator.ispName = val.result
			},
			
			// 协议
			agreementClick() {
				uni.navigateTo({url: './agreement'})
			},
			
			// 勾选协议
			checkboxChange(val) {
				this.isCheckbox = !this.isCheckbox
			},
			
			// 提交
			submitClick() {
				if(this.operator.phoneNo == '') {
					uni.showToast({title: '请输入手机号',duration: 1000});
					return 
				}
				let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(!phoneReg.test(this.operator.phoneNo)) {
					this.error = "请输入有效的手机号码"
					return 
				}
				if(this.operator.ispName == '') {
					uni.showToast({title: '请选择运营商',duration: 1000});
					return 
				}
				if(this.operator.pwd == '') {
					uni.showToast({title: '请输入服务密码',duration: 1000});
					return 
				}
				
				if(!this.isCheckbox) {
					uni.showToast({title: '请选勾选协议',duration: 1000});
					return 
				}
				
				uni.request({
					url: this.$urlConfig + '/api/MobileIsp',
					method: 'POST',
					data: this.operator,
					header: this.$headers,
					success: (res) => {
						console.log('运营商认证',res)
						if(res.statusCode == 200) {
							uni.showToast({title: '认证成功',duration: 1000})
							// uni.navigateTo({
							// 	url: './index'
							// })
						} else {
							uni.showToast({title: '认证失败',duration: 1000});
						}
					}
				})
				
				
				
				
			}
			
		}
		
	}
	
</script>

<style lang="scss">
	.authenticationOperator {
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
				display: inline-block;
				vertical-align: 1px;
				transform:scale(0.8);
				font-size: 16px;
				.checkText {
					vertical-align: -3px;
				}
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
