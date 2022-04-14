### Transition组件的原理

* 当插入或删除包含在 transition 组件中的元素时，Vue 将会做以下处理：
  1. 自动嗅探目标元素是否应用了CSS过渡或者动画，如果有，那么在恰当的时机添加/删除 CSS类名；
  2. 如果 transition 组件提供了JavaScript钩子函数，这些钩子函数将在恰当的时机被调用；
  3.  