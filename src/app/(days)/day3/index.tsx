import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import MarkDownDisplay from '@/components/day3/MarkDownDisplay'
import { SafeAreaView } from 'react-native-safe-area-context'



const Day2 = () => {
const description = `
# Markdown
Integrate Markdown content in **React Native**
Today's Agenda
- Introduction to React Native
`
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <Stack.Screen options={{title: 'Day 3: Markdown'}} />
      <MarkDownDisplay>
        {description}
      </MarkDownDisplay>
      <Link href="/day3/editor" asChild>
        <Button title='Go to editor' />
      
      </Link>
    </SafeAreaView>
  )
}

export default Day2