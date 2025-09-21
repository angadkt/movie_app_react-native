import { View, Text } from 'react-native'
import React from 'react'


interface MovieCardProps {
    title?: string;
    id?:number | string;
    
}

const MovieCard = ({title , id}: MovieCardProps) => {
  return (
    <View>
      <Text className='text-sm text-white'>{title}</Text>
    </View>
  )
}

export default MovieCard