// Bonusopdracht -- Via Nynke om van te leren
const ambi = document.getElementById('ambi-btn');
const price = document.getElementById('price-btn');
const soldOut = document.getElementById('soldout-btn');

function buttonFunction(item){
    console.log('click');
    return showTvs(item);
}

ambi.addEventListener('click', function (){
    buttonFunction(tvAmbiLight)
});

price.addEventListener('click', function (){
    buttonFunction(tvSorted)
});

soldOut.addEventListener('click', function (){
    buttonFunction(tvOutOfStock)
});