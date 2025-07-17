import { View, Text } from 'react-native'
import React from 'react'
import Header from 'app/screenComponents/Header'
import { useNavigation } from 'expo-router'

const Notifications = () => {
  const navigation = useNavigation()
  return (
    <View>  
      <Header title = 'Notifications' navigation={navigation}/>
      <Text>Notifications</Text>
      
    </View>
  )
}

export default Notifications