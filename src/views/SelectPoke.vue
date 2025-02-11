<template>
<div class="main">
    <h1 v-if="playerName">{{ store.state.player.nom}}</h1>
    <h2>Selectionne ton pokemon</h2>
    <div class="selectionPoke">
        <div class="card" v-for="pokemon in pokemons" :key="pokemon" @click="addPokemon(pokemon)">
            <label >Nom :</label>
            <p>{{ pokemon.nom }}</p>
            <label >Point de vie :</label>
            <p>{{ pokemon.hp }}</p>
            <label >Point d'attaque :</label>
            <p>{{ pokemon.attaque }}</p>
            <label >Competence :</label>
            <div class="attaque" v-for="ataque in pokemon.sort" :key="ataque">
                {{ ataque.nom }}
            </div>
        </div>
    </div>
    <div class="poke">
        <div class="card" v-for="pokemon in playerPokemon" :key="pokemon">
            <p>{{ pokemon.nom }}</p>
        </div>
    </div>
    <div class="btn"></div>
    <div class="btn"></div>

</div>
</template>

<script setup>
import { useStore } from 'vuex';
import { pokemons } from '@/utilities/Pokemons';
import { computed, onMounted, ref } from 'vue';

console.log('ici le jouer local', localStorage.getItem('player'));

const store = useStore();
const playerName = ref(JSON.parse(localStorage.getItem('player')).nom);
const playerPokemon = ref(JSON.parse(localStorage.getItem('player')).pokemons)

const addPokemon = (pokemon) => {
    if (store.state.player.pokemons.length <=5) {
        store.dispatch('addNewPokemon', pokemon)
        console.log(store.state.player.pokemons);
        
    }
    console.log('ici mec' ,playerPokemon.value);
    
}
onMounted(() => {
    console.log('ici nom player',JSON.parse(localStorage.getItem('player')).nom);
    
})
</script>

<style scoped>
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1 , .card {
    box-sizing: border-box;
    padding: 30px 30px;
    background: rgb(192, 192, 192);
    width: 50vw;
    height: max-content;
    margin: 20px;
    border-radius: 5px;
    color: rgb(0, 0, 0);
}
p, .attaque{
    padding: 20px;
    background: rgb(45, 131, 211);
    margin: 10px;
    border-radius: 5px;
}
.selectionPoke{
 width: auto;
 height: 80vh;
 overflow: scroll;
}
</style>