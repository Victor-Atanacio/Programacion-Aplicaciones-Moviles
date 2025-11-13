import React, {useEffect,useState} from 'react'
import { Text,View,ImageBackground,StyleSheet,StatusBar,Image,ScrollView,TouchableOpacity,Modal, Alert} from 'react-native';

const ImagenDeFondo = require('../assets/imagenes/Imagen1.jpg');

export default function MifaleriaScreen() {
  
    const [isLoading,setIsLoading] = useState(true);
    const [info,setInfo] = useState(false);
    const MostrarInformacion = ()=>{
        Alert("Informacion");
    }
    useEffect(()=>{
       const timer = setTimeout(()=>{
         setIsLoading(false);
       }, 3000);
       return ()=> clearTimeout(timer);
     },[]);

    if(isLoading){
     return (
       <ImageBackground
       source={ImagenDeFondo} style={styles.Fondo} resizeMode='cover'>
       <StatusBar barStyle="light-content" backgroundColor="transparent" translucent>
        <Image source={ImagenDeFondo} resizeMethod='contain' />
           <View style={styles.splash}>
            <Text style={styles.splashTitle} >Galeria de imagenes</Text>
            <Text>Cargando</Text>
          </View>
       </StatusBar>
       </ImageBackground>
     );
    }
  if(info){
    return(
     <View style={styles.descripcion}>
        <Text>Titulo</Text>
        <Text>Descripcion</Text>
     </View>
    );
  }
  return (
    <View style={styles.contenedor}>
       <Text style={styles.Titulo}>MI Galeria</Text>
       <ScrollView contentContainerStyle={styles.scrollConenido}>
        <View style={styles.tarjeta}>
         <View style={styles.contenidoTarjeta}>
         <Text style={styles.tituloImagen}>Imagen 1</Text>
        <TouchableOpacity onPress={()=>setInfo(true)} >
             <ImageBackground  style={styles.imagenesTarjeta} source={ImagenDeFondo} />
        </TouchableOpacity>
         <Text>Imagen avión</Text>
         </View>
         <View style={styles.contenidoTarjeta}>
         <Text style={styles.tituloImagen}>Imagen 2</Text>
        <TouchableOpacity onPress={()=>setInfo(true)} >
             <ImageBackground  style={styles.imagenesTarjeta} source={ImagenDeFondo} />
        </TouchableOpacity>
         <Text>Imagen avión</Text>
         </View>
        <View style={styles.contenidoTarjeta}>
        <Text style={styles.tituloImagen}>Imagen 3</Text>
        <TouchableOpacity onPress={()=>setInfo(true)} >
             <ImageBackground  style={styles.imagenesTarjeta} source={ImagenDeFondo} />
        </TouchableOpacity>
         <Text>Imagen avión</Text>
         </View>
        </View>
        
       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Fondo:{
    flex:1,
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center"
  },splashTitle:{
    color:"#ffff",
    fontSize:20,
    fontWeight:"bold"
  },splash:{
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)', 
    padding: 24,
    borderRadius: 12
  },logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },contenedor:{
    flex:1,
    alignItems:"center",
    marginTop:40
  },Titulo:{
    fontSize:20,
    marginEnd:20
  },scrollConenido:{
    paddingBottom:40,
    flexGrow:1,
  },imagenesTarjeta:{
    height:200,
    width:200,
    marginLeft:20
  },contenidoTarjeta:{
    flex:1,
    alignItems:"center"
  },tituloImagen:{
    fontSize:20
  },tarjeta:{

  }
});