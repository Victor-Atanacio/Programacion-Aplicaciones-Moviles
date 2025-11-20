import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from "./screens/Settings";

const Tab = createBottomTabNavigator();

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
        <Tab.Screen name="Profile" component={Profile}/>
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

