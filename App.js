import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./screens/homeScreen";
import Update from "./screens/updateScreen";


export default function App() {
  const Stack = createStackNavigator();
  
  return (
     <View style={styles.container}>
      <NavigationContainer>

          <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{title:"Danh SACH"}}
              />

              <Stack.Screen
                  name="Update"
                  component={Update}
                  options={{title:"CAP NHAP"}}
              />

            
          </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
