import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView, TouchableOpacity, TextInput, Image, Alert, ScrollView } from "react-native";
import firebase from '../Config'

export default class Creador2 extends Component{
    constructor(props){
        super(props);
        this.state={
            item: 0,
            nombre: 0,
            title:'',
            infoVaso: 1,
            vaso: 'Vaso alto',
            preparation: '',
            ing1: '',
            ing2: '',
            ing3: '',
            ing4: '',
            ing5: '',
            ing6: '',
            ing7: '',
            ing8: '',
        }
    }

    crearReceta=()=>{
        var estado=this.state
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        if(this.state.titulo && this.state.vaso && this.state.preparation && 
            (this.state.ing1 || this.state.ing2 || this.state.ing3 || this.state.ing4 
            || this.state.ing5 || this.state.ing6 || this.state.ing7 || this.state.ing8)){
                var nombre= Math.random().toString(36).slice(2)
                this.setState({nombre: nombre})
                firebase.ref('/Recetario/Bebidas/'+nombre).set({
                    Titulo: this.state.titulo,
                    Color: color,
                    Imagen: this.state.infoVaso,
                    Ingredientes:{
                        Ing1: this.state.ing1 ? this.state.ing1 : null,
                        Ing2: this.state.ing2 ? this.state.ing2 : null,
                        Ing3: this.state.ing3 ? this.state.ing3 : null,
                        Ing4: this.state.ing4 ? this.state.ing4 : null,
                        Ing5: this.state.ing5 ? this.state.ing5 : null,
                        Ing6: this.state.ing6 ? this.state.ing6 : null,
                        Ing7: this.state.ing7 ? this.state.ing7 : null,
                        Ing8: this.state.ing8 ? this.state.ing8 : null,
                    },
                    Preparacion: this.state.preparation,
                    Open: true,
                    Favorito: false
                })
            this.props.navigation.navigate('BottomTab')
        }
        
    }
            

    render(){
        return(
            <ImageBackground source={require('../assets/fondoCocteles.png')} style={styles.fondo1}>
                <ScrollView> 
                        <TouchableOpacity style={{marginTop: 20}} onPress={()=>this.props.navigation.navigate('BottomTab')}>
                            <Text style={[styles.agregar,{backgroundColor:'#560069', width: 100}]}>
                                Volver
                            </Text>
                        </TouchableOpacity>
                    <View style={{flex: 1,paddingTop:100, alignItems: 'flex-start'}}>
                        <Text style={styles.creador2}>
                            Nueva receta
                        </Text>
                        <TextInput
                            style={styles.title}
                            onChangeText={text => this.setState({ titulo: text })}
                            placeholder={"Nombre de coctel"}
                            numberOfLines={1}
                            placeholderTextColor={"#FFFFFF"}
                        />
                        
                        <TouchableOpacity style={{padding: 5, backgroundColor: 'white',left:10, top: 10,paddingRight: 20,borderWidth:2}} onPress={()=>this.setState({vaso:'Vaso alto',infoVaso: 1})}>
                            <Image source={require('../assets/alto.png')} style={{padding: 10, width:40,height:80,}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 5, backgroundColor: 'white',left:10, top: 10,paddingRight: 10,borderWidth:2}} onPress={()=>this.setState({vaso:'Vaso corto',infoVaso: 2})}>
                            <Image source={require('../assets/corto.png')} style={{padding: 10, width:50,height:80,}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 5, backgroundColor: 'white',left:10, top: 10,paddingRight: 20,borderWidth:2}} onPress={()=>this.setState({vaso:'Frozen',infoVaso: 3})}>
                            <Image source={require('../assets/frozen.png')} style={{padding: 10, width:40,height:80,}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 5, backgroundColor: 'white',left:10, top: 10,paddingRight: 20,borderWidth:2}} onPress={()=>this.setState({vaso:'Copa',infoVaso: 4})}>
                            <Image source={require('../assets/copa.png')} style={{padding: 10, width:40,height:80,}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 5, backgroundColor: 'white',left:10, top: 10,paddingRight: 0,borderWidth:2}} onPress={()=>this.setState({vaso:'Caliente',infoVaso: 5})}>
                            <Image source={require('../assets/caliente.png')} style={{padding: 10, width:60,height:80,}}/>
                        </TouchableOpacity>

                        <Text style={styles.mas}>
                                {this.state.vaso}
                            </Text>
                        

                        <TextInput
                            style={styles.ingredients}
                            onChangeText={text => this.setState({ ing1: text })}
                            placeholder={"Ingrediente 1                                                                 "}
                            numberOfLines={1}
                            placeholderTextColor={"#FFFFFF"}
                        />
                        <TextInput
                            style={styles.ingredients}
                            onChangeText={text => this.setState({ ing2: text })}
                            placeholder={"Ingrediente 2                                                                 "}
                            numberOfLines={1}
                            placeholderTextColor={"#FFFFFF"}
                        />
                        <TextInput
                            style={styles.ingredients}
                            onChangeText={text => this.setState({ ing3: text })}
                            placeholder={"Ingrediente 3                                                                 "}
                            numberOfLines={1}
                            placeholderTextColor={"#FFFFFF"}
                        />
                        <TextInput
                            style={styles.ingredients}
                            onChangeText={text => this.setState({ ing4: text })}
                            placeholder={"Ingrediente 4                                                                 "}
                            numberOfLines={1}
                            placeholderTextColor={"#FFFFFF"}
                        />
                        <TextInput
                            style={styles.ingredients}
                            onChangeText={text => this.setState({ ing5: text })}
                            placeholder={"Ingrediente 5                                                                 "}
                            numberOfLines={1}
                            placeholderTextColor={"#FFFFFF"}
                        />
                        <TextInput
                            style={styles.ingredients}
                            onChangeText={text => this.setState({ ing6: text })}
                            placeholder={"Ingrediente 6                                                                 "}
                            numberOfLines={1}
                            placeholderTextColor={"#FFFFFF"}
                        />
                        <TextInput
                            style={styles.ingredients}
                            onChangeText={text => this.setState({ ing7: text })}
                            placeholder={"Ingrediente 7                                                                 "}
                            numberOfLines={1}
                            placeholderTextColor={"#FFFFFF"}
                        />
                        <TextInput
                            style={styles.ingredients}
                            onChangeText={text => this.setState({ ing8: text })}
                            placeholder={"Ingrediente 8                                                                 "}
                            numberOfLines={1}
                            placeholderTextColor={"#FFFFFF"}
                        />
 
                            
                        <TextInput
                            style={styles.preparacion}
                            onChangeText={text => this.setState({ preparation: text })}
                            placeholder={"Preparación                                                                   "}
                            multiline= {true}
                            numberOfLines={10}
                            placeholderTextColor={"#FFFFFF"}
                        />
                        <TouchableOpacity style={{marginBottom: 40}} onPress={()=>this.crearReceta()}>
                            <Text style={styles.agregar}>
                                Guardar
                            </Text>
                        </TouchableOpacity>
                        
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles= StyleSheet.create({
    caja:{
        flex: 0.2,
    },
    creador2:{
        fontSize: 40,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',

    },

    fondo1:{
        flex: 1,
        resizeMode: "cover",
    },
    title:{
        backgroundColor: 'black',
        padding: 8,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: '#EE8241',
        top: 20,
        left: 10,

        marginBottom: 20,
        color:'white',

    },
    ingredients:{
        backgroundColor: 'black',
        padding: 8,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: '#BBC101',
        top: 20,
        left: 10,

        marginBottom: 20,
        color:'white',
    },
    preparacion:{
        backgroundColor: 'black',
        padding: 8,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: '#4141EE',
        top: 40,
        left: 10,
        marginBottom: 100,
        textAlignVertical: 'top',
        color:'white',

    },
    mas:{
        backgroundColor: 'black',
        padding: 8,
        marginBottom: 20,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: 'red',
        top: 20,
        left: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',


    },
    agregar:{
        backgroundColor: '#005D02',
        padding: 8,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: 'white',
        top: 20,
        left: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        alingSelf: 'flex-end',


    }

})