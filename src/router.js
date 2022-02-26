import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './pages/home';
import detail from './pages/detail';

const stack = createStackNavigator();

function router(){

    return(

       <NavigationContainer>

           <Stack.Navigator>
               <Stack.Screen
                   nome="home"
                   component={home}
                   option={{ headerShown: false}}
                   />
                   <Stack.Screen
                   nome="detail"
                   component={detail}
                   
                   />
            
           </Stack.Navigator>
       </NavigationContainer>

    )
}