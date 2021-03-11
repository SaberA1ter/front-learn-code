// 强制转换 parseInt parseFloat toString 等
console.log(typeof parseInt('123'))
console.log(typeof parseFloat('123.1'))
console.log(typeof new Number(123).toString())

// 隐式转换 if、逻辑运算、==、+ 字符串拼接
console.log(1 == '1')
console.log(1 + '1')
if (1) {
    console.log(true)
} else {
    console.log(false)
}