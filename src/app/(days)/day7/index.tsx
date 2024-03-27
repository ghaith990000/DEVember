import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import MarkDownDisplay from '@/components/day3/MarkDownDisplay'
import { SafeAreaView } from 'react-native-safe-area-context'



const Day7 = () => {
const description = `
# Voice Memos
Work with the Microphone and Audio playback
`
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <Stack.Screen options={{title: 'Day 7: Voice Memos'}} />
      <MarkDownDisplay>
        {description}
      </MarkDownDisplay>
      <Link href="/day7/memos" asChild>
        <Button title='Go to Memos' />
      
      </Link>
    </SafeAreaView>
  )
}

export default Day7;