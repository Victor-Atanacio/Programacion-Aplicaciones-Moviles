import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from "./screens/Settings";
import Detalles from './screens/detalles'
const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

function profileStack(){
  return(
     <stack.Navigator initialRouteName="Profile">
      <stack.Screen name="Profile" component={Profile}/>
      <stack.Screen name="Detalles" component={Detalles}/>
     </stack.Navigator> 
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       initialRouteName="Home"
       screenOptions={({route})=> ({
         headerShown:false,
         tabBarIcon:({color,size})=>{
          let IconName;
          if(route.name == 'Home'){
            IconName = 'home';
          }else if(route.name == 'Profile'){
            IconName = 'person';
          }else if(route.name == 'Settings'){
            IconName = 'settings';
          }
          return <Ionicons name={IconName} size={size} color={color}/>
         },
        tabBarActiveTinColor:'#007bff',
        tabBarActiveTinColor:'gray',
        tabBarStyle:{
        paddingBottom: 5,
        height:60,
       },
       })}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Profile" component={profileStack}/>
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

