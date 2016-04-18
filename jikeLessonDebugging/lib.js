/**
 * Created by chet on 16/4/18.
 */
    //这里存在一个将一个函数作为一个参数传递给一个函数的问题，要熟悉并会用这种写法。
//var mydiv=document.getElementById("testDiv");
//mydiv.onclick= function () {
//    getm(function (data) {
//        alert(data);
//    });
//};
//
//function getm(fn){
//    $.ajax({
//        url:"data.php",
//        success:function(data){
//            debugger
//            console.log(data);
//            fn(data);
//        }
//    });
//}

//这里新学会了一个封装，感觉js中的对象反反复复都是那几个，不过就看谁搞的巧妙一些。
    //这里算是一个写法吧，可以以后多加应用，熟能生巧。
    //无论如何是不能再傻傻的写很多function罗列着来回调用了
var test={
    a:1,
    init: function () {
        var me=this;
        me.render();
        me.bind();
    },
    render: function () {
        var me=this;
        me.btn=document.getElementById("testDiv");
    },
    bind: function () {
        this.btn.onclick=this.getm;
    },
    getm: function () {
        $.ajax({
            url:"data.php",
            success:function(data){
                debugger
                console.log(data);
                alert(data);
            }
        });
    }
};
test.init();
