
import  React ,{useState,useEffect} from 'react';
import { Button, View, Text,Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Principal from './components/Principal';
import { AntDesign } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Detalles from './components/Detalles';
import Home from './components/Home';


/*function Logo(){
  return(
    <Image
        style={{width:50,height:50}}
        source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
    />

  )
}*/
const Tab=createMaterialBottomTabNavigator();
const Drawer=createDrawerNavigator();
function Mydrawer(){
  return(
    <Drawer.Navigator useLegacyImplementation
    screenOptions={{
      drawerStyle:{
        backgroundColor:'red',
        width:400
      }
    }}
    >
    <Drawer.Screen name='Inicio' component={Home} 
    options={{
      title:"Home",
      drawerIcon:()=>(
        <AntDesign name="home" size={30} color="blue" />
      )
    }}/>
    <Drawer.Screen name='Detalles' component={Detalles} />
  </Drawer.Navigator>
  )
}
function Mytab(){
return(
 <Tab.Navigator useLegacyImplementation>
  
    <Tab.Screen name='Home' component={Home}
    options={{
      title:"Inicio",
      tabBarIcon:()=>(
        <AntDesign name="home" size={30} color="blue" />
      )
    }

    }
    />
    <Tab.Screen name='Detalles' component={Detalles}
      
    />
 </Tab.Navigator>
);
}



//const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Mytab/> 
    </NavigationContainer>
  );
}



