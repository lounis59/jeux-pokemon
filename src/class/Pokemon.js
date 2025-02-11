export class Pokemon {
    constructor(nom,hp,attaque,defense,sort){
        this.nom = nom 
        this.hp = hp
        this.attaque = attaque
        this.defense = defense
        this.sort = sort
        this.ko = false

    }

    attaquer(cible) {
        const degat = Math.max(this.attaque - cible.defense, 0)
        cible.hp -= degat
        console.log(`${this.nom} a attaquer ${cible.nom} et a perdu ${degat}`);
        
    }

    utilliserSort(nom, cible) {
        const sort = this.sort.find(nom)
        cible.hp -= sort.degat
        console.log(`${this.nom} a utiliser ${sort.nom} sur ${cible.nom} est a subit ${sort.degat} degat`);
        
    }

    afficherStats() {
        let s ='';
        this.sort.forEach(e => {
            s += e.nom + ', '
        });
        console.log(`nom pokemon : ${this.nom} , vie pokemon : ${this.hp} , attaque pokemon : ${this.attaque} , defense pokemon : ${this.defense} , sort pokemon : ${s}`);
        
    }

    estKo() {

        return this.hp <= 0;
    }
}