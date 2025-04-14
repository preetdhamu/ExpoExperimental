import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { View , Text } from 'react-native';


const TabRoute = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home', // Title for the Home tab
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About', 
          tabBarIcon:({color , size} )=>{
            return <View
            style={{
              borderColor:"red",
              backgroundColor:"green",
              height:50,
              width:50,
              borderRadius:50,
              justifyContent:"center",
              alignContent:"center"
              ,bottom:50
            }}
            >
              <FontAwesome size={18} name='info-circle' color={color}/>
            </View>
          }
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile', // Title for the Profile tab
        }}
      />
    </Tabs>
  );
};

export default TabRoute;