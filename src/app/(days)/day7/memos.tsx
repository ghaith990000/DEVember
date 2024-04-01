import { useState } from 'react';
import { View, StyleSheet, Button, FlatList, Text, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { Recording } from 'expo-av/build/Audio';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import MemoListItem from '@/components/day7/MemoListItem';

export default function MemosScreen() {
  const [recording, setRecording] = useState<Recording>();
  const [memos, setMemos] = useState<String[]>([]);
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  async function startRecording() {
    try {
      if (permissionResponse?.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');

      recording.setOnRecordingStatusUpdate((status) => {
        console.log(status.metering);
      })
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    if(!recording){
        return;
    }
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync(
      {
        allowsRecordingIOS: false,
      }
    );
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);

    if(uri){
        setMemos((existingMemos) => ([uri, ...existingMemos]))
    }
  }

  const animatedRedCircle = useAnimatedStyle(() => ({
    width: withTiming(recording ? '60%': '100%'),
    borderRadius: withTiming(recording ? 5 : 35)
  }))
  return (
    <View style={styles.container}>
        <FlatList data={memos} renderItem={({item}) => <MemoListItem uri={item} />}  />
        <View style={styles.footer}>
          <Pressable style={styles.recordButton}
              onPress={recording ? stopRecording : startRecording}
          >
              <Animated.View style={[styles.redCircle, animatedRedCircle]}></Animated.View>
          </Pressable>
        </View>
      {/* <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  footer: {
    backgroundColor: 'white',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  recordButton: {
    width: 60,
    height: 60,
    borderRadius: 60,

    borderWidth: 2,
    borderColor: 'gray',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  redCircle: {
    backgroundColor: 'orangered',
    aspectRatio: 1,
    borderRadius: 30,

  },
  recordWave: {
    backgroundColor: '#FF000055', 
  }
});
