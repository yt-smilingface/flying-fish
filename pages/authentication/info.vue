<template>
	<view class="authenticationInfo">
		<view class="list">
			<catLabel 
				text="借款金额" 
				inputType="number" 
				dataType="text" 
				v-model="form.money" 
				@blur="blurMoney"
			/>
			<catLabel 
				text="借款期限" 
				dataType="selector"
				v-model="form.trem"
				:initIndex="termIndex" 
				:selectList="termList"  
				@handSelect="handTerm" 
			/>
			<catLabel 
				text="借款意图" 
				dataType="selector"	
				v-model="form.purose"
				:initIndex="purposeIndex" 
				:selectList="purposeList"  
				@handSelect="handPurpose" 
			/>
		</view>
		<view class="list">
			<catLabel text="社会身份" dataType="text" v-model="form.identity"/>
			<catLabel text="公司名称" dataType="text" v-model="form.companyName"/>
			<catLabel text="电话区号" dataType="text" inputType="number" v-model="form.companyCode"/>
			<catLabel text="公司电话" dataType="text" inputType="number" v-model="form.companyTel"/>
			<catLabel text="公司地址" dataType="text" v-model="form.companyAdress"/>
		</view>
		
		<view class="list">
			<catLabel text="月收入" dataType="text" inputType="number" v-model="form.income"/>
			<catLabel 
				text="婚姻状况"  
				dataType="selector"	
				v-model="form.marriage"
				:initIndex="marriageIndex" 
				:selectList="marriageList"  
				@handSelect="handMarriage" 
			/>
		</view>
		
		<button class="btnSubmit" @click="submitClick">下一步</button>
		
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
					identity: '',
					companyName: '',
					companyCode: '',
					companyTel: '',
					companyAdress: '',
					income: '',
					marriage: '未婚'
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
</style>
