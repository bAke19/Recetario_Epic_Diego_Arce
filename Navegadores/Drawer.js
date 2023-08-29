import React, {Component} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTab2 from "./BottomTab2";
import BottomTab3 from "./BottomTab3";
import BottomTab4 from "./BottomTab4";
import Inicio from "../Pantallas/Inicio";

const Draw=createDrawerNavigator();

export default class Drawer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Draw.Navigator screenOptions={{headerShown:false}}>
                <Draw.Screen name='Inicio' component={Inicio}/>
                <Draw.Screen name='Categorias de Bebidas' component={BottomTab2}/>
                <Draw.Screen name='Categorias de Alimentos' component={BottomTab3}/>
                <Draw.Screen name='Favoritos' component={BottomTab4}/>
            </Draw.Navigator>
        );
    }
    
}