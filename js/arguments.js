(function () {
    function changeArguments(args) {
        args[0] = args[2]
    }
    function logSum(a, b, c) {
        arguments[1] = 10
        changeArguments(arguments)
        c = 30
        return {
            a,
            b,
            c,
            arguments
        }
    }
    console.log(logSum(1, 1, 1))
})()
// 说明： arguments 上的数值 0, 1, 2 与 abc 是绑定的

;(function () {
    function changeArguments(args) {
        args[0] = args[2]
    }
    function logSum(a, b, c) {
        arguments[1] = 10
        changeArguments(arguments)
        c = 30
        return {
            a,
            b,
            c,
            arguments
        }
    }
    console.log(logSum(1, 1, 1))
})()
// 但当给 c 默认值时，则 c 与 arguments 将不再绑定
/**
 * function a(a, b, c = 3) {
    arguments[2] = 10;
  }
 */
// 上述代码经babel编译过后则是
/**
 * function a(a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    arguments[2] = 10;
    }
 */
// 两串代码是等效的，其中 c 并非原始 arguments 内属性，而是单独声明并赋值