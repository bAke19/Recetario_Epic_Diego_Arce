import React, {Component} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Favoritos from '../Pantallas/Favoritos';
import Favoritos1 from '../Pantallas/Favoritos1';


import { StyleSheet } from 'react-native';

const Tab= createMaterialBottomTabNavigator();

export default class BottomTab extends Component {
    render(){
        return(
        <Tab.Navigator barStyle={styles.estilo} activeColor={"#ee8249"}
        inactiveColor={"white"} screenOptions={{
            headerShown: true,
        }}>
            <Tab.Screen name= 'Alimentos' component={Favoritos1}/>
            <Tab.Screen name= 'Cocteles' component={Favoritos}/>

        </Tab.Navigator>
        )
    }
}

const styles= StyleSheet.create({
    estilo:{
        backgroundColor: '#830935',
        height: '10%',
        padding: 0,
        
        fontSize: 10,
    },
});

