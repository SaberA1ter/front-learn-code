// Vue 3在实现上使用Javascript Proxy来监听变量的变动
// 在浏览器不支持的情况下使用Vue 2中的defineProperty getter/setter

// Proxy 代理
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
function proxyTest() {
    console.log('-------------------proxy---------------------')
    let user = {
        name: 'LiMing',
        age: 18,
        parent: {
            father: 'LiFather',
            mather: 'LiMather'
        }
    }

    const userProxy = new Proxy(user, {
        get: (obj, prop) => {
            console.log(`读取了 ${prop}`)
            return obj[prop]
        },
        set: (obj, prop, value) => {
            console.log(`设置了 ${prop} - ${value}`)
            obj[prop] = value
        }
    })

    userProxy.name = 'LiLei'
    userProxy.age = 20
    userProxy.parent.father = 'LiFatherForLiLei'
    console.log(userProxy.name, userProxy.age, userProxy.parent.father)
}

proxyTest()

// defineProperty
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
function definePropertyTest() {
    console.log('-------------------defineProperty---------------------')
    let user = {
        name: 'LiMing',
        age: 18,
        parent: {
            father: 'LiFather',
            mather: 'LiMather'
        }
    }

    function defineWatchObj(obj) {
        Object.keys(obj).forEach(key => {
            defineWatchAttr(obj, key, obj[key])
        })
    }

    function defineWatchAttr(obj, key, value) {
        Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: true,
            get() {
                console.log(`读取了 ${key}`)
                return value
            },
            set(newValue) {
                console.log(`设置了 ${key} - ${newValue}`)
                value = newValue
            }
        })
    }

    defineWatchObj(user)
    user.name = 'LiLei'
    user.age = 20
    user.parent.father = 'LiFatherForLiLei'
    console.log(user.name, user.age, user.parent.father)
}

definePropertyTest()

/**
 * 区别：
 * 1、defineProperty 只能监听某个属性，相对于 proxy 监听整个对象，defineProperty 需要循环去添加监听
 * 2、defineProperty 需要借助一个 value 去保存值
 * 3、defineProperty 会污染原对象，proxy 会返回一个新的代理对象
 */

// 尝试： 当监听的属性为对象时，修改该对象属性的某一属性时触发的是 get 函数
