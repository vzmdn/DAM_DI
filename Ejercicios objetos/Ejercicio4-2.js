class Animal {
    constructor(nom, especie, numPotes, teCua) {
        this.nom = nom;
        this.especie = especie;
        this.numPotes = numPotes;
        this.teCua = teCua;
    }

    getNom() {
        return this.nom;
    }

    setNom(nom) {
        this.nom = nom;
    }

    getEspecie() {
        return this.especie;
    }

    setEspecie(especie) {
        this.especie = especie;
    }

    getNumPotes() {
        return this.numPotes;
    }

    setNumPotes(numPotes) {
        this.numPotes = numPotes;
    }

    getTeCua() {
        return this.teCua;
    }

    setTeCua(teCua) {
        this.teCua = teCua;
    }
}

class Vaca extends Animal {
    constructor(nom, especie, numPotes, teCua, litresLlet = 0) {
        super(nom, especie, numPotes, teCua);
        this.litresLlet = litresLlet;
    }

    getLitresLlet() {
        return this.litresLlet;
    }

    setLitresLlet(litres) {
        this.litresLlet = litres;
    }

    munyir() {
        this.litresLlet += 10;
    }
}

class Tigre extends Animal {
    constructor(nom, especie, numPotes, teCua, victimesCaçades = 0) {
        super(nom, especie, numPotes, teCua);
        this.victimesCaçades = victimesCaçades;
    }

    getVictimesCaçades() {
        return this.victimesCaçades;
    }

    setVictimesCaçades(victimes) {
        this.victimesCaçades = victimes;
    }

    caçar() {
        this.victimesCaçades += 1;
    }
}
