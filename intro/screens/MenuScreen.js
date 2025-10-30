//1. imports: Zona de importaciones
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import ActivitIndicator from './ActivitIndicator';
import FlatList from './FlatList';
import Modal from './Modal';
import BottomSheetScreem from './BottomSheetScreem';
import TextInputScreen from './TextInputScreen';
import ImageBackgroupScreens from './ImageBackgroupScreens';
import PantallaDeRegistroScreen from './PantallaDeRegistroScreen';
import ScrolViewScreen from './ScrolViewScreen';
//2. Main: Zona de componentes
export default function MenuScreen() {
    const [screen,setScreen] = useState('menu');
    switch(screen){
          case 'contador':
            return <ContadorScreen/>
          case 'botones':
            return <BotonesScreen/>
          case 'textinput':
            return <TextInputScreen/>
          case 'imageBack':
            return <ImageBackgroupScreens/>
          case 'scrolView':
            return <ScrolViewScreen/>
          case 'activitIndicator':
            return <ActivitIndicator/>
          case 'flatList':
            return <FlatList/>
          case 'modal':
            return <Modal/>
          case 'bottomSheet':
            return <BottomSheetScreem/>
          case 'pantalla':
            return <PantallaDeRegistroScreen/>
          case 'menu':
          default:  return (<View style={styles.container} >
                            <Text style={styles.texto} >Menú de Practicas</Text>
                            <Button color={"red"} title='Registro' onPress={()=>setScreen('pantalla')} />
                            <Button  color={"red"} title='Pract:Contador' onPress={()=>setScreen('contador')}/>
                            <Button  color={"red"} title='Pract:Botones' onPress={()=>setScreen('botones')}/>
                            <Button  color={"red"} title='Pract:TextInput' onPress={()=>setScreen('textinput')}/>
                            <Button  color={"red"} title='Pract:ImageBackgroup' onPress={()=>setScreen('imageBack')}/>
                            <Button  color={"red"} title='Pract:ScrollView' onPress={()=>setScreen('scrolView')}/>
                            <Button  color={"red"} title='Pract:ActivitIndicator' onPress={()=>setScreen('activitIndicator')}/>
                            <Button  color={"red"} title='Pract:FlatList' onPress={()=>setScreen('flatList')}/>
                            <Button  color={"red"} title='Pract:Modal' onPress={()=>setScreen('modal')}/>
                            
                            <Button  color={"red"} title='Pract:Bottom Sheet' onPress={()=>setScreen('bottomSheet')}/>
                            </View>);
    }
}

//3: Estilos : Zona de estilos y posicionamiento 
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
    texto:{
    color: "#000000ff",
    fontSize:35,  
    fontFamily: 'Times New Roman',
    fontWeight: 700,   //negrita
    fontStyle: 'italic', //Para inclinar las letras
    textDecorationLine:'underline' //para subrayado las letras
  }
});