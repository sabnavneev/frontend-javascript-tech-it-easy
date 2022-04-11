// 2a -- aantal verkochte tv's berekenen (anders uitgewerkt dan bij 2c)
console.log('OPDRACHT 2a');

const tvSoldArray = inventory.map((item) => {
    return item.sold;
});

let tvSoldTotal = 0;
for (let i = 0; i < tvSoldArray.length; i++) {
    tvSoldTotal += tvSoldArray[i];
};

console.log(tvSoldTotal);

// 2b -- uitkomst 2a op pagina plaatsen in het groen
console.log('OPDRACHT 2b');

const sale = document.getElementById("id-sold")
sale.textContent = tvSoldTotal;

// 2c -- originele inkoop berekenen
console.log('OPDRACHT 2c');

let tvOriginalStock = 0;
for (let i = 0; i < inventory.length; i++) {
    tvOriginalStock += inventory[i].originalStock;
};

console.log(tvOriginalStock);

// 2d -- uitkomst 2c op pagina plaatsen in het blauw
console.log('OPDRACHT 2d');

const purchase = document.getElementById('id-original-stock');
purchase.textContent = tvOriginalStock;

// 2e -- voorraad berekenen en in rood weergeven op de pagina
console.log('OPDRACHT 2e');

const tvStock = tvOriginalStock - tvSoldTotal;

const stock = document.getElementById('id-stock');
stock.textContent = tvStock;

console.log(tvStock);




