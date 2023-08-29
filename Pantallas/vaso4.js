import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView, Image, TouchableOpacity, FlatList, Alert} from "react-native";
import config from '../Config';
import * as Speech from 'expo-speech';

const Vaso=4
const Variable=50
const Color='#D6E00A'

export default class Favoritos extends Component{
    

    constructor(props){
        super(props);
        this.state={
            recetas: [],
            open: false,
            play: false,

        }
        
    }

    lectura=async()=>{
        await config.ref('/Recetario/Bebidas').on('value',(data)=>{
            var bebidas= [];
            if(data.val()){
                Object.keys(data.val()).forEach(function(key){
                    bebidas.push({
                        key: key,
                        value: data.val()[key]
                    })
                })
            }
            this.setState({recetas: bebidas})
        })
    }

    componentDidMount(){
        this.lectura()
    }

    audio=(titulo,ing1,ing2,ing3,ing4,ing5,ing6,ing7,ing8,preparacion)=>{
        
        if(!this.state.play){
            this.setState({play:true})
            Speech.speak(titulo);
            Speech.speak(`Los ingredientes para preparar esta receta son:`);
            Speech.speak(ing1?ing1:null);
            Speech.speak(ing2?ing2:null);
            Speech.speak(ing3?ing3:null);
            Speech.speak(ing4?ing4:null);
            Speech.speak(ing5?ing5:null);
            Speech.speak(ing6?ing6:null);
            Speech.speak(ing7?ing7:null);
            Speech.speak(ing8?ing8:null);
            Speech.speak(`Preparación: ${preparacion}`);
        }else{
            Speech.stop();
            this.setState({play:false})
        }
    }

    renderItem=({item})=>{
        //console.log(item)
        if(item.value.Imagen===Vaso){
            var imagen;
            var x;
            var y;
            var top;
            if(item.value.Imagen===1){
                imagen=require('../assets/alto.png')
                y=100
                x=50
                top=20
            }else if(item.value.Imagen===2){
                imagen=require('../assets/corto.png')
                y=80
                x=60
                top=10
            }else if(item.value.Imagen===3){
                imagen=require('../assets/frozen.png')
                y=100
                x=50
                top=10
            }else if(item.value.Imagen===4){
                imagen=require('../assets/copa.png')
                y=100
                x=50
                top=20
            }else{
                imagen=require('../assets/caliente.png')
                y=70
                x=70
                top=10
            }
            
            if(item.value.Open){
                return(
                    <View>
                        <Image source={imagen} style={{width:x,height:y,alignSelf:'flex-end',right:20,top:top}}/>                   
                        <TouchableOpacity style={styles.flatListView} onPress={()=>config.ref("/Recetario/Bebidas/"+item.key).update({
                            Open:item.value.Open?false:true})}>
                            <View style={{backgroundColor: 'black',borderColor: item.value.Color,borderRadius:15,borderWidth:4}}>
                                <Text style={[styles.flatList1]}>
                                    Coctel {item.value.Titulo}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>item.value.Favorito?config.ref("/Recetario/Bebidas/"+item.key).update({
                            Favorito: false
                        }):config.ref("/Recetario/Bebidas/"+item.key).update({
                            Favorito: true
                        })}>
                            <Image source={item.value.Favorito?require('../assets/favorito2.png'):require('../assets/favorito1.png')} style={{width:50,height:50,alignSelf:'flex-end',right:10,top:-40}}/>
                        </TouchableOpacity>
                    </View>
                )
            }else{
                return( 
                    <View>                    
                        <Image source={imagen} style={{width:x,height:y,alignSelf:'flex-end',right:20,top:top}}/>                    
                        <TouchableOpacity style={styles.flatListView} onPress={()=>config.ref("/Recetario/Bebidas/"+item.key).update({
                            Open:item.value.Open?false:true})}>
                            
                            <View style={{backgroundColor: 'black',borderColor: item.value.Color,borderRadius:15,borderWidth:4}}>
                                <Text style={[styles.flatList1]}>
                                    Coctel {item.value.Titulo} 
                                </Text>
                            
                                <Text style={[styles.flatList1]}>
                                    Ingredientes: 
                                </Text>
                                {item.value.Ingredientes.Ing1?<Text style={[styles.flatList3]}>
                                    -{item.value.Ingredientes.Ing1} 
                                </Text>:null}
                                {item.value.Ingredientes.Ing2?<Text style={[styles.flatList3]}>
                                    -{item.value.Ingredientes.Ing2} 
                                </Text>:null}
                                {item.value.Ingredientes.Ing3?<Text style={[styles.flatList3]}>
                                    -{item.value.Ingredientes.Ing3} 
                                </Text>:null}
                                {item.value.Ingredientes.Ing4?<Text style={[styles.flatList3]}>
                                    -{item.value.Ingredientes.Ing4} 
                                </Text>:null}
                                {item.value.Ingredientes.Ing5?<Text style={[styles.flatList3]}>
                                    -{item.value.Ingredientes.Ing5} 
                                </Text>:null}
                                {item.value.Ingredientes.Ing6?<Text style={[styles.flatList3]}>
                                    -{item.value.Ingredientes.Ing6} 
                                </Text>:null}
                                {item.value.Ingredientes.Ing7?<Text style={[styles.flatList3]}>
                                    -{item.value.Ingredientes.Ing7} 
                                </Text>:null}
                                {item.value.Ingredientes.Ing8?<Text style={[styles.flatList3]}>
                                    -{item.value.Ingredientes.Ing8} 
                                </Text>:null}
                                <Text style={[styles.flatList1]}>
                                    Preparación: 
                                </Text>
                                <Text style={[styles.flatList3]}>
                                    -{item.value.Preparacion}
                                </Text>
                                <Text style={[styles.flatList3]}>
                                    
                                </Text>
                                <TouchableOpacity style={[styles.borrar,{backgroundColor: 'red'}]} onPress={()=>{
                                Alert.alert('Advertencia', '¿Seguro que quieres borrar esta receta?', [
                                    {
                                      text: 'Si, borrar',
                                      onPress: () => config.ref("/Recetario/Bebidas/" + item.key).remove(),
                                    },
                                    {
                                      text: 'Cancelar',
                                      onPress: () => console.log('Cancelado'),
                                      style: 'cancel',
                                    },
                                    
                                  ]);
                                }}>
                                <Text style={styles.borrarText}>
                                    Borrar
                                </Text>
                            </TouchableOpacity>
                                <TouchableOpacity style={[styles.borrar,{backgroundColor: 'blue',}]} onPress={()=>this.audio(item.value.Titulo,
                                item.value.Ingredientes.Ing1,
                                item.value.Ingredientes.Ing2,
                                item.value.Ingredientes.Ing3,
                                item.value.Ingredientes.Ing4,
                                item.value.Ingredientes.Ing5,
                                item.value.Ingredientes.Ing6,
                                item.value.Ingredientes.Ing7,
                                item.value.Ingredientes.Ing8,
                                item.value.Preparacion)}>
                                <Text style={styles.borrarText}>
                                    Audio
                                </Text>
                            </TouchableOpacity>
                                    <Text style={[styles.flatList3]}>
                                    
                                    </Text>
                            </View>
                            
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>item.value.Favorito?config.ref("/Recetario/Bebidas/"+item.key).update({
                            Favorito: false
                        }):config.ref("/Recetario/Bebidas/"+item.key).update({
                            Favorito: true
                        })}>
                            <Image source={item.value.Favorito?require('../assets/favorito2.png'):require('../assets/favorito1.png')} style={{width:50,height:50,alignSelf:'flex-end',right:10,top:-40}}/>
                        </TouchableOpacity>
                    </View>
                    
                        
                    //config.ref("/Recetario/Bebidas/" + item.key).remove()
                )
            }
            
        }
    }
    
    keyExtractor = (item, index) => {
        index.toString()
    };
    render(){
        return(
            <ImageBackground source={require('../assets/fondoCocteles.png')} style={styles.fondo1}>
                <View style={styles.caja1}>
                    <Text style={styles.texto}>
                        Copa
                    </Text>
                </View>
                <View style={{flex:4,}}>
                    <View style={styles.cajon}>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.recetas}
                            renderItem={this.renderItem}
                        />
                    </View>
                </View>
                
                    
            </ImageBackground>
        );
    }
}


const styles= StyleSheet.create({
    caja2:{
        flex: 1,
        justifyContent: 'center',
        

    },
    caja1:{
        flex: 0.1,
        justifyContent: 'flex-end',
        marginBottom: 100 
    },
    texto:{
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: Color,
        top: 20,
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 20,
        borderColor: Color,
        borderWidth: 3
    },

    fondo1:{
        flex: 1,
        resizeMode: "cover",
    },
    caja:{
        flex: 1,
        justifyContent: 'flex-start',
        top: 50, 

    },

    fondo1:{
        flex: 1,
        resizeMode: "cover",
    },

    titulo:{
        fontWeight: 'bold',
        color: 'white',
        borderColor: 'white',
        backgroundColor: 'black',
        padding: 10,
        paddingRight: 170,
        borderWidth: 4,
        fontSize: 20,
        alignSelf: 'flex-end',
        right: 20,
        position: 'absolute',
    },
    image:{
        width: Variable,
        height: Variable*1.75,
        position: 'absolute',
        left: 10, 
        
    },
    image2:{
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 20, 
    },
    flatList:{
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'flex-start',
        padding: 15,
        borderRadius: 20,
        paddingRight: 220,
        fontSize: 15,
        borderWidth: 4,
    },
    flatList1:{
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'flex-start',
        padding: 15,
        fontSize: 15,
       
    },
    flatList3:{
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'flex-start',
        fontSize: 15,
        paddingLeft: 20,
        marginRight: 20
       
    },

    flatListView:{
        padding: 10
 
    },

    borrar:{
        
        borderColor: 'white',
        borderWidth: 4,
        width: 70,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: 20
        

    },
    borrarText:{
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color:'white'
        

    }
    
    

})