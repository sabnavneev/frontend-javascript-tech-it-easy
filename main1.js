// 1a -- nieuwe array maken met tv type
console.log('OPDRACHT 1a');

const tvName = inventory.map((item) => {
    return item.name;
});

console.log(tvName);

// 1b -- nieuwe array maken met uitverkochte tv's
console.log('OPDRACHT 1b');

const tvOutOfStock = inventory.filter((item) => {
    if (item.originalStock - item.sold === 0) {
        return item;
    }
});

console.log(tvOutOfStock);

// 1c -- nieuwe array maken met tv met ambilight
console.log('OPDRACHT 1c');

const tvAmbiLight = inventory.filter((item) => {
    if (item.options.ambiLight){
        return item;
    }
});

console.log(tvAmbiLight);

// 1d -- array sorteren op prijs van laag naar hoog
console.log('OPDRACHT 1d - staat in commentaar vanwege latere opdracht');
const tvSorted = inventory.sort( (a, b) => {
   return a.price - b.price;
});

console.log(tvSorted);