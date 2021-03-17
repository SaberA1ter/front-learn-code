var name = 'LiMing', age = 20
var obj = {
    name: this.name,
    age: 18,
    fun: function () {
        console.log(this.name, this.age)
    }
}
console.log(obj.name)
obj.fun()

console.log(global.name)

/**
 * 这段代码要注意
 * 1、在 命令行 运行 node xxx.js 其 this 并不指向全局，var 并不会被挂载到 global 上
 * 2、在 浏览器 或者 cmd node 命令行，var 声明的变量是会被挂载到全局上
 */


let anotherObj = {
    name: 'XiaoHong',
    age: 99
}
obj.fun.call(anotherObj)