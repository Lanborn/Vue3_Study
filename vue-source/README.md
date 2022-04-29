## 实现Mini-Vue

* 一个简洁的Mini-Vue框架，该Vue包含三个模块：
  - 渲染系统模块 -> runtime -> vnode -> 真实dom
  - 可响应式系统模块 -> reactive(V2/V3)
  - 应用程序入口模块  -> createApp(Component).mount('#app')

compiler模块 -> ast -> 大量的正则

### 渲染系统实现

 - 渲染系统，该模块主要包含三个功能

1. 功能一：h函数，用于返回一个VNode对象
2. 功能二：Mount函数，用于将VNode挂载到DOM上
3. patch函数，用于将两个VNode进行对比，决定如何处理新的VNode




### 响应式系统



#### 为什么Vue3选择Proxy呢？
 - Object.defineProperty是劫持对象的属性时，如果新增元素：
  * 那么Vue2需要再次调用defineProperty，而Proxy劫持的是整个对象，不需要做特殊处理；
 - 修改对象不同 ： 
  * 使用defineProperty时，我们修改原来的obj对象就可以触发拦截：
  * 而使用proxy, 就必须修改代理对象，即Proxy的实例才可以触发拦截;

 - Proxy 能观察的类型比defineProperty更丰富
  * has； in操作符的捕获器
  * deleteProperty : delete操作符的捕捉器
  * --

 - Proxy作为新标准将受到浏览器厂商重点持续的性能优化；
 - 缺点：Proxy不兼容IE，也没有polyfill，deleteProperty能支持到IE9

