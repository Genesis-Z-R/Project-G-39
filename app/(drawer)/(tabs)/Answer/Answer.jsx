import { View, Text } from 'react-native'
import React from 'react'
import Header from 'app/screenComponents/Header'


const Answer = () => {

  return (
    <View className='bg-red-500'>
      <Header title='Answer'/>
      <Text className='text-red-500'>Answer</Text>
    </View>
  )
}

export default Answer