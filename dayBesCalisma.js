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