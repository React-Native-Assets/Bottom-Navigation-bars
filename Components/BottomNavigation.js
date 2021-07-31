import React from 'react';
import { View ,StyleSheet, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
    //   initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
      tabBarOptions={
        {
            showLabel:false,
            style:{
                position:'absolute',
                bottom:25,
                left:25,
                right:25,
                elevation:0,
                backgroundColor:'white',
                borderRadius:15,
                height:80,
                ...styles.navigatorShadow
            }
        }
      }
    >
      <Tab.Screen
        name="Feed"
        component={Tab1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
              <View style={{alignItems:'center'}}>
                <MaterialCommunityIcons name="home" color={color} size={26} />
            <Text>Home</Text>         
        </View>
            ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Tab2}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ focused,color }) => (  
            <View style={{alignItems:'center'}}>
                <MaterialCommunityIcons name="bell" color={color} size={26} />
                <Text>Notifications</Text>         
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Tab3}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
              <View style={{alignItems:'center'}}>
                <MaterialCommunityIcons name="account" color={color} size={26} />
            <Text>Profile</Text>         
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    navigatorStyles:{
         
    },
    navigatorShadow:{
        shadowColor:'#edf7f0',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
})