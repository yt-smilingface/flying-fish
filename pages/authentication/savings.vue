<template>
	<view class="authenticationSavings">
		<view class="list">
			<catLabel 
				text="持卡人" 
				dataType="text" 
				v-model="form.name" 
			/>
<!-- 			<catLabel 
				text="所属银行" 
				:dataText="form.bank"
				@handClick="bankClick"
			>
			<text>{{form.card}}</text>
			</catLabel> -->
			<view class="bank">
				<view class="label">所属银行</view>
				<view class="text" @click="bankClick">{{form.bank}}</view>
			</view>
			<catLabel 
				text="银行卡号" 
				inputType="number" 		
				dataType="text"
				v-model="form.card" 
			/>
			<catLabel 
				text="手机号码" 
				inputType="number" 
				dataType="text" 
				v-model="form.tel" 
			/>
		</view>
		
		
		<button class="btnSubmit" @click="submitClick">提交</button>
		
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
					name: '唐磊',
					bank: '请选择银行',
					card: '',
					tel: ''
				},
				
			}
		},
		onLoad: function (option) {
			console.log(option)
			if(option.length != {}) {
				let res = JSON.parse(decodeURIComponent(option.item));
				console.log(res) //打印出上个页面传递的参数。
				this.form.bank = res.text;	
			}
		},
		methods: {
			bankClick() {
				uni.navigateTo({
					url: './bank'
				})
			},
			submitClick() {
				uni.showToast({
					title: '提交'
				})
			}
			
		}
		
	}
	
</script>

<style lang="scss">
	.authenticationSavings {
		position: relative;
		.list {
			padding-top: 10px;
			background-color: #fff;
		}
		.list .cat-label:last-child .container {
			border: none;	
		}
		.bank {
			margin: 0 15px;
			padding: 11px 0;
			background-color: #fff;
			border-bottom: 1px solid #c0c0c0;
			line-height: 21px;
			.label {
				display: inline-block;
				vertical-align: top;
				width: 25%;
				margin-right: 5%;
				font-size: 14px;
			}
			.text {
				display: inline-block;
				vertical-align: top;
				width: 70%;
				font-size: 14px;
				height: 21px;
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
