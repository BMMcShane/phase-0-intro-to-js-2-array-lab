// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];
let newCats;

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}

function appendCat(name) {
    return newCats = [...cats, name];
}

function prependCat(name) {
    return newCats = [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0,2);
}

function removeFirstCat() {
    return cats.slice(1);
}