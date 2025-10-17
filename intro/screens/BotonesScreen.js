import {StatusBar} from 'expo-status-bar';
import {StyleSheet,Text,View, Button, Switch} from 'react-native';
import React, {useState} from 'react';


export default function BotonesScreen() {

    const [modoOscuro, setModoOscuro] = useState(false);

    const tema = modoOscuro ? styles.darkTheme : styles.lightTheme; //Esta linea es como si fuera un if. La primer parte es como el 'true'
    const texto = modoOscuro ? styles.darkText : styles.lightText; // Y después de los dos puntos es como si fuera un false . A esta linea se le conoce como "valor terneareo"
  
    return (
      <View style={[styles.container, tema]}>
            <Text style={[styles.title, texto]}>Pantalla de botones y Switches</Text>
            <View style={[styles.section]}>
                <Text style={[styles.subtitulo,texto]}>Botones</Text>
                <View style={StyleSheet.buttonContainer}>
                    <Button title="Botón azul" color="blue" onPress={() => {}}/>
                    <Button title="Botón verde" color="green" onPress={() => {}}/>
                    <Button title="Botón amarillo" color="yellow" onPress={() => {}}/>
                    <Button title="Botón Rojo" color="red" onPress={() => {}}/>
                    <Button title="Botón Morado" color="purple" onPress={() => {}}/>
                </View>
                <View style={styles.section}>
                    <Text style={[styles.subtitulo, texto]}>Switches</Text>

                    <View style={styles.switchRow}>
                        <Text style={[styles.switchText, texto]}>Modo Oscuro</Text>
                        <Switch value={modoOscuro} onValueChange={() => setModoOscuro(!modoOscuro)}></Switch>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={[styles.estadoTexto, texto]}>
                        Modo Oscuro: {modoOscuro ? 'Activado' : 'Desactivado'}
                    </Text>
                </View>
                <StatusBar style="auto"/>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        justifyContent:'center', 
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    lightTheme:
    {
        backgroundColor: "#f0f8ff",
    },
    darkTheme:
    {
        backgroundColor:"#1a1a1a",
    },
    lightText:
    {
        color: '#000',
    },
    darkText: 
    {
        color:'#fff',
    },
    title: 
    {
        fontSize: 26,
        fontWeight:'bold',
        marginBottom: 25,
    },
    section:
    {
        alignItems: 'center',
        width: '30%',
        marginBottom: 25,
    },
    subtitulo:
    {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 15,
        textDecorationLine: 'underline',
    },
    buttonContainer:
    {
        width: '100%',
        marginVertical: 5,
    },
    switchRow:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#ffffff20',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '100%', 
        marginVertical:5,
    },
    switchText:
    {
        fontSize:16,
        fontWeight: '500',
    },
    footer: 
    {
        marginTop:10,
        alignItems: 'center',
    },
    estadoTexto:
    {
        fontSize: 15,
    },
})