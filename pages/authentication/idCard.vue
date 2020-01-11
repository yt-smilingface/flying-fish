<template>
	<view class="authenticationIdcard">
		<view class="list">
				<view class="title">第一步： 上传身份证正面</view>
				<image class="image" @tap="chooseImage" :src="justImage"></image>
				<view class="title">第二步： 上传身份证反面</view>
				<image class="image" :src="backImage"></image>
		</view>
		<view class="tips">
			拍摄要求： <br>
			拍摄时需要将证件平放，手机横向拍摄，确保证件边框完整，文字清晰可见即可。
		</view>
		
		<button class="btnSubmit" @click="submitClick">提交</button>
		
	</view>
</template>

<script>
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		name: 'idcard',
		data() {
			return {
				justImage: require("@/static/image/idjust.svg"),
				backImage: require("@/static/image/idback.svg"),
				
				title: 'choose/previewImage',
				imageList: [],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
				
			}
		},
		methods: {
			
			sourceTypeChange: function(e) {
				this.sourceTypeIndex = parseInt(e.target.value)
			},
			sizeTypeChange: function(e) {
				this.sizeTypeIndex = parseInt(e.target.value)
			},
			countChange: function(e) {
				this.countIndex = e.target.value;
			},
			chooseImage: async function() {
				// TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
				if (this.sourceTypeIndex !== 2) {
					let status = await this.checkPermission();
					if (status !== 1) {
						return;
					}
				}
			
				if (this.imageList.length === 9) {
					let isContinue = await this.isFullImg();
					console.log("是否继续?", isContinue);
					if (!isContinue) {
						return;
					}
				}
				uni.chooseImage({
						sourceType: sourceType[this.sourceTypeIndex],
						sizeType: sizeType[this.sizeTypeIndex],
						count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						console.log(res);
						this.imageList = this.imageList.concat(res.tempFilePaths);
						this.justImage = res.tempFilePaths[0];
					},
					fail: (err) => {
						if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
							this.checkPermission(err.code);
						}
						uni.getSetting({
							success: (res) => {
								let authStatus = false;
								switch (this.sourceTypeIndex) {
									case 0:
										authStatus = res.authSetting['scope.camera'];
										break;
									case 1:
										authStatus = res.authSetting['scope.album'];
										break;
									case 2:
										authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
										break;
									default:
										break;
								}
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: '飞鱼需要从您的相机或相册获取图片，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
					}
				})
			},
			
			// 提交
			submitClick() {
				
			}
		}
		
	}
	
</script>

<style lang="scss">
	.authenticationIdcard {
		.list {
			margin-top: 11px;
			padding: 11px;
			background-color: #fff;
		}
		.title {
			height: 40px;
			line-height:40px;
			font-size: 14px;
			color: #7C89A4;
		}
		.tips {
			padding: 11px;
			font-size: 12px;
			color: #9B9B9B;
		}	
		.image {
			height: 200px;
			width: 100%;
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
