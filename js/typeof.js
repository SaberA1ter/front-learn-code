// typeof 能判断哪些类型？
// undefined/string/number/boolean/symbol/function/object
console.log(typeof undefined)
console.log(typeof 'hello world')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof Symbol())
console.log(typeof function () {})
console.log(typeof new Number(0))

// typeof null === 'object'
console.log('typeof null === \'object\'', typeof null === 'object')