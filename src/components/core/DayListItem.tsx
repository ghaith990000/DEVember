import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
const DayListItem = () => {
  return (
    <View style={styles.box}>
        <Text style={styles.text}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({  
    box: {
      backgroundColor: '#F9EDE3',
      // width: 100,
      // height: 100,
      flex: 1,
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#9b4521',
      borderRadius: 20
    },
    text: {
      color: '#9b4521',
      fontSize: 70
    },
  });

export default DayListItem