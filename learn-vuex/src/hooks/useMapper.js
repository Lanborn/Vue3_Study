import { computed } from 'vue'
import { mapState, useStore } from 'vuex'


export function useMapper(mapper, mapFn) {
    const storeStateFns = mapFn(mapper)

    const store = useStore()

    const storeState = {};
    Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({$store : store});
        storeState[fnKey] = computed(fn);
    }) 

    return storeState
}