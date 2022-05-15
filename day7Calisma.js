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

