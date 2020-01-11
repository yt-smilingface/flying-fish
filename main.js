import Vue from 'vue'
import App from './App'
import 'static/css/iconfont/iconfont.css'
import store from '@/store/index.js'
// import axios from '@/config/axios.js'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()
