/**
 * Created by Administrator on 2017/3/2.
 */
define(['jquery','jqueryCookie'],function ($,undefined){

    /*----如果之前登录过,就从cookie里取上次登录过的用户名以及头像-----------------------------------------------------------------------*/
    if($.cookie('userInfo')){
        var userInfo = JSON.parse($.cookie('userInfo'));
        $('#login_form .username').val(userInfo.tc_name ? userInfo.tc_name : '');
        $('#login_form .avatar img').attr('src',userInfo.tc_avatar ? userInfo.tc_avatar : '/img/default.png');
    }


    /*----实现登录功能-----------------------------------------------------------------------*/
    $('#login_form').on('submit',function (){
        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success:function (data){
                if(data.code == 200){
                    //$.cookie(名称,值,option) (path设置路径,expires为过期时间)
                    //因为值不能以对象的形式存储,所以要转成字符串格式,取出来的时候再转化成对象
                    $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                    //跳转到主页
                    location.href = '/'
                }
            }
        })
        //注意要取消默认跳转!!
        return false;
    })

})