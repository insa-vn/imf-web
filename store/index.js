import Vuex from 'vuex'
import items from './topic-items.json'

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}
const randomize = (range, excepts) => {
  let a = excepts[0]
  while (excepts.indexOf(a) !== -1) {
    a = getRandomInt(0, range)
  }
  return a
}
const createStore = () => {
  return new Vuex.Store({
    state: {
      items,
      currentItems: [0, 2]
    },
    mutations: {
      shuffleFirstItem (state) {
        state.currentItems = [randomize(
          Object.keys(items).length,
          [state.currentItems[0], state.currentItems[1]]
        ), state.currentItems[1]]
      },
      shuffleSecondItem (state) {
        state.currentItems = [state.currentItems[0], randomize(
          Object.keys(items).length,
          [state.currentItems[0], state.currentItems[1]]
        )]
      }
    }
  })
}

export default createStore
