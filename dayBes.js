//Diziler pratik..

let names = ['Emre' , 'tayfun' ,'Ali', 'kamil','Saban']

names[0] = 'Derya'

console.log(names)

// Dizi olusturma yontemleri 
//diziler genellikle const ile tanimlanir

const arr = Array(); //bos bir dizi
const arr2 = [] // bu da bos bir dizi

//ikisinin farki 
const arr3 = Array(5) //diziye eleman sayisi verebiliyoruz.


// fill : ile dizinin icini statik bir degerle doldurabiliyoruz.

const four4Values = Array(4).fill(4)
const eight8Values = Array(8).fill('X') 

// concat : iki diziyi birlestirmemizi saglar

let array1 = [1 , 2 ,3]
let array2 = [4 , 5 ,6]

var result = array1.concat(array2)  //devam etmesini istedigimizi siraya gore yaziyoruz..
console.log(result)


//indexof : bir dizide bir ogenin olup olmadıgını kontrol eder varsa indeksinini yoksa -1 doner.

const isimler = ['mehmet' , 'ali','mehmet', 'kamil' , 'mehmet']
console.log(isimler.indexOf('mehmet')) // 0 doner
console.log(isimler.indexOf('merve')) // -1 doner olmadıgı icin



//lastIndexOf() : bir dizide ayni deger birden fazla gecebilir en son hangi indekste kullanildigini bulur.

console.log(isimler.lastIndexOf('mehmet'))


//includes : (icermek) bir dizinin icerisinde bir ogenin olup olmadigini kontol etmek icin true-false donderir.

console.log(isimler.includes('ali')) //true doner

//Array.isArray : bir dizinin bize dizi olup olmadigini gosterir. true -false doner

const meyveler = ['armut','karpuz','cilek']
const meyveler2 = 'patates'
console.log(Array.isArray(meyveler))
console.log(Array.isArray(meyveler2))


//toString() : dizinizi string bir ifadeye donusturur.