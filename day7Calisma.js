function fullName(name , surname){

    return `Adiniz ve soyadiniz : ${name} ${surname}`
}

console.log(fullName('Emre','Erdemir'))


function addNumbers(num1 , num2){
  let sum = num1 + num2;
  return sum;
}

console.log('Toplam :' ,addNumbers(30, 1))


//Egzersiz 4

function areaOfRectangle(lengt , width){
        let area  = lengt * width
        return area
}

console.log(`Dikdortgen Alaniniz : ${areaOfRectangle(9,5)}`)

//Egzersiz 5 

function perimeterOfRectangle(length,width){
    let perimeter = 2 * (length + width)
    return perimeter
}

console.log(`Dikdortgenin cevresi : ${perimeterOfRectangle(5,15)}`)


//Egzersiz 6

function volumeOfRectPrism(length , width , height){
  let rect = length * width * height
  return rect
}

console.log(`Hacim hesaplamasi : ${volumeOfRectPrism(3,5,10)}`)

//Egzersiz 15

function findMax(num1 , num2 , num3){
  let maxNum = 0;
  if(num1>num2 && num1>num3){
     maxNum = num1;
  }else if(num2>num1 && num2>num3){
      maxNum = num2;
  }else if(num3>num1 && num3>num2){
    maxNum = num3;
  }
  return maxNum;
}

var result = findMax(15,25,-45)

console.log(result)


//Egzersiz 8 

const arrModify = ['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'];

const arrModify1 = ['Avocado', 'Tomato', 'Potato'];


function modifyArray(array){
  let newArray = [];
  if(array.length<4){
    return `Not found dizinin uzunlugu ${array.length}<5'tir.`;
  }else{
    for(let i =0; i<array.length; i++){
      if(array[4]===array[i]){
        newArray.push(array[4].toLocaleUpperCase())
      }else{
        newArray.push(array[i])
      }
    }
    return newArray;
  }
}

let result2 = modifyArray(arrModify1)
console.log(result2)


// Egzersiz 

function isPrime(number){
  if(number>1 && number%1==0 && number%number==0 && number%2!=0){
    return `${number} girilen deger asaldir`
  }else{
    return `${number} girilen deger asal degildir `
  }

}

console.log(isPrime(2));


function isPrime2(number){
  let control = 0;

  for(let i= 1; i<=number; i++){
      if(number%2==0){
        break;
      }
  }

}