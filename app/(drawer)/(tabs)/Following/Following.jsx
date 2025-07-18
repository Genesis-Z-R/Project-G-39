import { View, Text } from 'react-native'
import React from 'react'
import Header from 'app/screenComponents/Header'
import LoginScreen from "app/(AuthScreens)/LoginScreen"
const Following = () => {
  return (
    <View style = {{flex:1}}>
      <Header title = 'Following'/>
       <LoginScreen/>

    </View>
  )
}

export default Following
