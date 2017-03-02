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
        //bootstrap��Ҫ����jq
        bootstrap:{
            deps:['jquery']
        }
    }
})
/*���ڶ���Ҫ���ص�js���ȼ���*/
require(['jquery','bootstrap','common']);

/*�û�һ��ҳ��,���ж���������ʲôҳ��
* ����pathname���������ж�:     window.location.pathname
* 1,����ǵ�¼ҳ��: ���sessID�Ѿ�����,˵����¼��,����������ҳ  ($.cookie('PHPSESSID'))
* 2,������ǵ�¼ҳ��: ���sessId������,˵����û��¼,����������¼ҳ��   ($.cookie('PHPSESSID'))
* 3,Ȼ�����pathname,���ض�Ӧҳ���js
* */
(function (window){
    require(['jquery','jqueryCookie'],function ($,undefined){
        var pathname = window.location.pathname;
        var PHPSESSID = $.cookie('PHPSESSID');

        //����ǵ�¼ҳ��&SESSID����,��������ҳ
        if(PHPSESSID && pathname == '/html/home/login.html'){
            location.href = '/'
        }
        //��� !��¼����&SESSID������,��������¼����
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



