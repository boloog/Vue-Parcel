import Vue from 'vue'
import Vuex from 'vuex'

const SOME_MUTATION = 'SOME_MUTATION'


Vue.use(Vuex)

// Vuex  数据管理方法
// state 数据
// store 存储在 store
// mutations 修改数据用的方法 同步操作
// actions 动作 异步操作 后台接口请求 发送

const store = new Vuex.Store({
	state: {
    count: 6,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
    ]
	},
	mutations: { // 变更状态
		increment(state, payload) {
      state.count += payload.amount
		},
    decrement(state, payload) {
      state.count -= payload.amount 
    },
    [SOME_MUTATION](state, payload) {
      state.count -= payload.amount 
    }
  },
  actions: {
    // increment ({ commit }, payload) {
    //   commit('increment', payload)
    // },
    incrementAsync ({ commit }, payload) {
      setTimeout(() => {
        commit('increment', payload)
      }, 1000)
    }
  },
  // getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) =>{
      return state.todos.find(todo => todo.id === id)
    }
  }
})

export default store