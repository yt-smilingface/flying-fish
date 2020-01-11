

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  // 全局管理的数据存储
  isLogin: '0',
  ser: null,
  userInfo: localStorage.getItem('userInfo')
    ? localStorage.getItem('userInfo')
    : '' // token
}
export default new Vuex.Store({
  state,
  getters: {
    // 监听数据变化的
    getStorage(state) {
      // 获取本地存储的登录信息
      if (!state.userInfo) {
        state.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      }
      return state.userInfo
    }
  },
  mutations: {
    $_setToken(state, value) {
      //debugger
      // 设置存储token
      state.userInfo = value
      localStorage.setItem('userInfo', value)
    },
    $_removeStorage(state, value) {
      // 删除token
      state.userInfo = value
      localStorage.removeItem('userInfo')
    }
  }
})