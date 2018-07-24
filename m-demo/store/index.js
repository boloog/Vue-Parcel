import Vue from 'vue'
import Vuex from 'vuex'
import api from './../api'

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
  mutations: {
    indexSet(state, data){
      state[data['target']] = data.data
    }
  },
  actions: {
    fetchProject({commit}, params){
      return api.post('/movie/in_theaters', params).then(res => {
        commit('indexSet', {
          target: 'project',
          data: res.data
        })
        return Promise.resolve()
      }, res => {
        console.log('fail')
        return Promise.reject()
      })
    },
  }
})

export default store