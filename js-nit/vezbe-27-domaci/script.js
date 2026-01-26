// Zadatak: Inventory sistem
// Kreirati klasu Inventory za upravljanje zalihama:

// Privatna polja:

// #items - mapa proizvoda (ime -> količina)
// #minStock - minimalna količina za upozorenje
// Metode:

// addItem(name, quantity) - dodaje proizvod
// removeItem(name, quantity) - uklanja proizvod
// getStock(name) - vraća količinu
// getLowStockItems() - vraća proizvode ispod minimuma
// Getter/Setter:

// get totalItems - ukupan broj svih proizvoda
// get/set minStock - sa validacijom (min 1)

class Inventory{
    #items = new Map();
    #minStock

    addItem(name,quantity){
        this.#items.set(name,quantity);
    }
    removeItem(name,quantity){
        if(!this.#items.has(name)){
            console.log('Ne postoji ovaj prozvod');
            return;
        }
        let currQuantity = this.#items.get(name);

        if(quantity > currQuantity){
            this.#items.delete(name);
        }
        else{
            this.#items.set(name,currQuantity - quantity)
        }
        console.log(this.#items);
    }
    getStock(name){
        return this.#items.get(name) ? this.#items.get(name) : 'Ne postoji';
    }
    getLowStockItems(){
    this.#items.forEach((value, key, map) => {
    if(value < this.#minStock){
        console.log(`${key} -> ${value}`);
    }
    else{
        console.log('Nema ispod min');
    }
});
    }

    get minStock(){
        return this.#minStock;
    }

    set minStock(min){
        if(min > 1){
            this.#minStock = min;
        }
        else{
            console.log('Uneli ste neodgovarajuci min');
        }
    }
}

let i1 = new Inventory();

i1.addItem('Jabuka',3);

i1.removeItem('Jabuka',2);

console.log(i1.getStock('Jabuka'));

i1.minStock = 2;

i1.getLowStockItems();