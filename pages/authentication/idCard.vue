<template>
	<view class="authenticationIdcard">
		<view class="list">
				<view class="title">第一步： 上传身份证正面</view>
				<image class="image" @tap="chooseJustImage" :src="justImage"></image>
				<view class="title">第二步： 上传身份证反面</view>
				<image class="image" @tap="chooseBackImage" :src="backImage"></image>
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
				
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				
			}
		},
		methods: {
			
			// 获取证件正面照片
			chooseJustImage: async function() {
				// TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
				if (this.sourceTypeIndex !== 2) {
					let status = await this.checkPermission();
					if (status !== 1) {
						return;
					}
				}
			
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					success: (res) => {
						console.log(res);
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
			
			// 获取证件反面照片
			chooseBackImage: async function() {
				// TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
				if (this.sourceTypeIndex !== 2) {
					let status = await this.checkPermission();
					if (status !== 1) {
						return;
					}
				}
			
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					success: (res) => {
						console.log(res);
						this.backImage = res.tempFilePaths[0];
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
				if(this.justImage == require("@/static/image/idjust.svg")) {
					uni.showToast({title: '请上传身份证正面照',duration: 1000,icon:'none'});
					return
				}
				if(this.backImage == require("@/static/image/idback.svg")) {
					uni.showToast({title: '请上传身份证反面照',duration: 1000,icon:'none'});
					return
				}
				uni.showToast({title: '上传成功',duration: 1000})
				
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
