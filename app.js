//TODO: Day 1 Exercises
//TODO: Node.js konsolunu kullandım.


//? 1."Yorumlar kodu okunabilir hale getirmeye yardımcı olur" yazan tek satırlı bir yorum yazın
//*Yorumlar kodu okunabilir hale getirmeye yardımcı olur
//? 2."30GundeJavaScript eğitimine hoş geldiniz" yazan başka bir yorum satırı oluşturun
//*30GundeJavaScript eğitimine hoş geldiniz.
//? 3."Yorumlar kodu okunabilir, yeniden kullanımı kolay ve bilgilendirici bir hale getirir." yazılı, birden çok satıra yayılmış çok satırlı bir yorum yazın
/*Yorumlar kodu okunabilir,
yeniden kullanımı kolay 
ve bilgilendirici 
bir hale getirir*/

//? 4. Bir degisken.js isimli dosya oluşturun ve bu .js dosyasında string, boolean, undefined ve null veri türlerinde değişkenler oluşturun
//? 5.Bir veriturleri.js isimli dosya oluşturun farklı veri türlerindeki verileri kontrol etmek için JavaScript typeof operatörünü kullanın.
//! String
// let ad = "Muhammet" 
// let soyad = "ozturk"

// console.log(typeof ad, typeof soyad);

//! Boolean
// let yas = 18;
// let yetiskin = yas >= 18;

// if (yetiskin) {
//     console.log("Yetişkin.");
// } else {
//     console.log("Yetişkin Değil");
// }

// console.log(typeof yetiskin);

//! Number
// let x = 15;
// console.log(  x, `=`, typeof x);

//!Undefined
// let i = 1;
// let xx;

// if (typeof i === "undefined") {
//     console.log("i tanımlanmamış (undefined).");
// } else {
//     console.log("i tanımlı (undefined değil).");
// }

// if (typeof xx === "undefined") {
//     console.log("xx tanımlanmamış (undefined).");
// } else {
//     console.log("xx tanımlı (undefined değil).");
// }

//! Null

// let degisken = null;

// if (degisken === null) {
//     console.log("Değişken null değerine sahip.");
// } else {
//     console.log("Değişken null değil.");
// }

//? 6.Herhangi bir değer ataması yapmadan dört adet değişken yazın
// let degisken1;
// let degisken2;
// let degisken3;
// let degisken4;

// console.log(degisken1); // undefined
// console.log(degisken2); // undefined
// console.log(degisken3); // undefined
// console.log(degisken4); // undefined

//? 7. Oluşturduğunuz değişkenlere değer ataması yapın
// degisken1 = 1;
// degisken2 = 2;
// degisken3 = 3;
// degisken4 = 4;

// console.log(degisken1);//1
// console.log(degisken2);//2
// console.log(degisken3);//3
// console.log(degisken4);//4

//? 8. Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı birden çok satırda olacak şekilde saklamak için değişkenleri ve değerlerini oluşturun
// let ad = "Muhammet";
// let soyad = "Öztürk";
// let medeniDurum = "Bekar";
// let ulke = "TC";
// let yas = 18;
// console.log("Ad: " + ad);
// console.log("Soyad: " + soyad);
// console.log("Medeni Durum: " + medeniDurum);
// console.log("Ülke: " + ulke);
// console.log("Yaş: " + yas);


//? 9.Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı tek bir satırda olacak şekilde saklamak için değişkenleri ve değerlerini oluşturun
let ad = "Muhammet", soyad = "Öztürk", medeniDurum = "Bekar", ulke = "TC", yas = 18;

console.log("Ad: " + ad + " Soyad: " + soyad + " Medeni Durum: " + medeniDurum + " Ülke: " + ulke + " Yaş: " + yas);

//? 10.benimYasim ve seninYasin adlı iki değişken oluşturun ve bunlara aşağıdaki değerleri atayın. Ardından bunları tarayıcının konsolunda çalıştırın

// let benYas = 25;
// let senYas = 30;

// console.log("Ben " + benYas + " Yaşındayım.");
// console.log("Sen " + senYas + " Yaşındasın.");