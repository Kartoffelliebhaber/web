"use strict";

//  4 FAJTA LEHETŐSÉG, KIÍRNI :
// python: for, while, if
// for , foreach , whole, do while, switch, if

let tomb = ["alma", true, [1,2]];
// 1. Lehetőség:
// for (let i = 0; i < tomb.length; i++) {
//    // console.log(tomb[i]);
// }
// // 2. Lehetőség:
// tomb.forEach((item, index) => {
//    // console.log(item);
// });

// 3. Lehetőség:
// let k = 0;

// while (k < tomb.length) {
//     console.log(tomb[k]);
//     //k++;
// }

// 4. Lehetőség:
// let n = 0;


// do {
//    // console.log(tomb[n]);
//    // n++;
// } while (n < tomb.length);

// Ternáris operátor :

// let szoveg = tomb.length == 3 ? "A Tömb 3 elemű" : "A tömb elemszáma : " + tomb.length;

// console.log(szoveg);

// Logikai operátorok:
// És operátor: &&
// let x = 12;
tomb.length == 3 && tomb.forEach((item) => console.log(item)); //<- EZT FOGJUK HASZNÁLNI!!!!!!!!!!
// console.log(logikai);
// console.log(tomb);

// Vagy operátor : ||
tomb.length == 2 || tomb.forEach((item) => console.log(item));
// console.log(logikai);
console.log(tomb);


// Nem operátor: !
let logikai = !tomb.length == 3;
console.log(logikai);

// Nullish: ??
let elso;
let masodik = null;
let harmadik = 0;
let negyedik = null;

console.log ( elso ?? masodik ?? harmadik ?? negyedik ?? "alma");
console.log ( elso || masodik || harmadik || negyedik || "alma");

console.log(ertekel);





// const VALAMI = 12697;
// console.log(VALAMI);


// let ablakMeret = window.outerHeight;
// console.log(ablakMeret);

// valami = "alma";
// console.log(VALAMI);
// let nev = window.confirm("Éhes vagy-e?");
// console.log(nev);
