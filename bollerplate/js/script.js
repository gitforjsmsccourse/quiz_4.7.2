console.log('you are at ' + window.location);

let money = prompt('сколько у вас с собой есть денег?');
let apples = prompt('сколько вы купили яблок?');
let breads = prompt('сколько вы купили батонов хлеба?');
let costOfApple = prompt('сколько стоит одно яблоко?');
let costOfApples = apples * costOfApple;
let costOfBread = prompt('сколько стоит один батон хлеба?');
let costOfBreads = breads * costOfBread;

let haveEnough = (element, result) => {
	element.innerHTML = result;
}	

haveEnough(document.body, money >= costOfApples + costOfBreads ? "Вам хватает денег на покупки" : "Вам не хватает денег")
