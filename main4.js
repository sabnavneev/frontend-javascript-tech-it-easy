// 4a -- maak een functie die een string teruggeeft
console.log('OPDRACHT 4a');

function getTvObject(item){
    let tvObject = item.brand + ' ' + item.type + ' - ' + item.name;
    return tvObject;
  }
getTvObject(inventory[1]);

// 4b -- maak een functie die de prijs format
console.log('OPDRACHT 4b');

function getTvPrice(item){
    const price = '€' + item.price + ',-'
    return price;
}
getTvPrice(inventory[1]);

// 4c --
console.log('OPDRACHT 4c');

// from inch to cm
function inchToCm(inch){
    const cm = inch * 2.54;
    return Math.floor(cm);
}

// functie uitschrijven
function getTvRes(item){
     let res = '';
     let resArr = [];

     for (let i = 0; i < item.length; i++){
         res = item[i] + ' inch (' + inchToCm( item[i]) + ' cm)';
         resArr.push(res);
         res = resArr.join(" | ");
    }
     return res
 }
console.log(getTvRes(inventory[1].availableSizes));


// 4d --
console.log('OPDRACHT 4d');

let TvToHtml = document.getElementById('id-object');

function setTvToHtml(item){
    TvToHtml.innerHTML += `
        <h3>${getTvObject(item)}</h3>
        <p>${getTvPrice(item)}</p>
        <p>${getTvRes(item.availableSizes)}</p>
        `;
    return TvToHtml;
}

setTvToHtml(inventory[1]);

// 4e --
console.log('OPDRACHT 4e');

function showTvs(array) {
    for (let i = 0; i < array.length; i++) {
        setTvToHtml(array[i]);
    }
}
showTvs(inventory);




