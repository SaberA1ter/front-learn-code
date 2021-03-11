// 非纯函数  push pop shift unshift forEach
// some(方法用于检测数组中的元素是否满足指定条件，返回值为 true 或 false，如果一个满足则为true )
// every(与some类似，但是需要数组中每一项都符合条件才为true)
// reduce(累加器，遍历数组并且执行回调函数，每次回调函数返回值作为下一次执行回调的初始值) reduce(callback, initNum) initNum 初始值，默认0

// pop push shift unshift
let a = [10, 20, 30, 40]

// 删除最后一项，返回被删除项
let popRes = a.pop()
console.log(popRes, a)

// 在末尾添加一项，返回长度
let pushRes = a.push(40)
console.log(pushRes, a)

// 删除第一项，返回被删除项
let shiftRes = a.shift()
console.log(shiftRes, a)

// 在头部添加一项，返回长度
let unshiftRes = a.unshift(10)
console.log(unshiftRes, a)

// splice
// splice(start, end, arguments) 将start到end删除，把arguments添加到被被删除的位置


// 纯函数： 1、不改变原数组（无副作用） 2、返回一个新数组

// concat 在末尾追加数值，返回新数组
const a1 = a.concat([50, 60, 70])
console.log(a1, a)

// map遍历一遍数组，新数组值取决于回调函数返回值
const a2 = a.map(value => value / 10)
console.log(a2, a)
// map => .map((value, index) => {})
// parseInt 第二个参数是进制
const parseIntRes = a.map(parseInt)
console.log(parseIntRes)

// filter 过滤数组，回调返回为true则将该项添加进新数组
const a3 = a.filter(value => value / 10 % 2 === 1)
console.log(a3, a)

// slice 返回选中元素，slice(start, end)
const a4 = a.slice()
a.push(50)
console.log(a4, a)
