<template>
  <div class="home">
    <div class="jouer" v-if="show" @click="showAddPlayer">Jouer</div>
    
    <form @submit.prevent="addPlayer" v-if="!show">
      <label for="nameplayer">Enter un nom de dresseur :</label>
      <input type="text" v-model="namePlayer" id="nameplayer" >
      <button type="submit">Valider</button>
    </form>
    
    

  </div>
</template>

<script setup>
import { Pokemon } from '@/class/Pokemon';
import { Dresseur } from '@/class/Dresseur';
import { Objet } from '@/class/Objet';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()
const show = ref(true)
const namePlayer = ref('')
console.log('ici',show.value);

const bulbizar = new Pokemon('bulbizar',100,20,20,[{nom:'tranche herbe',degat: 15},{nom:'charge',degat:20}])
const salameche = new Pokemon('salameche',100,20,20,[{nom:'flameche',degat:20},{nom:'griffe',degat:15}])
const carapuce = new Pokemon('carapuce', 100 , 20 , 20 , [{nom:'pistolet a eau',degat: 15}, {nom:'charge',degat:20}])
const sacha = new Dresseur('sacha')
const regis = new Dresseur('regis')
const potionHp = new Objet('potion de vie', 20)
const potionDegat = new Objet('potion de degat', 20)
const potionDeffense = new Objet('potion de defense', 20)

console.log(bulbizar.afficherStats());
sacha.ajouterPokemon(salameche)
sacha.ajouterPokemon(bulbizar)


const pokemonChoisi = sacha.choisirPokemon('salameche');
console.log(pokemonChoisi.nom);
const showAddPlayer = () => {
  show.value = !show.value
  console.log(show.value);
  
}
const addPlayer = () => {
  if (namePlayer.value){
    const player = new Dresseur(namePlayer.value)
    store.dispatch('addNewPlayer', player)
    router.push('/select')
    console.log(store.state.player.nom);

  }
  
}



</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.jouer{
  width: 150px;
  height: 80px;
  margin: 100px;
  box-sizing: border-box;
  background: rgb(58, 123, 175);
  padding: 20px;
  font-size: 2rem;
  color: aliceblue;
  border-radius: 5px;
}
.jouer:hover{
  cursor: pointer;
}
form{
  width: 50vw;
  height: max-content;
  padding: 20px;
  box-sizing: border-box;
  background: gray;
  border-radius: 5px;
  margin: 100px;
  display: flex;
  flex-direction: column;
  color: aliceblue;
  
}
label ,input,button{
  margin: 20px;
  border-radius: 5px ;
}
</style>
