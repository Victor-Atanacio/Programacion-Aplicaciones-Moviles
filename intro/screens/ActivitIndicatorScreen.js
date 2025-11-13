import React, { useState } from 'react'
import { Text, View,StyleSheet,Button,ActivityIndicator } from 'react-native'

export default function ActivitIndicatorScreen() {
  const [cargando,setCargando] = useState(false);
  const [mostrarContenido,setMostrarContenido] = useState(false);
  const [mensajePromp, setMensajePrompt] = useState("Presionar accion para comenzar:");

  const manejarCarga = () =>{
    setCargando(true);
    setMostrarContenido(false);
    setMensajePrompt('Cargando.... por favor espere');

    setTimeout(()=>{
      setCargando(false);
      setMostrarContenido(false);
      setMensajePrompt("Accion completada");
    },5000);  
  }

  const cancelarCarga=()=>{
    setCargando(false);
    setMostrarContenido(false);
    setMensajePrompt("Carga cancelada");
  }
  
  return (
     <View style={styles.contenedor}>
         <Text style={styles.titulo}>Practica Indicardor</Text>
         <Text style={styles.prompt}>{mensajePromp}</Text>
         <View style={styles.botones}>
             <Button color="#765effff" title='Accion' onPress={manejarCarga}/>
         <View style={{width: 10}}></View>
             <Button color="#63ffeaff" title='Cancelar' onPress={cancelarCarga} />
         </View>
         {cargando &&(
            <ActivityIndicator
            size="large"
            color="#bbff00ff"
            style={styles.indicador}
            />
         )
         } 
         {mostrarContenido &&(
            <Text style={styles.contenido}>Acción Completada</Text>
         )}
     </View>
  )
}

const styles = StyleSheet.create({
 contenedor:{
    flex:1,
    justifyContent:"center",
    padding:20,
    backgroundColor:"#ffffff",
    alignItems:"center"
 },
 titulo:{
    fontSize:20,
    marginTop:20,
    fontWeight:"bold",
    color:"#000f",
 },
 prompt:{
    fontSize:16,
    marginBottom:20,
    color:"rgba(42, 30, 85, 1)"
 },
 botones:{
    flexDirection:"row",
    marginBottom:20,
 },
 indicador:{
    marginVertical:20
 },contenido:{
    fontSize:10,
    color:'green',
    marginTop:10,
    fontWeight:'600'
 }
});