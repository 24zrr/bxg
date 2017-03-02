/**
 * Created by Administrator on 2017/3/2.
 */
define(['jquery','jqueryCookie'],function ($,undefined){

    /*----给有ajax请求的加入loading效果-----------------------------------------------------------------------*/
    $(document).ajaxStart(function (){
        $('.overlay').show();
    }).ajaxStop(function (){
        $('.overlay').hide();
    })


    /*----给所有页面的侧边栏设置用户名和头像-----------------------------------------------------------------------*/
    var userInfo;
    try{
        userInfo = JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo = {};
    }

    $('.aside .profile h4').html( userInfo.tc_name ? userInfo.tc_name : '快去取个好听的名字吧');
    $('.aside .profile img').attr('src',userInfo.tc_avatar ? userInfo.tc_avatar : '/img/default.png');

    /*----给所有页面添加登出功能-----------------------------------------------------------------------*/

    $('#logout').on('click',function (){
        $.post('/v6/logout',function (data){
            if(data.code == 200){
                //登出验证成功 -> 跳转到登录页面
                location.href = '/html/home/login.html'
                console.log($.cookie('userInfo'));
            }
        })
    })

    /*----左边手风琴导航功能-----------------------------------------------------------------------*/
    $('.aside .navs li a').on('click',function (){
        $(this).next().slideToggle();
    })
    $('.aside .navs li a').filter('[href= "'+ location.pathname +'"]').addClass('active').parents('ul').show()

})