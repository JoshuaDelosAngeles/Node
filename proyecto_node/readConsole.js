let fs = require('fs')
const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout)


  function readConsole(callback){
                function creaObjeto(){
                    let persona={
                        'nombre':'',
                        'surname':'',
                        'age': '',
                    }

                    rl.question('introduce nombre',(nombre)=>{
                        persona.nombre = nombre

                        rl.question('introduce surname',(surname)=>{
                            persona.surname = surname
                            rl.question('introduce age',(age)=>{
                                persona.age = age
                                console.log(persona);
                                fs.writeFile('./persona.json',JSON.stringify(persona),()=>{
                                fs.readFile('./persona.json',(error,datos)=>{
                                    console.log(JSON.parse(datos));
                                    process.exit()
                                })
                                })

                        })
                        })
                        
                    })
                }
                }
export {readConsole};
