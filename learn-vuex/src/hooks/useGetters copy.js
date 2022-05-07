import { computed } from 'vue'
import { mapGetters, useStore } from 'vuex'


export function useState(mapper) {
    // 获取到对应的对象的functions ： {name : function, age : function}
    const storeStateFns = mapGetters(mapper)

    const store = useStore()

    // 对数据进行转换
    const storeState = {};
    Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({$store : store});
        storeState[fnKey] = computed(fn);
    }) 

    return storeState
}