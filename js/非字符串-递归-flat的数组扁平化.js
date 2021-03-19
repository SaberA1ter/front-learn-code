let arr = [1, [2, 3], [[4, [5, [6, []]]]]]
// let arr = [1, [2, 3]]
while (true) {
    let newArr = [], flag = true
    // 主要逻辑是逐层解构
    arr.forEach(value => {
        if (value instanceof Array) {
            newArr.push(...value)
            flag = false
        } else {
            newArr.push(value)
        }
    })
    arr = newArr
    if (flag) {
        break
    }
}
console.log(arr)