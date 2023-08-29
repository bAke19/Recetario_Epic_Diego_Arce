import React, {Component} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Menu from '../Pantallas/Menu';
import Menu2 from '../Pantallas/Menu2';
import Drawer from './Drawer';
import { StyleSheet } from 'react-native';

const Tab= createMaterialBottomTabNavigator();

export default class BottomTab extends Component {
    render(){
        return(
        <Tab.Navigator barStyle={styles.estilo} activeColor={"#0CBE60"}
        inactiveColor={"white"} screenOptions={{
            headerShown: true,
        }}>
            <Tab.Screen name= 'Panel' component={Drawer}/>
            <Tab.Screen name= 'Alimentos' component={Menu}/>
            <Tab.Screen name= 'Cocteles' component={Menu2}/>
            
        </Tab.Navigator>
        )
    }
}

const styles= StyleSheet.create({
    estilo:{
        backgroundColor: 'black',
        borderColor: 'white',
        borderTopWidth: 2,
        height: '10%',
        padding: 0,
        fontSize: 10,
    },
});

