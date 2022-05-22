

let name = 'Emre'
let surname = 'Erdemir'

function letsLearnScope(){
    console.log(name , surname)

    if(true){
        let name = 'Mehmet'
        let surname = 'DEniz'
        console.log(name , surname)
    }

    console.log(name , surname)
}
letsLearnScope()
console.log('Metod sonrasi : ',name , surname)


// Obje-Nesne ile calismak 

const person = {
    firstName :'Emre',
    lastName : 'Erdemir',
    age : 28,
    country : 'Turkey',
    city : 'Sivas',
    'phone number': 25478932,
    test : {
        deneme : 'Deneme text'
    },
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'C#',
        'MSSQL'
    ],
    isMarried : false,
    getFullName : function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person.test.deneme)
console.log(person['phone number'])

const formatter = new Intl.ListFormat('en',{
    style : 'long',
    type : 'conjunction'
});

person.title = 'Developer'
person.getPersonInfo = function(){
    // let skillsWithoutLastOne = this.skills.splice(0,this.skills.length-1).join(',')
    // let lastSkill = this.skills.at(-1) //at(-1) methodu sondan birinciyi alir.
    // let skills1 = `${skillsWithoutLastOne} and ${lastSkill}`

    let newSkills = formatter.format(this.skills)
    return newSkills
}

console.log(person.getPersonInfo())