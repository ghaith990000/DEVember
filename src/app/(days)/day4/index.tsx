import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import MarkDownDisplay from '@/components/day3/MarkDownDisplay'
import { SafeAreaView } from 'react-native-safe-area-context'



const Day4 = () => {
const description = `
# Animated Splash screen
`
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <Stack.Screen options={{title: 'Day 3: Markdown'}} />
      <MarkDownDisplay>
        {description}
      </MarkDownDisplay>
      <Link href="/day4/animation" asChild>
        <Button title='Go to Animation' />
      
      </Link>
      <Link href="/day4/splash" asChild>
        <Button title='Go to Splash' />
      
      </Link>
    </SafeAreaView>
  )
}

export default Day4;