export class Objet {
    constructor (nom,effet) {
        this.nom = nom
        this.effet = effet
    }

    utiliser(cible) {
        if(this.nom === 'potion de vie') {
            cible.hp += this.effet
            console.log(`${cible.nom} gagne ${this.effet} point de vie`);
            
        } else if (this.nom === 'potion de degat') {
            cible.attaque += this.effet
            console.log(`${cible.nom} gagne ${this.effet} point de degat`);

        } else if (this.nom === 'potion de defense') {
            cible.defense += this.effet
            console.log(`${cible.nom} gagne ${this.effet} point de defense`);

        }

    }
}