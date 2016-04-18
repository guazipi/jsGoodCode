/**
 * Created by chet on 16/4/18.
 */
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

var test={
    a:1,
    init: function () {
        var me=this;
        me.bind();
        me.render();
        me.render();
    },
    render: function () {
        var me=this;
        me.btn=document.getElementById("testDiv");
    },
    bind: function () {
        this.btn.onclick=this.getm();
    },
    getm: function () {
        $.ajax({
            url:"data.php",
            success:function(data){
                //debugger
                console.log(data);
                alert(data);
            }
        });
    }
};
test.init();
