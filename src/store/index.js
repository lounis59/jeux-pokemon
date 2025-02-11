import { createStore } from 'vuex'

export default createStore({
  state: {
    player: null
  },
  getters: {
  },
  mutations: {
    addPlayer(state, player) {
      state.player = player
      localStorage.setItem('player', JSON.stringify(player))
    },
    addPokemon(state, pokemon) {
      state.player.pokemons.push(pokemon)
      localStorage.setItem('player', JSON.stringify(state.player))

    }
  },
  actions: {
    addNewPlayer({commit},player) {
      commit('addPlayer', player)
    },
    addNewPokemon({commit},pokemon){
      commit('addPokemon', pokemon)
    }
  },
  modules: {
  }
})
