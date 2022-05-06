
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


//Math Object 

const PI = Math.PI

console.log(PI)

console.log(Math.round(9.81))  //round sayiyi 10 a yuvarlar. 

console.log(Math.floor(9.81)) //girilen degeri alta yuvarlar

console.log(Math.ceil(9.81)) // girilen sayiyi uste yuvarlar.

console.log(Math.min(-5,1,3,7,9))

console.log(Math.max(-5,1,3,7,9,15))

const randNum = Math.random();  // 0 to 0.99999 arasi deger atar
console.log(randNum)

const num  = Math.floor(Math.random()*11) // 0 and 10 icin (+1 ekleyip carpiyiyoruz floor ile alta yuvarlayip)
console.log(num)


console.log(Math.sqrt(100)) // karakok alir.

//---------------------------------------------------------------------------------------------------------------------

//String Concatenation (String'leri birlestirmek)

let name2 = 'Emre'
let surName2 = 'Erdemir'
let space = ' '

let fullName = name2+ space + surName2;
console.log(fullName)


let paragraph = 'hello\
test\
deneme\
deneme'

let fullParagraph = 'Emre\nErdemir\nBesiktas' //karakteri alt alta yazar..
console.log(fullParagraph)

let cumle = 'Emre Erdemir\'in babasi'

console.log(cumle)

let a = 5
let b = 3

let fullName2 = `${name2} 
deneme 

merhaba 
a+b = ${a+b}`

console.log(fullName2)

//let youtube = 'EmreErdemir'
let youtube = `Emre Erdemir`
console.log(youtube.length)  //uzunlugunu verir..

let dizi = ['p','r','o','t','o']

let lastIndex = youtube[youtube.length - 1];
console.log(lastIndex) //son karakteri verir.

console.log(youtube.toUpperCase())

console.log(youtube.substring(2)) //belirtilen indekstan baslayip alir
console.log(youtube.substring(2,10))
console.log(youtube.split(' '))

let string = '30 Days Of JavaScript'

console.log(string.includes('Days')) //icerip icermedigine bakar true-false doner

let str = 'merhaba Emre , nasilsin Emre?'
console.log(str.replace('Emre' , 'Ahmet')) //tek bir tane Emre'yi degistirir

console.log(str.replaceAll('Emre' , 'Ahmet'))  // butun Emre'leri Ahmet yapar..


// indexOf() iceriyorsa indeksini dondurur yoksa -1 döndürür.

let str2 = '30 Days Of JavaScript'
console.log(str2.indexOf('D'))
console.log(str2.indexOf('denizli'))

//startWith() true -false döner

console.log(str2.startsWith('30'))

console.log(str2.startsWith('31'))

//REGEX kullanimi /.../gi g:global i:büyük-kücük bakmaz.

let txt = 'In 2019, I ran 30 Days of Python'

console.log(txt.match(/\d+/g))