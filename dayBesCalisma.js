const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies)
console.log(itCompanies.length)

console.log(itCompanies[itCompanies.length-1] )

//console.log(itCompanies.sort())

let amazonKaldi = itCompanies.pop()

let yeniCumle = itCompanies.join()
console.log(yeniCumle + ' and ' +amazonKaldi)


console.log(itCompanies.join(' ').toLocaleUpperCase())