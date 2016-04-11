/**
 * Created by chet on 16/4/11.
 */
var NB = {
    version: 1.0
};
NB.bianliang1 = 1;
NB.bianliang2 = 2;
NB.bianliang3 = 3;

NB.func1 = (function () {
//你的所有关于这个功能模块的代码

    return {}
}());
NB.func2 = (function () {
//你的所有关于这个功能模块的代码

    //这里可以直接调用NB.func1对象下的方法或变量,但要注意两者最好不要互相的调用,
    //至少我调用你的某个模块时,你别调用我的这个正在用的模块

    //此时按照threejs的组织方式也可以,但new的方式,感觉自己掌控能力还有点欠缺,
    //不过如果把一个功能分割的很清楚,采取这种threejs的方式也是很好,各个模块很独立,好好学习学习这种写法
    return {}
}());


