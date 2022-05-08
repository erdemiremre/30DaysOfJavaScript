// if - else kosul ifadeleri calismalari...

//Pratik 1
let isRaining = true

if(isRaining){
    console.log('Git semsiye al')
}
else{
    console.log('Semsiyeye gerek yok')
}


//Pratik 2

//let result = prompt('2+5 kac yapar ? ')

//let result = confirm('2+5 = 7 midir ?') //confirm true - false doner ona gore islemlerimizi yapariz..
//console.log(result)

// if(result ==='7'){
//     console.log('dogru cevaptir..')
// }
// else{
//     console.log(`${result} yanlis cevap verdiniz..`)
// }


//Pratik 3 

let number = 5

if(number === 4){

}else if(number >= 5){
    console.log('burasi calisir.')
}


// switch (result) {
//     case '7':
//         console.log('dogru cevap - switch')
//         break;

//     case '5':
//         console.log('cevap hatali ama denemen iyi')
//         break;

//     default:
//         break;
// }




// Pratik 4

//let girilenYas =parseInt(prompt('Yasinizi giriniz ...')) 
const date  = new Date();
let year = date.getDate();
let birthDay = year - girilenYas
let hesaplama = year - birthDay
 hesaplama >= 18 ? console.log(`Yasiniz ${hesaplama} ehliyet alabilirsiniz`) : console.log(`${18 - hesaplama} yiliniz daha var ehliyet icin`)


 
// Pratik 5 

let a = 5
let b = 3

if(a>b){
    console.log(`${a} ${b}'ten buyuktur`)
}else{
    console.log(`${b} ${a}'ten buyuktur`)
}
