//Fonksiyonlari tanima

function sayHello(){
    let msg = 'Hello world'
    return msg
}

console.log(sayHello())

//parametreli fonk yazimi

function multiply(num1, num2){
    return num1 * num2;
}

let total = multiply(3 , 5)
console.log('Toplam : ', total)


function sumArrayValues(array){
    let total = 0
    for (let i = 0; i < array.length; i++) {
       
        total += array[i];
    }
    return total;
}

const numbers = [2 ,5 ,8 ,10 , 15 ,25]

let result = sumArrayValues(numbers)
console.log('Toplam : ', result)


//argument elementinin mantigi

function toplaArguments(){
    console.log(arguments)
}

toplaArguments(5,7,9,15,25,35)  //kac parametre girdigini bilmesekte argument ile yakalayabiliriz.


function topla(){
    let topla = 0;
    for (let i = 0; i < arguments.length; i++) {
               topla+=arguments[i]
    }
    return topla;
}

console.log(topla(2,5,7,9,58))


//Anonim fonksiyonlar - metotlar


const sayHelloo = function(name){

    return `Hello ${name}`
}

console.log(sayHelloo('Emre'));



//kendi kendini cagıran fonksiyon tanimi

(function(pr){
    console.log(pr*pr)
})(2)


// Arrow fonksiyonlar

function hello(){

}
const hello2 = (name , surname) =>{
   return `hello ${name} ${surname}`
}

const hello3 = name =>{
   return `hello ${name}`
}

const hello4 = name =>`hello ${name}` //tek parametre alirsa bu sekilde kullanabiliriz..
 
const toplama = (...numbers) =>{
    console.log(numbers)
}


//default bir deger atamak

function multiply2(num1, num2 = 2){
    return num1 * num2
}

console.log(multiply2(10))
console.log(multiply2(10,5))