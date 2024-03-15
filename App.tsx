import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2} 
        data={days}
        renderItem={({item}) => (
          <View style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
      {/* {days.map((day, index) => (
        <View style={styles.box}>
          <Text key={index} style={styles.text}>{day}</Text>
        </View>
      ))} */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  content: {
    gap: 10,
    padding: 10
  },

  column: {
    gap: 10
  },

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
