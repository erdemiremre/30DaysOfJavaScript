const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies)
console.log(itCompanies.length)

console.log(itCompanies[itCompanies.length-1] )

//console.log(itCompanies.sort())

let amazonKaldi = itCompanies.pop()

let yeniCumle = itCompanies.join()
console.log(yeniCumle + ' and ' +amazonKaldi)


console.log(itCompanies.join(' ').toLocaleUpperCase())

itCompanies.push('Amazon')
console.log(itCompanies[0])

console.log(itCompanies[itCompanies.length-1])
let middle =Math.floor((itCompanies.length)/2)
console.log(itCompanies[middle])

let varMi = itCompanies.indexOf('Apple')

console.log(varMi)


//Ezgersiz 3 

const shoppinCart = ['Milk','Coffee','Tea','Honey']

let isMeat = shoppinCart.includes('Meat')
console.log(isMeat)

isMeat === true ?console.log('Et zaten bulunuyor') :shoppinCart.unshift('Meat')&&console.log('Et Eklendi..')
console.log(shoppinCart)

let isSugar = shoppinCart.includes('Sugar')

if(isSugar){
    console.log('Seker zaten var')
}else{
    shoppinCart.push('Sugar')
    console.log(shoppinCart)
}

let indexHoney = shoppinCart.indexOf('Honey')
let Sugar = shoppinCart[shoppinCart.length-1]
shoppinCart.pop()
shoppinCart.pop()
shoppinCart.push(Sugar)
console.log(shoppinCart)
