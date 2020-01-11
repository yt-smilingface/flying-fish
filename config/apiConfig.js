/**
 * 有关接口的相关配置
 */
export default {
	// API请求基础地址  注意:基础地址包含 (协议、地址、端口 )
	API_BASE_URL: 'http://47.106.240.148',
	//API_BASE_URL: 'http://127.0.0.1:8081',
	// 业务请求处理成功 状态码。
	successCode: 200,
	// 登录信息失效 状态码
	logoutCode: 3,
	//租户不存在
	noTenant: 4,
	// 权限不足 状态码。
	noPermissionCode: 203,
	// 超时时间
	timeout: 10000
}