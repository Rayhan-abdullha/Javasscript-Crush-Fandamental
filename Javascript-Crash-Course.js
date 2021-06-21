// Javascript Crash Course //

// ====== variable & dataType ======= //

var name = 'Codder RayhaN';
var age = 24;
var skills = ['Html, Css, Bootstrap, Javascript, React'];

var somthing;
var anything =  null;

console.log(typeof name);
console.log(typeof age);
console.log(typeof skills);
console.log(typeof somthing);
console.log(typeof anything);

console.log(undefined == null);
console.log(undefined === null);

// Number, String, Boolean, undefined, null, Array, Object, function


// ====== condition if , else if , else ====== //

var age = 24;

if (age > 18) {
    console.log('Yes! I am Eligible');
} else {
    console.log('No!');
}


// ====== javascript loop ===== // 

// for loop
var nums = 10;

for (let i = 0; i <= nums ; i++) {
    console.log(i);
}

var fullName = "Codder RayhaN";

for (let i = 1; i <= 10; i++) {
    console.log(i + '.' + fullName);
}


// while loop
var topTen = 0

while (topTen <= 10) {
    console.log(topTen);
    topTen++
}


// ===== Array ====== //

var codderName = ['Elon Mask', 'Leo Messi', 'Cristiano Ronaldo']
var data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(codderName.length);
console.log(codderName[codderName.length - 1]);

console.log(codderName.indexOf('Leo Messi'));

//======//
var codderNames = ['Messi', 'Mark', 'Ronaldo', 'Salah'];
// codderName.push('kane');
// codderName[codderName.length] = 'Hablu';
// codderName.pop();
// codderName.shift();
// codderName.unshift('RayhaN');
// codderNames.splice(2, 1)
// codderNames.splice(2, 1, 'Clever Programmer')
// console.log(codderNames);

var arrSort = codderNames.sort()
console.log(arrSort);


//===//

var names = [];
names[0] = 'Codder RayhaN';
names[1] = 'Jhankar Mahbub';
names[2] = 'Learn With Sumit';

for (var i = 0; i < names.length; i++) {
    console.log(names[i].toUpperCase());    
}


// ========= function ======= //

// function declaration

function myName(a, b) {
    return a + b;
}
const result = myName(10, 25);
console.log(result);

//=====
function add(a , b) {
    console.log(a + b);
}
add(50 , 40)


// function expresion

var add = function(a,b) {
    console.log(a + b);
}
add(20,55)


// ===========Callback=========== //

var proName = ['Elon Mask', 'Leo Messi', 'Cristiano Ronaldo'];

function travers(name, callback) {
    for(var i = 0; i < name.length; i++) {
        callback(name[i].toUpperCase())
    }
}

travers(proName, function(names) {
    console.log(names);
})

// forEach
var proName = ['Elon Mask', 'Leo Messi', 'Cristiano Ronaldo'];

proName.forEach(function(n){
    console.log(n.toUpperCase());
})


// ======== Object ======== //

const person = {
    firstName: "John",
    lastName : "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName + " " + this.id ;
    }
};

console.log(person.fullName());

// another obj

const person2 = {};
person2.id = 01;
person2.name = "Elon Mask";
person2.age = 38;
person2.money = 176;
person2.print = function () {
    return this.id + " " + this.name + " " + this.age + " " + this.money;
}

console.log(person2.print());


//===========Javascript Book==============//

// 1. Eloquent_JavaScript.
// 2. Javascript CookBook.
// 3. Javascript The Definitive Guide

// ========YouTube Channle=========== //

// Stack Learner
// Anisul Islam
// Learn With sumit
// Js Bangladesh

// Javascript WebSite

// MDN
// W3Schools
// FreeCodecamp