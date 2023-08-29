import React, {Component} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import plato1 from '../Pantallas/plato1';
import plato2 from '../Pantallas/plato2';
import plato3 from '../Pantallas/plato3';
import plato4 from '../Pantallas/plato4';
import plato5 from '../Pantallas/plato5';


import { StyleSheet } from 'react-native';

const Tab= createMaterialBottomTabNavigator();

export default class BottomTab extends Component {
    render(){
        return(
        <Tab.Navigator barStyle={styles.estilo} activeColor={"#ee8249"}
        inactiveColor={"white"} screenOptions={{
            headerShown: true,
        }}>
            <Tab.Screen name= 'Frutas y verduras' component={plato1}/>
            <Tab.Screen name= 'Cereales' component={plato2}/>
            <Tab.Screen name= 'Leguminosa' component={plato3}/>
            <Tab.Screen name= 'Origen animal' component={plato4}/>
            <Tab.Screen name= 'Reposteria' component={plato5}/>

            
        </Tab.Navigator>
        )
    }
}

const styles= StyleSheet.create({
    estilo:{
        backgroundColor: '#830935',
        height: '12%',
        padding: 0,
        
        fontSize: 10,
    },
});

