import { createStore } from 'vuex'

export default createStore({
  plugins: [], //使用插件
  state: { // = data 存储数据
    name: '影'
  },
  getters: { // 相当于计算属性
  },
  mutations: { // 处理同步，调用这里的方法修改数据
    increment(state,payload) {
      state.name = payload;
  }
  },
  actions: { // 处理异步事件
  },
  modules: { // 模块化【引入模块】
  }
})
