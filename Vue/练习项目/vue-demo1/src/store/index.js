import { createStore } from "vuex";

// 创建store实例
const store = createStore({
    state() {
        return {
            // 定义一个count供全局使用
            count:1,
            // 定义一个list供全局使用
            list:[
                {id:1,name:'aa'},
                {id:2,name:'bb'},
                {id:3,name:'cc'}
            ]
        }
    },
    getters: {
      doneName: (state) => {
          return state.list.filter(index => {return index.name == 'aa'})
      },
      getNameId: (state) => (id) => {
              return state.list.find(index => index.id === id)
          }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    // actions: {
    //     increment(context) {
    //         context.commit('increment')
    //     }
    // }
})


export default store
