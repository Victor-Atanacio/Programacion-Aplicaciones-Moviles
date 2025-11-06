import React, {useEffect,useState} from 'react'
import { Text,View,ImageBackground,StyleSheet,StatusBar,Image,ScrollView} from 'react-native';

const ImagenDeFondo = require('../assets/imagenes/Imagen1.jpg');

export default function MifaleriaScreen() {
  
    const [isLoading,setIsLoading] = useState(true);
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

  return (
    <View style={styles.contenedor}>
       <Text style={styles.Titulo}>MI Galeria</Text>
       <ScrollView contentContainerStyle={styles.scrollConenido}>

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
    
  }
});