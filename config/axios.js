
import axios from 'axios'
import apiConfig from './apiConfig.js'
import store from '@/store/index.js'


/** 配置默认请求基础地址 */
axios.defaults.baseURL = apiConfig.API_BASE_URL

/** 默认超时时间 */
axios.defaults.timeout = apiConfig.timeout || 10000

/** 成功状态码 规则 */
axios.defaults.validateStatus = function() {
  return true // 默认的
}

// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true	

// httpRequest 拦截
axios.interceptors.request.use(
  config => {
    if (store.state.userInfo && store.state.userInfo.authToken) {
			// 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
      config.headers['auth-token'] = store.state.userInfo.authToken 
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  res => {
    // 请求响应逻辑在 意料之中、情理之中
    if (res && res.data && res.data.code && res.data.msg) {
      /** 登录失效 */
      if (res.data.code === apiConfig.logoutCode) {
        //store.dispatch('FedLogOut')
        //router.push({ path: '/login' })
        Dialog.alert({
          message: res.data.msg
        }).then(() => {
          //router.push({ path: '/login' })
          router.push({
            name: 'login'
          })
        })
      } else if (res.data.code === apiConfig.noPermissionCode) {
        Dialog.alert({
          message: '权限不足！'
        }).then(() => {
          // on close
        })
        // store.dispatch('FedLogOut')
        // router.push({ path: '/403' })
      } else if (res.data.code === apiConfig.noTenant) {
        Dialog.alert({
          message: '租户不可用！'
        }).then(() => {
          // on close
        })
      } else {
        return res.data
      }
    } else {
      // 请求响应逻辑在 意料之中、情理之外
      Dialog({ message: '服务器返回数据包格式错误 。' })
      return Promise.reject(new Error('服务器返回数据包格式错误 。'))
    }
  },
  error => {
    Dialog({ message: error.toString() })
    return Promise.reject(new Error(error))
  }
)

export default axios
