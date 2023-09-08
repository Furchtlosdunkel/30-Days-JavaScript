//TODO Day 3: Exercises
//TODO: Node.js konsolunu kullandım.
//TODO: Exercise: Level 1

//? 1. firstName, lastName, country, city, age, isMarried, year değişkenlerini tanımlayın ve bunlara değer atayın ve farklı veri türlerini kontrol etmek için typeof operatörünü kullanın.

// let firstName = "Muhammet";
// let lastName = "Ozturk";
// let country = "Turkey";
// let city = "Ankara";
// let age =  18;
// let isMarried = false;
// let year = 2023;

// console.log("firstName ist " + typeof firstName);
// console.log("lastName is a " + typeof lastName); // string
// console.log("country is a " + typeof country); // string
// console.log("city is a " + typeof city); // string
// console.log("age is a " + typeof age); // number
// console.log("isMarried is a " + typeof isMarried); // boolean
// console.log("year is a " + typeof year); // number

//? 2. '10' türünün 10'a eşit olup olmadığını kontrol edin

// console.log(typeof '10'); string
// console.log('10' == 10); true 
// console.log('10' === 10); false 

//? 3. parseInt('9.8') değerinin 10'a eşit olup olmadığını kontrol edin

// console.log(parseInt('9.8') === 10); false

//? 4. Boolean değeri doğru ya da yanlıştır.
//TODO if(dogru ise){}  / if(!yanlış ise){}  => ! yanlış ise demek
//!Truthy Values:
// let truthyString = "Hello, world!";
// if (truthyString) {
//     console.log("Truthy value");
// };

// var truthyNumber = 42;
// if (truthyNumber) {
//     console.log("Truthy value");
// };

// var truthyObject = { key: "value" };
// if (truthyObject) {
//     console.log("Truthy value");
// };

//!Falsy Values:
// var falsyString = "";
// if (!falsyString) {
//     console.log("Falsy value");
// }

// var falsyNumber = 0;
// if (!falsyNumber) {
//     console.log("Falsy value");
// }

// var falsyNull = null;
// if (!falsyNull) {
//     console.log("Falsy value");
// }

//? 5. Aşağıdaki karşılaştırma ifadesinin sonucunu önce console.log() kullanmadan belirleyin. Sonuca karar verdikten sonra console.log() kullanarak onaylayın

// console.log(4 > 3); // true
// console.log(4 >= 3); // true
// console.log(4 < 3); // false
// console.log(4 <= 3); // false
// console.log(4 == 4); // true
// console.log(4 === 4); // true
// console.log(4 != 4); // false
// console.log(4 !== 4); // false
// console.log(4 != '4'); // false
// console.log(4 == '4'); // true
// console.log(4 === '4'); // false


// var pythonLength = 'python'.length; // The length of 'python' is 6
// var jargonLength = 'jargon'.length; // The length of 'jargon' is 6
// var falsyComparison = pythonLength < jargonLength; // 6 < 6 is false
// console.log(falsyComparison); // false


//? 6. Aşağıdaki ifadelerin sonucunu önce console.log() kullanmadan belirleyin. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
//TODO ||= "veya" => 0,0=0  diğerleri dogru /   &&="ve" => 1,1=1 diğerleri yanlış
// console.log(4 > 3 && 10 < 12); //true
// console.log(4 > 3 && 10 > 12); //false
// console.log(4 > 3 || 10 < 12); //true
// console.log(4 > 3 || 10 > 12); //true
// console.log(!(4 > 3)); // false
// console.log(!(4 < 3)); // true
// console.log(!(false)); // true
// console.log(!(4 > 3 && 10 < 12)); // false
// console.log(!(4 > 3 && 10 > 12)); // true
// console.log(!(4 === '4')); // true
// console.log("on" === "no"); // false
// console.log("on" == "no"); // false

//? 7. Aşağıdaki etkinlikleri gerçekleştirmek için Date nesnesini kullanın

// // Get the current date and time
// const currentDate = new Date();

// // Get the year today
// const year = currentDate.getFullYear();

// // Get the month today as a number (0-based, so January is 0)
// const month = currentDate.getMonth();

// // Get the date today (day of the month)
// const date = currentDate.getDate();

// // Get the day today as a number (0 for Sunday, 1 for Monday, etc.)
// const day = currentDate.getDay();

// // Get the hours now
// const hours = currentDate.getHours();

// // Get the minutes now
// const minutes = currentDate.getMinutes();

// // Find out the number of seconds elapsed from January 1, 1970, to now (timestamp)
// const secondsSince1970 = currentDate.getTime() / 1000;

// console.log(`Year today: ${year}`);
// console.log(`Month today (as a number): ${month}`);
// console.log(`Date today: ${date}`);
// console.log(`Day today (as a number): ${day}`);
// console.log(`Hours now: ${hours}`);
// console.log(`Minutes now: ${minutes}`);
// console.log(`Seconds elapsed since January 1, 1970: ${secondsSince1970}`);

//TODO: Exercises: Level 2