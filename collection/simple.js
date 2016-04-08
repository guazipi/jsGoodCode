/**
 * Created by Administrator on 2016/4/8.
 */
/**
 * 早期写法，现不推荐使用
 * @type {Object}
 */
var person=new Object();
person.name="chet";
person.age=24;
person.job="Soft Engineer";
person.sayName=function(){
    alert(this.name);
};

/**
 * //对象字面量的方式，推荐
 * 缺点：使用同一个接口创建很多对象，会产生大量的重复代码
 * @type {{name: string, age: number, job: string, sayName: person.sayName}}
 */
var person={
    name:"chet",
    age:24,
    job:"Soft Engineer",
    sayName:function(){
        alert(this.name);
    }
}
/**
 * 工厂模式创造对象
 * @param name
 * @param age
 * @param job
 */
function createPerson(name,age,job){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName=function(){
        alert(this.name);
    };

    return o;
}
/**
 * 构造函数模式创造对象
 * @param name
 * @param age
 * @param job
 * @constructor
 */
function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=function(){
        alert(this.name);
    };
}