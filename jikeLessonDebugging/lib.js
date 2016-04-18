/**
 * Created by chet on 16/4/18.
 */
var mydiv=document.getElementById("testDiv");
mydiv.onclick= function () {
    getm(function (data) {
        alert(data);
    });
};

function getm(fn){
    $.ajax({
        url:"data.php",
        success:function(data){
            debugger
            console.log(data);
            fn(data);
        }
    });
}

