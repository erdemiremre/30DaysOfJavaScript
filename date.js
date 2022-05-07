const date = new Date()

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDay(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayName = date.getDay()

let months = [
    'Ocak',
    'Subat',
    'Mart',
    'Nisan',
    'Mayis',
    'Haziran',
    'Temmuz',
    'ağustos',
    'Eylül',
    'Ekim',
    'Kasim',
    'Aralik'
]

let days = [
    'Pazar',
    'Pazartesi',
    'Sali',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
]


let humanReadableDate = `${day} ${months[month]} ${year} , ${days[day]} , `
console.log(humanReadableDate)


let name = 'Emre',
    surName = 'Erdemir'

name.length>surName.length ?console.log('Adiniz soyadinizdan uzundur') : console.log('Soyadiniz daha buyuktur')

//Egzersiz 

let myAge = 300
let yourAge = 25

myAge>yourAge ? console.log(`Ben ${myAge - yourAge} yil senden buyugum`) : console.log(`Sen ${myAge - yourAge} yas benden buyuksun`)

let  birthDay= parseInt(prompt('Dogum yilinizi giriniz...')) 

year-birthDay>18 ? console.log(`${year-birthDay} yasindasiniz.Ehliyet alabilirsin`):
                    console.log(`Uzgunuz yasiniz tutmuyor.Ehliyet almak icin ${18 -(year-birthDay)} kadar yil var`)