(function () {
        let a = {
            a: 1,
            b: 2
        }
        let b = Object.create(a)
        delete b.a
        console.log(b.a)
    }
)()

;(function () {
    class A {
        constructor(name) {
            this.name = name
        }
    }
    class B extends A {
        constructor(name, age) {
            super(name)
            this.age = age
        }
    }
    let b = new B('ZhangSan', 18)
    let c = Object.create(b)
    let d = {}
    d.__proto__ = b
    console.log(c instanceof B, c instanceof A)
    console.log(d.__proto__ === c.__proto__)
})()

// Object.create 是在原有的对象再继承下去
// 理解为 {}.__proto__ = b