<template>
	<view>
		<view v-if="isInfo" class="authenticationInfo">
			<view class="list">
				<catLabel 
					text="借款金额" 
					inputType="number" 
					dataType="text" 
					v-model="form.loanMoney" 
					@blur="blurMoney"
				/>
				<catLabel 
					text="借款期限" 
					dataType="selector"
					v-model="form.loanNum"
					:initIndex="termIndex" 
					:selectList="termList"  
					@handSelect="handTerm" 
				/>
				<catLabel 
					text="借款意图" 
					dataType="selector"	
					v-model="form.loanInten"
					:initIndex="purposeIndex" 
					:selectList="purposeList"  
					@handSelect="handPurpose" 
				/>
			</view>
			<view class="list">
				<catLabel text="社会身份" dataType="text" v-model="form.socialIdentity"/>
				<catLabel text="公司名称" dataType="text" v-model="form.companyName"/>
				<!-- <catLabel text="电话区号" dataType="text" inputType="number" v-model="form.companyCode"/> -->
				<catLabel text="公司电话" dataType="text" inputType="number" v-model="form.companyPhone"/>
				<catLabel text="公司地址" dataType="text" v-model="form.comanyAddress"/>
			</view>
			
			<view class="list">
				<catLabel text="月收入" dataType="text" inputType="number" v-model="form.monIncome"/>
				<catLabel 
					text="婚姻状况"  
					dataType="selector"	
					v-model="form.marriageState"
					:initIndex="marriageIndex" 
					:selectList="marriageList"  
					@handSelect="handMarriage" 
				/>
			</view>
			<button class="btnSubmit" @click="nextClick">下一步</button>
		</view>
		
		
		<view v-if="isContacts" class="authenticationContacts">
			<view class="list">
				<view class="title">紧急联系人1</view>
				<catLabel text="联系人关系" dataType="text" v-model="form.lMan1Rel"/>
				<catLabel text="联系人姓名" dataType="text" v-model="form.lMan1Name"/>
				<catLabel text="电话号码" dataType="text" v-model="form.lMan1Phone"/>
			</view>
			<view class="list">
				<view class="title">紧急联系人2</view>
				<catLabel text="联系人关系" dataType="text" v-model="form.lMan2Rel"/>
				<catLabel text="联系人姓名" dataType="text" v-model="form.lMan2Name"/>
				<catLabel text="电话号码" dataType="text" v-model="form.lMan2Phone"/>
			</view>
			
			<button class="btnSubmit prevSubmit" @click="prevClick">上一步</button>
			<button class="btnSubmit" @click="submitClick">提交</button>
		</view>
		
	</view>
	
	
</template>

<script>
	import urlConfig from '@/common/config.js'
	import catLabel from "@/components/cat-label/cat-label.vue"
	export default {
		name: 'info',
		components: {
			catLabel
		},
		data() {
			return {
				isInfo: true,
				isContacts: false,
				isAdd: true,
				
				form: {
					loanMoney: 0,
					loanNum: '请选择借款期限',
					loanInten: '请选择借款意图',
					socialIdentity: '',
					companyName: '',
					// companyCode: '',
					companyPhone: '',
					comanyAddress: '',
					monIncome: '',
					marriageState: '未婚',
					lMan1Rel: '',
					lMan1Name: '',
					lMan1Phone: '',
					lMan2Rel: '',
					lMan2Name: '',
					lMan2Phone: '',
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
				
				marriageIndex: 0,
				marriageList: [
					{label:'未婚',value:1,index:0},
					{label:'已婚',value:2,index:1},
					{label:'离婚',value:3,index:2},
				],
				
				
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
			
			// 婚姻情况下拉
			handMarriage(val) {
					this.marriageIndex = val.checkArr.index;
			},
			
			// 下一步
			nextClick() {
				this.isInfo = false
				this.isContacts = true
			},
			
			// 上一步
			prevClick() {
				this.isInfo = true
				this.isContacts = false
			},
			
			// 提交
			submitClick() {
				console.log(this.form)
				
				uni.request({
					url: this.$urlConfig + '/api/Recommend',
					method: 'POST',
					data: this.form,
					header: this.$headers,
					success: (res) => {
						console.log('基本信息认证',res)
					}
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
	

	.authenticationContacts {
		position: relative;
		.list {
			position: relative;
			padding-top: 10px;
		}
		.title {
			padding: 0 11px;
			height:40px;
			line-height: 40px;
			font-size: 14px;
			font-weight: bolder;
			color: #1D2C4C;
		}
		.delete {
			position: absolute;
			top: 20px;
			right: 11px;
			font-size: 14px;
			color: #FA652B;
		}
		.delImage {
			margin-right: 2px;
			width: 14px;
			height: 14px;
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
		.prevSubmit {
			background-color: #fff;
			border: 1pxsolid #888;
		}
		.btnAdd {
			background: #fff;
			color: #497DF5;
		}
	}
</style>
