// if - else kosul ifadeleri calismalari...

let isRaining = true

if(isRaining){
    console.log('Git semsiye al')
}
else{
    console.log('Semsiyeye gerek yok')
}

let result = prompt('2+5 kac yapar ? ')

//let result = confirm('2+5 = 7 midir ?') //confirm true - false doner ona gore islemlerimizi yapariz..
//console.log(result)

if(result ==='7'){
    console.log('dogru cevaptir..')
}
else{
    console.log(`${result} yanlis cevap verdiniz..`)
}