// 用户接口请求操作
var user = {

    // 用户登录接口
    login: function (options) {
        $.ajax({
            type: 'post',
            url: USER_LOGIN,
            data: options.data,
            success: options.callback,
        })
    },

    // 用户退出接口
    logout: function (options) {
        $.ajax({
            type: 'post',
            url: USER_LOGOUT,
            success:options.callback
        })
    },
    
    // 用户信息获取接口
    getinfo:function (options) {
        $.ajax({
            url:USER_INFO,
            success:options.callback
        })
    },

    // 用户详细信息获取接口
    getAllInfo:function(options) {
        $.ajax({
            url: USER_INFO_GET,
            success:options.callback
        })
    },

    // 用户编辑接口
edit:function (options) {
    $.ajax({
        type: 'post',
        url: USER_INFO_EDIT,
        data: options.data,
        contentType: false,
        processData: false,
        success:options.callback
    })
}




















};