let fs = require('fs')

let persona =
{
    'name': 'Pepe',
    'surname': 'Peréz',
    'age' : '32',
}

// fs.writeFile('./persona.json',JSON.stringify(persona) ,()=>{
//    fs.readFile('./persona.json', (error, data)=>{
//            if (!error) {
//                console.log(data.toString());
//            } else {
//                console.log(error);
//            }
//        })
// });
fs.writeFile('./persona.json',JSON.stringify(persona) ,()=>{
    fs.readFile('./persona.json', (error, datosleidos)=>{
          console.log(JSON.parse(datosleidos) );
        })
 });
 
