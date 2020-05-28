import request from '@/common/request.js'
import { formatGetUri } from '@/common/util.js'

const api = {}
const PORT1 = 'baseinfo'


// api.login = params => request.globalRequest(`/api/Account/Login`, 'POST', params, 1) // 登录

// api.register = params => request.globalRequest(`/api/Account/Register`, 'POST', params, 1) // 注册




api.UserBaseInfo = params => request.globalRequest(`/api/UserBaseInfo`, 'POST', params) // 基础信息认证
api.idCard = params => request.globalRequest(`/api/IdCard`, 'POST', params) // 身份证验证





api.getDiscountPackages = params => request.globalRequest(`/api/Recommend${formatGetUri(params)}`, 'GET') // 套餐列表






export default api