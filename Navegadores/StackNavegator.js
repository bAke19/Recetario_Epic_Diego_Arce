import React, {Component} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Creador from "../Pantallas/Creador";
import Creador2 from "../Pantallas/Creador2";
import BottomTab from "./BottomTab";

const Stack=createStackNavigator();

export default class StackNavigator extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Stack.Navigator initialRouteName="BottomTab" screenOptions={{headerShown:false}}>
                <Stack.Screen name='BottomTab' component={BottomTab}/>
                <Stack.Screen name='Crear Alimentos' component={Creador}/>
                <Stack.Screen name='Crear Bebidas' component={Creador2}/>
            </Stack.Navigator>
        );
    }
    
}