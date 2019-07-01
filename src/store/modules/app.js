const app = {
  state: {
    navIndex: 'home',
    searchVal: '',
    gotSearch: 0
  },
  mutations: {
    CHANGE_NAV_ACTIVE: (state, navIndex) => {
      state.navIndex = navIndex
    },
    CHANGE_SEARCHVAL: (state, searchVal) => {
      state.searchVal = searchVal
    },
    GOTSEARCH: (state) => {
      state.gotSearch += 1
    }
  },
  actions: {
    ChangeNavIndex: ({commit}, val) => {
      commit('CHANGE_NAV_ACTIVE', val)
    },
    ChangesearchVal: ({commit}, val) => {
      commit('CHANGE_SEARCHVAL', val)
    },
    gotSearch: ({commit}) => {
      commit('GOTSEARCH')
    }
  }
}
export default app
