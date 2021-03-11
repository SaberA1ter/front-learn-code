// js 中 __proto__ prototype constructor 三者的关系，与每种分别是什么
// __proto__  隐式原型
// prototype  显式原型
// constructor  原构造函数
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    saiHi() {
        console.log('hello world!')
    }
}

class Student extends People {
    constructor(name, age, school) {
        super(name, age)
        this.school = school
    }
    saiBye() {
        console.log('Bye Bye')
    }
}

let student = new Student('胡图图', 6, '翻斗小学')

// 实例的隐式原型 指向 构造函数的显式原型
console.log(student.__proto__ === Student.prototype)

// student 的构造函数是 Student , 因此 原构造函数指向 Student
console.log(student.__proto__.constructor === Student)

// Student 继承 People
console.log(student.__proto__.__proto__ === People.prototype)

// PeoPle 继承 Object
console.log(student.__proto__.__proto__.__proto__ === Object.prototype)

// 原型链的终点是 null
console.log(student.__proto__.__proto__.__proto__.__proto__ === null)

console.log(student.hasOwnProperty('name'),
    student.hasOwnProperty('age'),
    student.hasOwnProperty('school'),
    student.hasOwnProperty('saiBye'),
    student.hasOwnProperty('saiHi'),
    student.hasOwnProperty('hasOwnProperty'))
