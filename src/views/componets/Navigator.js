import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Login from '../authenticate/Login'
import { AppContext } from '../../../context/appContext/appState';
import InitScreen from '../app/initScreen';
import { Text } from 'native-base';
import NavBar from './NavBar';
import History from '../app/history';
import Sales from '../app/sales';
import Survey from '../app/survey';


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            tabBarPosition={"bottom"}
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#022760",
                    borderTopEndRadius: 20,
                    borderTopLeftRadius: 20

                },
                tabBarLabelStyle: {
                    color: "#FFF",
                    fontWeight: "bold"
                }
            }}
        >
            <Tab.Screen name="Pedidos" component={InitScreen} />
            <Tab.Screen name="Historial" component={History} />
            <Tab.Screen name="Ventas" component={Sales} />
        </Tab.Navigator>
    )
}

export const Navigator = () => {
    const { isLogged } = useContext(AppContext)
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    {!isLogged ? (
                        <Stack.Screen name="Login" component={Login} />
                    ) : (
                        <>
                            <Stack.Screen name="Home" component={Home} />
                            <Stack.Screen name="Survey" component={Survey} />
                        </>
                    )}


                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}
