import React, { useState } from 'react'
import { Text, View , FlatList,StyleSheet} from 'react-native'

class Producto {
   constructor(id, titulo, descripcion, precio){
     this.id = id;
     this.titulo = titulo;
     this.descripcion = descripcion;
     this.precio = precio;
   }
}

export const productos2 = [
  new Producto('1','Auriculares', 'Experimenta algo sensacional', 99),
  new Producto('2','nose', 'Experimenta algo sensacional', 99),
  new Producto('3','Auriculares', 'Experimenta algo sensacional', 99),
  new Producto('4','Auriculares', 'Experimenta algo sensacional', 99),
];

export default function FlatListScreen() {
 const [productoLista,setProductosLista] = useState(productos2);

  return (
   <View style={styles.lista}>
    <FlatList
     data={productoLista}
     keyExtractor={(item) => item.id}
     renderItem={({item}) => (
      <View style={styles.item}>
        <Text>{item.titulo}</Text>
        <Text>{item.descripcion}</Text>
        <Text>{item.precio}</Text>
        <Text>Ver detaller</Text>
      </View>
     )}
    /> 
  </View>
  )
}

const styles = StyleSheet.create({
  lista:{
    flex:1,
    paddingVertical: 200,
    justifyContent:"center",
    alignItems:"center"
  },
  item:{
      padding: 15, 
      marginVertical: 8, 
      marginHorizontal: 16, 
      backgroundColor: '#f0f0f0',
  }
})
