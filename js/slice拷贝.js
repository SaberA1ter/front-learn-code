let a = [
    { a: 1 },
    { b: 2 }
]
let b = a.slice(0)
a[0].a = 3
console.log(a, b)

// slice 可以做 浅拷贝，不是 深拷贝