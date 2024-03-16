import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
type DayListItem = {
    day: number;
}

const DayListItem = ({day}: DayListItem) => {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
          <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
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
      fontSize: 70,
      fontFamily: 'Amatic'
    },
  });

export default DayListItem