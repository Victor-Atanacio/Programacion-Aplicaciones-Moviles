import { View, Text, TextInput, Alert, StyleSheet, Switch, Button, ImageBackground } from 'react-native';
import React, { useState } from 'react';

const ImagenFondo = require('../assets/recursos/Imagen1.jpg');

export default function PantallaDeRegistroScreen() {
  const [nombre, setNombreCompleto] = useState('');
  const [correo, setCorreo] = useState('');
  const [terminos, setTerminos] = useState(false);
  const validarCorreo = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; 

  const mostrarAlerta = () => {
    if (nombre.trim() === "" || correo.trim() === "") {
      Alert.alert("No contiene ningúna información","Por favor de ingresar los datos",[ {text:'ACEPTAR'}]);
    } else if(terminos === false){
      Alert.alert("Aceptar Terminos y codiciones","No aceptaste terminos y codiciones por favor de aceptar",[ {text:'ACEPTAR'}])
    }else if(!validarCorreo.test(correo)){
       Alert.alert("Ingresa un correo valido","Debe de contener @gmail.com", [ {text:'ACEPTAR'}]);
    }else{
      Alert.alert("Datos enviados correctamente",`Nombre: ${nombre} y Correo: ${correo}`, [ {text:'ACEPTAR'}]);
    }
  };

  return (
    <ImageBackground source={ImagenFondo} resizeMode='cover' style={styles.imagen}>
      <View style={styles.container}>
      <Text style={styles.texto}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        value={nombre}
        placeholderTextColor="#fff" 
        onChangeText={setNombreCompleto}
      />
      <Text style={styles.texto}>Correo</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu correo"
        placeholderTextColor="#fff" 
        value={correo}
        keyboardType='email-address'
        onChangeText={setCorreo}/>
      <Text style={styles.texto}>Aceptar términos y condiciones</Text>
      <Switch value={terminos} onValueChange={setTerminos} />
      <Button title="Registrar" onPress={mostrarAlerta} />
      
    </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',          
    padding: 20,           
    borderRadius: 15,      
    backgroundColor: 'rgba(136, 134, 134, 0.85)', 
    alignItems: 'center',  
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000ff',
    borderRadius: 5,
    color:'#ffffffff',
    width: '80%',
    padding: 10,
    marginBottom: 15,
  },
  imagen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
  },
  texto:{
    color:'#ffffff',
    marginBottom:15,
  },
 
});
