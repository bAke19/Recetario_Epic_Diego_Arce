import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView } from "react-native";

export default class Buscador extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <ImageBackground source={require('../assets/fondoCocteles.png')} style={styles.fondo1}>
                <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                    <Text>
                        Buscador
                    </Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles= StyleSheet.create({
    caja:{
        flex: 0.2,
    },

    fondo1:{
        flex: 1,
        resizeMode: "cover",
    },

})