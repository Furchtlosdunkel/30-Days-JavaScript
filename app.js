//Yorumlar kodu okunabilir hale getirmeye yardımcı olur
//30GundeJavaScript eğitimine hoş geldiniz.
/*Yorumlar kodu okunabilir,
yeniden kullanımı kolay 
ve bilgilendirici 
bir hale getirir*/



//String
let ad = "Muhammet" 
let soyad = "ozturk"

console.log(typeof ad, typeof soyad);

//Boolean
let yas = 18;
let yetiskin = yas >= 18;

if (yetiskin) {
    console.log("Yetişkin.");
} else {
    console.log("Yetişkin Değil");
}

console.log(typeof yetiskin);

//Number
let x = 15;
console.log(  x, `=`, typeof x);

//Undefined
let i = 1;
let xx;

if (typeof i === "undefined") {
    console.log("i tanımlanmamış (undefined).");
} else {
    console.log("i tanımlı (undefined değil).");
}

if (typeof xx === "undefined") {
    console.log("xx tanımlanmamış (undefined).");
} else {
    console.log("xx tanımlı (undefined değil).");
}

//Null

let degisken = null;

if (degisken === null) {
    console.log("Değişken null değerine sahip.");
} else {
    console.log("Değişken null değil.");
}
