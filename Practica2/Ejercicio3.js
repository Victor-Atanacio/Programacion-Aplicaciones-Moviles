const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 32},
    {nombre: "Maria", edad: 28}
];

console.log(personas.find(persona => persona.nombre == "Luis"));

personas.forEach( 
    persona => {
        console.log(persona.nombre+" edad:"+persona.edad);
    }
)

console.log(
    personas.reduce((a,b) => a + b.edad,0)
);
