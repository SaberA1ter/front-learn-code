// 判断对象是否相等

let a = {a: 1, b: 2, c: {d: 3, e: 4, f: {g: 5}}}
let b = {a: 1, b: 2, c: {d: 3, e: 4, f: {g: 5}}}
let c = {a: 1, b: 2, c: {d: 3, e: 4, f: {g: {}}}}
let d = {a: 1, b: 2, c: {d: 3, e: {g: 5}, f: {g: 5}}}

/**
 * 判断是否为对象类型
 * @param obj
 * @returns {boolean}
 */
function isObject(obj) {
    return obj instanceof Object
}

// 1 JSON字符串比较 (简单，不准确)
console.log('JSON字符串比较')
function isEqualByString(obj1, obj2) {
    if (isObject(obj1) && isObject(obj2)) {
        return JSON.stringify(obj1) === JSON.stringify(obj2)
    }
    return false
}

console.log(isEqualByString(a, b))
console.log(isEqualByString(a, c))
console.log(isEqualByString(a, 1))

// 2 逐个对比（准确）
console.log('逐个对比')
function isEqual(obj1, obj2) {
    // 非引用类型直接判断相等，NaN是另类，NAN不会与任何相等，如果要判断可以加上typeof NaN === 'number' && NaN.toString === 'NaN'
    if (!isObject(obj1) || !isObject(obj2)) {
        return obj1 === obj2
    }
    // 取1和2的key值存储为数组
    let obj1Keys = Object.keys(obj1),
        obj2keys = Object.keys(obj2)
    // key数量不同则直接返回不相同
    if (obj1Keys.length !== obj2keys.length) {
        return false
    }
    // 在obj1Keys中匹配obj2
    for (let key of obj1Keys) {
        // obj2不存在obj1的任一key值，或者不相同，则直接返回false
        if (obj2keys.indexOf(key) === -1 || isEqual(obj1[key], obj2[key]) === false) {
            return false
        }
    }
    // 上述都不返回false则默认返回true
    return true
}

console.log(isEqual(a, b))
console.log(isEqual(a, c))
console.log(isEqual(a, 1))
console.log(isEqual(a, d))
console.log(isEqual(1, 1))