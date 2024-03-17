import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {PropsWithChildren} from 'react'
import Markdown from 'react-native-markdown-display';


const MarkDownDisplay = ({children}: PropsWithChildren) => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior='automatic'>
      <Markdown style={markDownStyles}>{children}</Markdown>
    </ScrollView>
  )
}

const markDownStyles = StyleSheet.create({
    heading1: {
        color: 'red',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'InterBlack',
        marginBottom: 10,
        marginTop: 10,
        lineHeight: 40,
    },
    heading2: {
        fontFamily: 'InterBold',
        color: 'blue',
        marginBottom: 10,
        marginTop: 10
    },
    body: {
        fontSize: 16,
        fontFamily: 'Inter',
        color: 'green'
    }
})

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10
    },
})

export default MarkDownDisplay