class Dep {
    constructor() {
        this.subscribers = new Set();
    }

    depend() {
        if (activeEffect) {
            this.subscribers.add(activeEffect);
        }
    }

    // 通知
    notify() {
        this.subscribers.forEach(effect => {
            effect();
        })
    }
}

let activeEffect = null;


function watchEffect(effect) {
    activeEffect = effect;  
    effect(); // 初始化
    activeEffect = null;
}


// Map({key : value}) : key是一个字符串
// WaakMap({key (对象): value}) : key是一个对象，弱引用，有回收机制。当key为空的时候
const targetMap = new WeakMap();
function getDep (target, key) {
    // 根据对象(target)取出对应的Map对象
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target, depsMap);

    };

    // 2. 取出具体的dep对象
    let dep = depsMap.get(key)
    if (!dep) {
        dep = new Dep();
        depsMap.set(key, dep);

    }
    return dep;

}

// vue2对raw进行数据劫持
function reactive(raw) {
    Object.keys(raw).forEach(key => {

        const dep = getDep(raw, key);
        let value = raw[key];
 
        Object.defineProperty(raw, key, {
            get() {
                dep.depend();
                return value
            },
            set(newValue) {
                value = newValue;
                dep.notify();
            }
        })
    })

    return raw;
}

// 测试代码

const info = reactive({counter : 100, name : 'lan'})


const foo = reactive({ height : 1.88})


watchEffect(function () {
    console.log("effect1:", info.counter * 2 , info.name);
}) 

watchEffect(function () {
    console.log("effect2:", info.counter * info.counter);
})

watchEffect(function () {
    console.log("effect3:", info.counter + 12, info.name);
})

watchEffect(function () {
    console.log("effect4:", foo.height);
})


info.counter++;

info.name = "lilei"
