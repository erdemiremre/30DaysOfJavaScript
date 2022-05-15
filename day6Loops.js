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