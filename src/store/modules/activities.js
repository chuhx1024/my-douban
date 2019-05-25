import fetchData from '@/config/fetch'
const state = {
  events: [
    {id:123,name:"lihua"},
    {id:1235,name:"lihua1"},
    {id:1237,name:"lihua2"},
    {id:1238,name:"lihua3"},
  ]

}

const mutations = {
  getEvents (state, data) {
    state.events = data.res
  }
}

const actions = {
  getData ({commit}) {
    fetchData('/api/event/list',{
      loc: '108288',
      start: 3,
      count: 3
    },'GET').then(res => {
      console.log(res)
      commit({
        type:'getEvents',
        res: res.districts
      })
      
    })
  },
  console () {
    alert(1)
  }
  

}



export default {
  state,
  mutations,
  actions
}