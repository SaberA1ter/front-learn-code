// var 是 ES5 及之前的语法，而 let、const 是 ES6 语法
// var 存在变量提升
!(function () {
    try {
        /**
         * 等价于 =》
         *  var a
         *  console.log(a)
         *  a = 123
         */
        console.log(a) // undefined
        var a = 123

        console.log(b) // ReferenceError: Cannot access 'b' before initialization
        let b = 456
    } catch (e) {
        console.log(e)
    }
}())


// var、let 是变量，可供修改，而 const 是常量，不可修改
!(function () {
    var a = 123
    let b = 456
    const c = 789
    try {
        a = 1
        b = 2
        c = 3
    } catch (e) {
        console.log(a, b, c) // 1, 2, 789
        console.log(e) // TypeError: Assignment to constant variable.
    }
}())


// let、const 存在块级作用域，而 var 没有
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log('let -----> ', i) // 0, 1, 2
    }, 0)
}
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log('var -----> ', i) // 3, 3, 3
    }, 0)
}