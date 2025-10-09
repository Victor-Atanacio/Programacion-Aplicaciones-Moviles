//1. imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

//2. Main: Zona de componentes
export default function App() {
  const [contador,setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.texto} >Contador:</Text> 
      <Text style={styles.texto2}>{contador}</Text> 
      <View style={styles.Botones}>
      <Button color="blue" title='Agregar' onPress={()=> setContador(contador+1)} /> 
      <Button color="red" title='Quitar' onPress={()=> setContador(contador-1)}/>
      <Button color="yellow" title='Reiniciar' onPress={()=>setContador(0)}/>
       </View>
      <StatusBar style="auto" />
    </View>
  );
}

//3: Estilos : Zona de estilos y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1bd0dff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: "#000000ff",
    fontSize:35,  
    fontFamily: 'Courier',
    fontWeight: 700,   //negrita
    fontStyle: 'italic', //Para inclinar las letras
    textDecorationLine:'underline' //para subrayado las letras
  },
   texto2:{
    color: "#72007cff",
    fontSize:35,  
    fontFamily: 'Courier',
    fontWeight: 700,   //negrita
    fontStyle: 'italic', //Para inclinar las letras
    textDecorationLine:'underline' //para subrayado las letras
  },
  Botones:{
    marginTop:15, //Dejar espacio en las filas
    flexDirection:'row', // para que los botones esten en una sola linea
    alignItems:'center', //para centrar los botones 
    justifyContent:'center', //para centrar los botones
    gap:15, //agregar espacio entre los componentes
  },
});
