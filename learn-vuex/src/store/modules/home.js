const homeModule = {
    namespaced : true,
    state : {
        homeCounter : 110,
    },
    getters : {
        doubleHomeCounter(state, getters, rootState, rootGetters) {
            return state.homeCounter * 2;
        },
        otherGetter(state) {
            return 100;
        }
    },
    mutations : {
        increment(state) {
            state.homeCounter ++;
        }
    },
    actions : {
        incrementAction({commit, dispatch, state, rootState, getters, rootGetters}) {
            commit("increment");
            commit("increment", null, {root: true})

            // dispatch
            // dispatch("incrementAction", null, {root: true});
        }
    }
}

export default homeModule