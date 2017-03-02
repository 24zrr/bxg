/**
 * Created by Administrator on 2017/3/2.
 */
define(['jquery','jqueryCookie'],function ($,undefined){

    /*----���֮ǰ��¼��,�ʹ�cookie��ȡ�ϴε�¼�����û����Լ�ͷ��-----------------------------------------------------------------------*/
    if($.cookie('userInfo')){
        var userInfo = JSON.parse($.cookie('userInfo'));
        $('#login_form .username').val(userInfo.tc_name ? userInfo.tc_name : '');
        $('#login_form .avatar img').attr('src',userInfo.tc_avatar ? userInfo.tc_avatar : '/img/default.png');
    }


    /*----ʵ�ֵ�¼����-----------------------------------------------------------------------*/
    $('#login_form').on('submit',function (){
        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success:function (data){
                if(data.code == 200){
                    //$.cookie(����,ֵ,option) (path����·��,expiresΪ����ʱ��)
                    //��Ϊֵ�����Զ������ʽ�洢,����Ҫת���ַ�����ʽ,ȡ������ʱ����ת���ɶ���
                    $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                    //��ת����ҳ
                    location.href = '/'
                }
            }
        })
        //ע��Ҫȡ��Ĭ����ת!!
        return false;
    })

})