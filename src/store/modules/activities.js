// import fetchData from '@/config/fetch'
const state = {
  events: []

}

const mutations = {
  getEvents (state, data) {
    state.events = data.res
  }
}

const actions = {
  // getData ({commit}) {
  //   fetchData('event/list',{
  //     loc: '108288',
  //     start: 3,
  //     count: 3
  //   },'GET').then(res => {
  //     commit({
  //       type:'getEvents',
  //       res: res
  //     })
      
  //   })
  // }

}



export default {
  state,
  mutations,
  actions
}