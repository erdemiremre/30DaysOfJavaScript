
 let dene = '#';

 for (let i = 0; i < 9; i++) {
     console.log(dene)
     dene = dene +'#';
 }


 for (let i = 0; i < 100; i++) {

    if(i %2 ==0){
        console.log('Cift sayilar',i)
    }
     
 }

 for (let i = 0; i < 100; i++) {

    if(i %2 !=0){
        console.log('Tek sayilar',i)
    }
     
 }

 for (let i = 0; i <= 100; i++) {

    if(i%1==0 && i%i==0){
        console.log('Asal sayilar',i)
    }
     
 }

 //O'dan 100'e kadar olan sayilarin toplamı
let toplam = 0;
let tekToplam = 0;
let ciftToplam = 0;
for (let i = 0; i <= 100; i++) {
    toplam = toplam + i
    if(i%2==0){
        ciftToplam = ciftToplam + i
    }else if(i%2!=0){
        tekToplam = tekToplam + i

    }
}
console.log(toplam)
console.log('Tek sayilar Toplami : ',tekToplam)
console.log('cift Sayilar Toplami : ',ciftToplam)

//const num  = Math.floor(Math.random()*101)
const newNumbers = [];
for (let i = 0; newNumbers.length<6; i++) {
    const num  = Math.floor(Math.random()*101)
    if(newNumbers.includes(num)){
        continue
    }
    newNumbers.push(num)
    
}

console.log(newNumbers)


const letters=['B','C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']


let deneme ='';
for (let i = 0; deneme.length <5; i++) {
    const rndNum  = Math.floor(Math.random()*11)
    const indexNum  = Math.floor(Math.random()*19)
    deneme = deneme + rndNum.toString()+letters[indexNum];
    
}
console.log(deneme)

const countriesBase = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungray','Ireland','Japan','Kenya']
const countriesNew = []
const countries3ToUpper = []
const countriesLength = []

for (let i = 0; i < countriesBase.length; i++) {
    countriesNew.push(countriesBase[i].toLocaleUpperCase());
    let lengthCountries = countriesBase[i].length;
    countries3ToUpper.push(countriesBase[i].toLocaleUpperCase().substring(0,3))
    countriesLength.push(lengthCountries);
}
console.log(countriesLength)
console.log(countries3ToUpper)

const newCountriesStill = []
for (let i = 0; i < countriesBase.length; i++) {
    newCountriesStill.push([countriesBase[i],countries3ToUpper[i],countriesLength[i]])
}

console.log(newCountriesStill)