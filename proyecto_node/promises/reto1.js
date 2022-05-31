const fs = require('fs/promises')


let person={
    'name':'pepe',
    'surname':'moreno',
    'age': '33',
}
 fs.writeFile('person.json',JSON.stringify(person))
 .then(()=>{
     return fs.readFile('person.json','utf-8')
 })
 .then(datos=>{
     console.log(datos);
 })
.catch(error=>{
    console.log(error);
})
 
       
     
 

