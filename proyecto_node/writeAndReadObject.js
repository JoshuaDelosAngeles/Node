let fs = require('fs')

  function writeAndRead(path,obj){
                fs.writeFile('./persona.json',JSON.stringify(persona) ,()=>{
                    fs.readFile('./persona.json', (error, datosleidos)=>{
                        console.log(JSON.parse(datosleidos) );
                        })
                     });
                        
                        
                 }

 export {writeAndRead};