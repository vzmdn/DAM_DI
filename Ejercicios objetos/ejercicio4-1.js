class Element {
    constructor(descripcio, preu, quantitat) {
        this.descripcio = descripcio;
        this.preu = preu;
        this.quantitat = quantitat;
    }
}

class Client {
    constructor(nom, direccio, telefon, nif) {
        this.nom = nom;
        this.direccio = direccio;
        this.telefon = telefon;
        this.nif = nif;
    }
}

class Factura {
    constructor(empresaNom, empresaDireccio, empresaTelefon, empresaNIF, client) {
        this.empresaNom = empresaNom;
        this.empresaDireccio = empresaDireccio;
        this.empresaTelefon = empresaTelefon;
        this.empresaNIF = empresaNIF;
        this.client = client;
        this.elements = [];
        this.importTotal = 0;
        this.tipusIVA = 0.21;
        this.formaPagament = '';
    }

    afegirElement(element) {
        this.elements.push(element);
        this.calcularImportTotal();
    }

    calcularImportTotal() {
        this.importTotal = this.elements.reduce((total, element) => {
            return total + (element.preu * element.quantitat);
        }, 0);
        this.importTotal += this.importTotal * this.tipusIVA;
    }

    mostrarImportTotal() {
        console.log('Import total de la factura: ${this.importTotal.toFixed(2)}€');
    }
}
