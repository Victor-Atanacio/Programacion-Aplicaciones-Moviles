import React, { useState } from 'react'
import { Text, View,ScrollView,StyleSheet,Button } from 'react-native'

export default function ScrolViewScreen() {

  const [items,setItems] = useState(['Opción 1','Opción 2', 'Opción 3']);

  const agregarOpcion = () =>{
    const NuevaOpcion = `Opcion ${items.length + 1}`;
    setItems([...items,NuevaOpcion]);
  }

  const borrarUtima = () =>{
    if(items.length>3){
      setItems(items.slice(0,items.length - 1));
    }else{
      alert("Solo se borran las opciones de agregaste");
    }
  }

  return (
      <View style={styles.container}>
             <Text style={styles.title}>ScrollView</Text>
             <ScrollView 
             style={styles.scroll}
             contentContainerStyle={styles.content}
             //horizontal={true}
             showsVerticalScrollIndicator={true}
             >
               {items.map((item,index)=>(
                <View key={index} style={styles.box}>
                    <Text style={styles.Texto}>{item}</Text>
                </View>
               ))}
             </ScrollView>
             <View style={styles.buttonContainer}>
                <Button title='Agregar Opción' color="#4d8a71ff" onPress={agregarOpcion}/>
                <View style={styles.space}/>
                <Button title='Borrar Opción' color="#d99d4fff" onPress={borrarUtima}/>  
             </View>
      </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:"#EEF2FF",
  }, title:{
    fontSize:23,
    fontWeight:"bold",
    marginVertical:15,
    color:"#2C3E50",
    textAlign:"center"
  },scroll:{
    flex:1,
    marginBottom:15,
    borderRadius:10,
    backgroundColor:"#F9FAFB"
  },content:{
    paddingBottom:15,
    alignItems:"center"
  },
  box:{
    backgroundColor:"#82B6ED",
    width:"90%",
    padding:20,
    marginVertical:10,
    borderRadius:15,
    elevation:3,
    shadowColor:"#000",
    shadowOpacity:0.2,
    shadowRadius:5
  },Texto:{
    fontSize:18,
    color:"#1F2937",
    textAlign:"center"
  },buttonContainer:{
    flexDirection:"row",
    justifyContent:"center",
    marginBottom:10
  },space:{
    width:10,
  }

})