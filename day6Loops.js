for(let i = 0; i<=100; i++){

    console.log(`${i} * ${i} = ${i*i}`);
}


const names = ['Tayfun', 'Ahmet', 'DEniz','Ozge','Mehmet','Derya','Kamil']
for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]}`)
}

let a ='Ahmet';

let b = a.split('');

console.log(b.reverse().join(''));


const numbers = [1,2,3,4,5,6];
let sumTotal = 0

for (let i = 0; i < numbers.length; i++) {
    sumTotal = sumTotal + numbers[i]
    
}
console.log(`${'toplam'}= ${sumTotal}`)



const countries = ['turkey' ,'cyprus','azerbaijan']

let newCountries = []

for (let i = 0; i < countries.length; i++) {
    newCountries.push(countries[i].toLocaleUpperCase('TR'))
}
console.log(newCountries);


let i = 8;
// while (i<names.length) {
//     console.log('isim',names[i])
//     i++
// }

do {
    console.log('isim',names[i])
    i++
} while (i<names.length);

//Dongulerde break kullanimi

const animals = ['cat','bird','dog','elephant','bear']

for (let animal of animals) {
   if(animal ==='dog'){
       console.log(`${animal} bulundu`)
       break
   }
   console.log('Animal',animal)
}

//cointune kullanimi girilen degeri atlar devam eder.

const animals2 = ['cat','bird','dog','elephant','bear']

for (let animal of animals) {
    if(animal ==='elephant'){
        continue
    }
    console.log('Animal Name: ',animal)
 }

