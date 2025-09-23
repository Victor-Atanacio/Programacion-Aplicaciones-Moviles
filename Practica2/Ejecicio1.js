const persona = { 
    nombre:"Ivan Isay",
    edad:37,
    direccion:{
        ciudad: "QRO",
        Pais: "MX"
    }
}

const {nombre,edad,direccion} = persona;

console.log("Me llamo "+nombre+", tengo "+edad+" años y vivo "+direccion.ciudad);