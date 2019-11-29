var article = {

    // 文章分类数据获取接口
    getCate: function (options) {
        $.ajax({
            url: ARTICLE_GET,
            success: options.callback
        });
    },

    // 新增功能接口
    addCate: function (options) {
        $.ajax({
            type: 'post',
            url: ARTICLE_ADD,
            data: options.data,
            success: options.callback
        })
    },

    // 提交编辑功能接口
    editCate: function (options) {
        $.ajax({
            type: 'post',
            url: ARTICLE_EDIT,
            data:options.data,
            success: options.callback
        })
    },

    // 删除功能接口
    delCate: function (options) {
        $.ajax({
            type: 'post',
            url: ARTICLE_DEL,
            data: options.data,
            success:options.callback
        })
    },

    // 文章列表筛选功能
    search: function(options) {
        $.ajax({
            // type: 'post',
            url: ARTICLE_SEARCH,
            // 获取筛选数据，data需传入参数
            data: options.data,
            success:options.callback
            
        })
    },

    // 文章列表删除功能
    delete: function(options) {
        $.ajax({
            url: ARTICLE_DELETE,
            data: options.data,
            success:options.callback
        })
    }














}