// https://github.com/mqyqingfeng/Blog/issues/16

// 父类
function People(name) {
    this.name = name || '无名'
}
People.prototype.sayHi = function () {
    console.log(`hello, ${this.name}!`)
}

// 原型链继承
;(function (){
    function Student(school) {
        this.school = school
    }
    Student.prototype = new People()
    let student = new Student('翻斗小学')
    student.name = '胡图图'
    student.sayHi()
    console.log(student)
})()
// 经典继承
;(function () {
   function Student(name, school) {
       People.call(this, name)
       this.school = school
   }
   let student = new Student('胡图图', '翻斗小学')
    student.sayHi()
    console.log(student, student.__proto__)
})()
