// 3a -- nieuwe array maken met alle tv merken en toon deze als lijst op de pagina
console.log('OPDRACHT 3a');

const tvBrandArray = inventory.map((item) => {
    return item.brand;
});

const brand = document.getElementById('id-brand');
brand.innerHTML = tvBrandArray.join(`<li>`);

// 3b -- schrijf opdracht 3a om naar een functie
console.log('OPDRACHT 3b');

function getBrand(array){
    const tvBrandArray2 = array.map((item) => {
        return item.brand;
    });

    const brand2 = document.getElementById("id-brand2");
    brand2.innerHTML = tvBrandArray2.join(`<li>`);
}

getBrand(inventory);
