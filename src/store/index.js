import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //保存状态
        name: "xcz",
        age: 18

    },
    mutations: {
        //方法
        btn(state) {
            state.name = '111'
        },
        btns(state) {
            state.name = 'xcz'
        }

    },
    getters: {
        //可以对数据进行计算过滤
        power(state) {
            return state.age * 2
        }
    },
    actions: {},
    modules: {},

})