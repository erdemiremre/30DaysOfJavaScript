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
// const date  = new Date();
// let year = date.getDate();
// let birthDay = year - girilenYas
// let hesaplama = year - birthDay
//  hesaplama >= 18 ? console.log(`Yasiniz ${hesaplama} ehliyet alabilirsiniz`) : console.log(`${18 - hesaplama} yiliniz daha var ehliyet icin`)



// Pratik 5 

let a = 5
let b = 3

if(a>b){
    console.log(`${a} ${b}'ten buyuktur`)
}else{
    console.log(`${b} ${a}'ten buyuktur`)
}


// Pratik 6 

// let kullaniciNot =parseInt(prompt('Lutfen notunuzu giriniz..')) 

// if(kullaniciNot>=80 && kullaniciNot<100){
//     console.log('AA aldiniz..')
// }else if(kullaniciNot>=70 && kullaniciNot<79){
//     console.log('BB aldiniz..')
// }else if(kullaniciNot>50 && kullaniciNot<69){
//     console.log('CC aldiniz..')
// }else if(kullaniciNot>0 && kullaniciNot<49){
//     console.log('FF aldiniz..')
// }



//pratik 7 girilen tarihteki ayin kac cektigini bulmak..

let girilenAY = prompt('ay giriniz.').toLowerCase()
let girilenYil = prompt('Yil giriniz..')

let aylar = [
    'ocak',
    'subat',
    'mart',
    'nisan',
    'mayis',
    'haziran',
    'temmuz',
    'agustos',
    'eylul',
    'ekim',
    'kasim',
    'aralik'
]

let deneme = aylar.findIndex(ay => ay === girilenAY)
console.log(deneme)

let ayGunuHesapla = new Date(girilenYil , aylar.indexOf(girilenAY)+1 , 0).getDate()

//let ayGunuHesapla = new Date(girilenYil , aylar.findIndex(ay => ay === girilenAY) , 0).getDate()


console.log(`${girilenYil} yilinin ${girilenAY} ayi ${ayGunuHesapla} gunden olusmaktadir.`)