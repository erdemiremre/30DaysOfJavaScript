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
