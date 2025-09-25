function verificarUsuario(usuario){
   return new Promise((resolve, reject)=> {
      setTimeout(() => {
        if(usuario === "admin"){
            resolve("Acceso concedido");
        }else{
            reject("Acceso denegado");
        }
      }, 3000);
   })
}

verificarUsuario("admin").then(res => console.log(res)).catch(err => console.error(err));
verificarUsuario("ivan").then(res => console.log(res)).catch(err => console.error(err));