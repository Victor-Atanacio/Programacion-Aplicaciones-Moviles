import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Profile({navigation}) {
  return (
     <View style={styles.conteiner}>
         <View style={styles.iconRow}>
          <Ionicons name="person-outline" size={28} color="green" />
          <Text style={styles.title}>Perfil de usuario</Text>
          <TouchableOpacity style={styles.boton} onPress={()=> navigation.navigate('Detalles')}>
            <Text style={styles.texto}>Detalles del usuario</Text>
          </TouchableOpacity>
         </View>
     </View>
  );
}

const styles = StyleSheet.create({
   conteiner:{
     flex:1,
     backgroundColor:"#fff",
     justifyContent:"center",
     alignItems:"center",
     padding:20,
   },iconRow:{
     flexDirection:"column",
     alignItems:"center",
   },title:{
     fontSize:22,
     fontWeight:"bold",
     marginLeft:10,
     color:"green"
   }, boton:{
     width:150,
     height:30,
     backgroundColor:"#5b2effff",
     alignItems:"center",
     borderRadius:15,
     justifyContent:"center",
     borderColor:"#000000ff",
     borderWidth:1,
   },texto:{
      color:"#ffff",
      fontSize:15
   }
});