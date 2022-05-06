
//iki degiskenin karsilastirilmasi

//Primitive Data Types karsilastirma yapilabilir..
//number , string , undefined , null 

let numOne = 3
let numTwo = 3


console.log(numOne==numTwo)


let js = 'Javasciript'
let py='Python'

console.log(js==py)

let lightOn=true
let lightOff = false

let deneme  =null
console.log(deneme)

console.log(lightOn == lightOff)

// Non-Primitive Data Types (array , object)
// karsilastirma islemleri yapilamaz.. referanslari farkli olduklarindan false döner..

let nums = [1 , 'emre' , null , undefined]

console.log(nums[1])

//console.table(nums)

let nums1 = [1 , 2 , 3]
let nums2 = [1 , 2 , 3]

console.log(nums1 == nums2)

let user1 = {
    name: 'Emre',
    surName: 'Erdemir'
}

let user2 = {
    name: 'Emre',
    surName: 'Erdemir'
}

console.log(user1 == user2) //false doner cunku objeler referans type dir. 

