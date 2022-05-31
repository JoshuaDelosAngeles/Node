const { resolve } = require('path')
const readline = require('readline')

let person={
    'nombre':'',
    'surname':'',
    'age':'',
}




function pregunta(pregunta){

    const question = new Promise((resolve,reject )=>{
        const rl = readline.createInterface({
            input:process.stdin,
            output:process.stdout
        });
        rl.question(pregunta,(respuesta)=>{
            resolve(respuesta);
            rl.close();
        });
    });
    return question
}

pregunta('cual es tu nombre')
.then(()=>{
    person.nombre=nombre
})
.then( () => {
        person.surname = surname;
    })
.then(()=>{
    person.age=age
})
.then(()=>{
    fs.writeFile('person.json',JSON.stringify(person))
})
.then(()=>{
    return fs.readFile('person.json','utf-8')
})
.then(datos=>{
    console.log(datos);
})
.catch(error=>{
   console.log(error);
})
