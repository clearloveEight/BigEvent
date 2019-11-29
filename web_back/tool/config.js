// 配置所有接口url地址

// 基地址
var baseUrl = 'http://localhost:8000';

// 用户接口地址
var USER_LOGIN = baseUrl + '/admin/login'; // 登录接口
var USER_LOGOUT = baseUrl + '/admin/logout'; // 退出接口
var USER_INFO = baseUrl + '/admin/getuser'; // 用户信息获取接口
var USER_INFO_GET = baseUrl + '/admin/userinfo_get' // 用户详细信息获取接口
var USER_INFO_EDIT = baseUrl + '/admin/userinfo_edit' // 用户信息编辑接口

// 文章类别功能接口
var ARTICLE_GET = baseUrl + '/admin/category_search';
var ARTICLE_ADD = baseUrl + '/admin/category_add';
var ARTICLE_EDIT = baseUrl + '/admin/category_edit';
var ARTICLE_DEL = baseUrl + '/admin/category_delete';

// 文章列表功能接口
var ARTICLE_SEARCH =  baseUrl + '/admin/search';
var ARTICLE_DELETE =  baseUrl + '/admin/article_delete'