/**
 * Created by Administrator on 2017/3/2.
 */
requirejs.config({
    baseUrl:'/',
    paths:{
        jquery:'lib/jquery/jquery.min',
        bootstrap:'lib/bootstrap/js/bootstrap.min',
        common:'js/common/common',
        //util:'js/common/util',
        jqueryCookie:'lib/jquery/jquery.cookie',
        //artTemplate:'lib/artTemplate-3.0.1/template',
        //nprogress:'lib/nprogress/nprogress',
        //datepicker:'lib/bootstrap-datepicker/js/bootstrap-datepicker',
        //datepickerLanguage:'lib/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        //
        //index:'js/index',
        //userList:'js/user/list',
        //userProfile:'js/user/profile',
        //courseAdd:'js/course/add',
        //courseAddStep1:'js/course/add_step1',
        //courseAddStep2:'js/course/add_step2',
        //courseAddStep3:'js/course/add_step3',
        //courseCategory:'js/course/category',
        //courseCategoryAdd:'js/course/category_add',
        //courseList:'js/course/list',
        //courseTopic:'js/course/topic',
        //teacherAdd:'js/teacher/add',
        //teacherList:'js/teacher/list',
        homeLogin:'js/home/login'
    },
    shim:{
        //bootstrap需要依赖jq
        bootstrap:{
            deps:['jquery']
        }
    }
})
/*对于都需要加载的js优先加载*/
require(['jquery','bootstrap','common']);

/*用户一打开页面,先判断他进的是什么页面
* 根据pathname进行如下判断:     window.location.pathname
* 1,如果是登录页面: 如果sessID已经存在,说明登录过,帮他跳到主页  ($.cookie('PHPSESSID'))
* 2,如果不是登录页面: 如果sessId不存在,说明还没登录,帮他跳到登录页面   ($.cookie('PHPSESSID'))
* 3,然后根据pathname,加载对应页面的js
* */
(function (window){
    require(['jquery','jqueryCookie'],function ($,undefined){
        var pathname = window.location.pathname;
        var PHPSESSID = $.cookie('PHPSESSID');

        //如果是登录页面&SESSID存在,则跳到主页
        if(PHPSESSID && pathname == '/html/home/login.html'){
            location.href = '/'
        }
        //如果 !登录界面&SESSID不存在,则跳到登录界面
        else if(!PHPSESSID && pathname != '/html/home/login.html'){
            location.href = '/html/home/login.html'
        }

        switch (pathname){
            case '/html/home/login.html':
                require(['homeLogin']);
                break;
        }
    })
})(window)



