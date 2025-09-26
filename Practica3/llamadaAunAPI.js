function simularLaPeticionDeUnAPI(){
    return new Promise((resove) => {
        setTimeout(()=>{ 
          resove("Datos recibidos correctamente"); 
          //reject("Error");
        },5000) })
}

async function ObtenerDatos() {
   try {
     const respuesta = await simularLaPeticionDeUnAPI();
     console.log("Respuesta");
     console.log(respuesta);
   } catch (error) {
     console.log("Hay un error al consultar los datos");
   }   
}

ObtenerDatos();