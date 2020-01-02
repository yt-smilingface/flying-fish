<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	page {
		background-color: #F7F8F9;
	}
	
	/* 底部菜单栏样式 */
	uni-tabbar {
		.uni-tabbar__bd {
			display: block;
			height: 50px;
			line-height: 50px;
		}
		.uni-tabbar__icon {
			display: inline-block;
			margin-right: 4px;
			width: 16px;
			height: 16px;
		}
		.uni-tabbar__label {
			display: inline-block;
			font-size: 15px !important;
		}
	}

	
	
</style>
