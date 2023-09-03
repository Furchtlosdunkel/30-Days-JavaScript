//TODO: Day 2 Exercise
//TODO: Node.js konsolunu kullandım.
//TODO: Exercise: Level 1

//? 1."Challenge adında bir değişken tanımlayın ve bu değişkene '30 Days Of JavaScript' başlangıç değerini atayın."
// let challenge = '30 Days Of JavaScript';

//? 2. "console.log() kullanarak dizeyi tarayıcı konsoluna yazdırın"
// let challenge = '30 Days Of JavaScript';
// console.log(challenge);

//? 3. "console.log() kullanarak dizenin uzunluğunu tarayıcı konsoluna yazdırın"
// let challenge = '30 Days Of JavaScript';
// console.log(challenge.length);

//? 4. "toUpperCase() yöntemini kullanarak tüm dize karakterlerini büyük harflere dönüştürün"
// let challenge = '30 Days Of JavaScript';
// let upperCase = challenge.toUpperCase();
// console.log(upperCase);

//? 5. "toLowerCase() yöntemini kullanarak tüm dize karakterlerini küçük harflere dönüştürün"
// let challenge = '30 Days Of JavaScript';
// let lowerCase = challenge.toLowerCase();
// console.log(lowerCase);

//? 6. "substr() veya substring() yöntemini kullanarak dizenin ilk sözcüğünü kesin (dilimleyin)"
// console.log(challenge.substr(0,2)) 
// console.log(challenge.substring(0,2)) 

//? 7. "JavaScript'in 30 Günü'nden JavaScript'in Günleri ifadesini dilimleyin."
// let challenge = '30 Days Of JavaScript';
// console.log(challenge.substr(3,19)) 

//? 8. "includes() yöntemini kullanarak dizenin bir betik sözcüğü içerip içermediğini kontrol edin"console.log(string.includes('Days'))     // true
// let challenge = '30 Days Of JavaScript';
// console.log(challenge.includes('Days'))     // true
// console.log(challenge.includes('days'))     // false - it is case sensitive!
// console.log(challenge.includes('Script'))   // true
// console.log(challenge.includes('script'))   // false
// console.log(challenge.includes('java'))     // false
// console.log(challenge.includes('Java'))     // true

//? 9. "split() yöntemini kullanarak dizeyi bir diziye bölme"
//? 10. "JavaScript'in 30 Günü dizesini split() yöntemini kullanarak boşluktan bölme"
// let challenge = '30 Days Of JavaScript';
// let split = challenge.split(' ')
// console.log(split);

//? 11. "'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dizeyi virgülden ayırın ve bir diziye dönüştürün."
// let arry = 'Facebook Google, Microsoft, Apple, IBM, Oracle, Amazon';
// let arrySplit = arry.split(' ');
// console.log(arrySplit);

//? 12. "replace() yöntemini kullanarak 30 Days Of JavaScript'i 30 Days Of Python olarak değiştirin."
// let text = "30 Days Of JavaScript";
// let textReplace= text.replace('JavaScript' ,'Python');
// console.log(textReplace);

//? 13. "'30 Days Of JavaScript' dizesinde 15. dizindeki karakter nedir? charAt() yöntemini kullanın."
// let text = "30 Days Of JavaScript";
// let textCharAt = text.charAt(15);
// console.log(textCharAt);

//? 14. "charCodeAt() kullanarak '30 Days Of JavaScript' dizesindeki J karakter kodu nedir?"
// let text = "30 Days of JavaScript";
// let charCodeOfJ = text.charCodeAt(text.indexOf('J'));
// console.log(charCodeOfJ); 

//? 15. "JavaScript'in 30 Günü içinde a öğesinin ilk geçtiği konumu belirlemek için indexOf öğesini kullanın"
// let text = "30 Days of JavaScript";
// let textIndexOf = text.indexOf('a');
// console.log(textIndexOf);

//? 16. "JavaScript'in 30 Günü'nde a öğesinin son geçtiği konumu belirlemek için lastIndexOf öğesini kullanın."
// let text = "30 Days of JavaScript";
// let textLastIndexOf = text.lastIndexOf('a');
// console.log(textLastIndexOf);

//? 17. "Aşağıdaki cümlede because sözcüğünün ilk geçtiği yeri bulmak için indexOf kullanın:'You cannot end a sentence with because because is a conjunction'"
// let text = "You cannot end a sentence with because because because is a conjunction";
// let  textIndexOf = text.indexOf("because");
// console.log(textIndexOf);

//? 18. "Aşağıdaki cümlede because sözcüğünün son geçtiği yeri bulmak için lastIndexOf kullanın:'You cannot end a sentence with because because is a conjunction'"
// let text = 'You cannot end a sentence with because because is a conjunction';
// let textLastIndexOf = text.lastIndexOf('because');
// console.log(textLastIndexOf);

//? 19. "Aşağıdaki cümlede because sözcüğünün ilk geçtiği yeri bulmak için aramayı kullanın:'You cannot end a sentence with because because is a conjunction'"
// let text = "You cannot end a sentence with because because because is a conjunction";
// let textSearch = text.search('because');
// console.log(textSearch);

//? 20. "Bir dizenin başındaki ve sonundaki boşlukları kaldırmak için trim() işlevini kullanın. Örneğin ' 30 Days Of JavaScript '."
// let text = " 30 Day Of JavaScript "
// let textTrim = text.trim(' ');
// console.log(textTrim);

//? 21. "30 Days Of JavaScript dizesiyle startsWith() yöntemini kullanın ve sonucu true yapın"
// let text = '30 Days Of JavaScript';
// let checkStartsWith = text.startsWith('30 Days Of');
// console.log(checkStartsWith); 

//? 22. "30 Days Of JavaScript dizesiyle endsWith() yöntemini kullanın ve sonucu true yapın"
// let text = "30 Days Of JavaScript";
// let textEndsWith = text.endsWith('JavaScript');
// console.log(textEndsWith);

//? 23. "30 Days Of JavaScript içindeki tüm a'ları bulmak için match() yöntemini kullanın."
// let text = "30 Days Of Java Script"
// let textMatch = text.match('a');
// console.log(textMatch);

//? 24. "concat() işlevini kullanın ve '30 Days of' ve 'JavaScript' sözcüklerini tek bir dizede birleştirin, '30 Days Of JavaScript'"
// let text = "30 Days of";
// let newText = text.concat( ' ' + 'JavaScript');
// console.log(newText);

//? 25."30 Days Of JavaScript 2 sefer yazdırmak için repeat() yöntemini kullanın"
// let text = "30 Days Of JavaScript"
// let textReapeat = (text + ',' ).repeat(3);
// console.log(textReapeat);


//TODO: Exercise: Level 2
