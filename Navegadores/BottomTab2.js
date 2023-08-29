import React, {Component} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import vaso1 from '../Pantallas/vaso1';
import vaso2 from '../Pantallas/vaso2';
import vaso3 from '../Pantallas/vaso3';
import vaso4 from '../Pantallas/vaso4';
import vaso5 from '../Pantallas/vaso5';

import { StyleSheet } from 'react-native';

const Tab= createMaterialBottomTabNavigator();

export default class BottomTab extends Component {
    render(){
        return(
        <Tab.Navigator barStyle={styles.estilo} activeColor={"#ee8249"}
        inactiveColor={"white"} screenOptions={{
            headerShown: true,
        }}>
            <Tab.Screen name= 'Vaso alto' component={vaso1}/>
            <Tab.Screen name= 'Vaso corto' component={vaso2}/>
            <Tab.Screen name= 'Frozen' component={vaso3}/>
            <Tab.Screen name= 'Copa' component={vaso4}/>
            <Tab.Screen name= 'Calientes' component={vaso5}/>

            
        </Tab.Navigator>
        )
    }
}

const styles= StyleSheet.create({
    estilo:{
        backgroundColor: '#66037C',
        height: '10%',
        padding: 0,
        fontSize: 10,
    },
});

