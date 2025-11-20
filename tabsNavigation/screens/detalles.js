import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export default function detalles() {
  return (
   <View style={styles.contenedor}>
       <Text style={styles.texto1}> Detalles Usuario</Text>
       <Text style={styles.texto2}>Usando navigacion Stack</Text>
   </View>
  )
}

const styles = StyleSheet.create({
   contenedor:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
   },texto1:{
     fontSize:20,
   },texto2:{
    color:"blue",
   }
});
