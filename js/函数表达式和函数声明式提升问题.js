(function () {
    console.log(func.toString())
    var func = function () {
        console.log('hello world!')
    }
    function func() {
        console.log('bad world!')
    }
    func()
})()

;(function () {
    console.log(func.toString())

    function func() {
        console.log('bad world!')
    }
    var func = function () {
        console.log('hello world!')
    }
    func()
})()


// 函数声明式优先级比函数表达式要高，可以看到再func提升的时候都是bad world