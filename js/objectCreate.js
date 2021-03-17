let a = {
    a: 1,
    b: 2
}
let b = Object.create(a)
delete b.a
console.log(b.a)