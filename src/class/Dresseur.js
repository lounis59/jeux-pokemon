
export class Dresseur {
    constructor (nom) {
        this.nom = nom
        this.pokemons = []
        this.inventaire = []
    }

    ajouterPokemon (pokemon) {
        this.pokemons.push(pokemon)
        console.log(`le dresseur ${this.nom} a ajouter le pokemon ${pokemon.nom}`);
        
    }

    choisirPokemon(pokemon) {

        const pokemonChoisi = this.pokemons.find((e) => e.nom == pokemon)
        console.log('AAAA', pokemonChoisi.nom)
        return pokemonChoisi
        // console.log(`le Dresseur ${this.nom} a choisi ${this.pokemons[pokemon]}.`);
        // return this.pokemons[pokemon]
        
    }

    ajouterObjet (objet) {
        this.inventaire.push(objet)
        console.log(`le dresseur ${this.nom} a ajouter a son inventaire l'objet ${objet}`);
        
    }

    utiliserObjet (objet, pokemon) {
        const objetChoisi = this.inventaire[objet].utiliser(pokemon.nom)
        if (objetChoisi) {
            objetChoisi.utiliser(pokemonUtiliser)
        }

    }

    tousPokemonKo () {
        const pokemonKo = this.pokemons.every(pokemon => pokemon.estKo())
        if (pokemonKo = true) {
            console.log(`tous les pokemons de ${this.nom} sont K.O`); 
        }
    }


}