import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView, Image } from "react-native";

export default class Creador2 extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <ImageBackground source={require('../assets/fondoCocteles.png')} style={styles.fondo1}>
                <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                    <View>
                        <Image source={require('../assets/jarra.png')} style={styles.image}/>
                    </View>
                    <View>
                        <Image source={require('../assets/spageti.png')} style={styles.image2}/>
                    </View>
                    <View>
                        <Image source={require('../assets/deslizador.png')} style={styles.image3}/>
                    </View>     
                    <Text style={styles.mesa}>
                        Inicio
                    </Text>
                    <Text style={styles.titulo}>
                        Inicio
                    </Text>                                      
                </View>
            </ImageBackground>
        );
    }
}
var spageti=150;
var jarra=150;
const styles= StyleSheet.create({
    caja:{
        flex: 0.2,
    },

    fondo1:{
        flex: 1,
        resizeMode: "cover",
    },
    mesa:{
        fontWeight: 'bold',
        color: '#7E3F08',
        fontSize: 50,
        bottom: 70,
        backgroundColor: '#7E3F08',
        paddingHorizontal: 80,
        borderTopWidth: 15,
        borderColor: '#351A03'
    },
    titulo:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 50,
        bottom: 450,



    },
    image:{
        width: jarra,
        height: jarra*1.1,
        top: 120,
        alignSelf: 'center',
        left: -40,
    },
    image2:{
        width: spageti,
        height: spageti*0.8,
        top: 0,
        alignSelf: 'center',
        left: 30,
    },
    image3:{
        width: 80,
        height: 80,
        top: -50,
        alignSelf: 'center',
        left: -185,
    },

})