import React from 'react'
import { View, Text, SectionList, StyleSheet} from 'react-native'
const houses = [
    {
        title: 'DC Comics',
        data:[
            'Superman',
            'Superman',
            'Superman'
        ]
    },
    {
        title: 'Marver Comics',
        data:[
            'Superman',
            'Superman',
            'Superman',
        ]
    },
];

export default function SectionListScreen() {
  return (
   <View style={styles.container}>
       <SectionList
       sections={houses}
       keyExtractor={(item)=> item}
       renderItem={({item})=> <Text style={styles.item}>{item}</Text>}
       renderSectionHeader={({section})=> (
        <Text style={styles.sectionHeader}>{section.title}</Text>
       )}
       />
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:20,
  },
  item:{
    paddingVertical:6,
    paddingHorizontal:10
  },
  sectionHeader:{
    backgroundColor:"#eee",
    paddingVertical:8,
    paddingHorizontal:10,
    fontWeight:"bold"
  }
});