<template>
	<view class="authenticationContacts">
		<view class="list" v-for="(list, index) in listItem" :key="index">
			<view class="title">紧急联系人{{index+1}}</view>
			<view class="delete" v-if="list.del" @click="delClick(list, index)">
				<image class="delImage" src="../../static/image/del.svg"></image>
				删除
			</view>
			<catLabel text="联系人关系" dataType="text" v-model="list.rela"/>
			<catLabel text="联系人姓名" dataType="text" v-model="list.name"/>
			<catLabel text="电话号码" dataType="text" v-model="list.tel"/>
		</view>
		
		<button class="btnSubmit btnAdd" @click="addClick">添加紧急联系人</button>
		<button class="btnSubmit" @click="submitClick">提交</button>
		
	</view>
</template>q

<script>
	import catLabel from "@/components/cat-label/cat-label.vue"
	export default {
		name: 'contacts',
		components: {
			catLabel
		},	
		data() {
			return {
				listItem: [
					{
						title: '紧急联系人1',
						del: false,
						rela: '',
						name: '',
						tel: ''
					}
				]
				
			}
		},
		methods: {
			// 添加紧急联系人
			addClick() {
				const arr = {
					title: '',
					del: true,
					rela: '',
					name: '',
					tel: ''
				};
				this.listItem.push(arr)
			},
			
			// 删除联系人
			delClick(list, index) {
				console.log(this.listItem);
				this.listItem.splice(index,1)
			},
			
			// 提交
			submitClick() {
				console.log(this.listItem);
				uni.showToast({title: '提交成功',duration: 1000})
				uni.navigateTo({
					url: './index'
				})
			}
			
		}
		
	}
	
</script>

<style lang="scss">
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
		.btnAdd {
			background: #fff;
			color: #497DF5;
		}
	}
</style>
