import { View, Text, StyleSheet } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'
import React, { useCallback, useEffect, useState } from 'react'
import { AVPlaybackStatus, Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';

const MemoListItem = ({uri}: {uri: string}) => {
    const [sound, setSound] = useState<Sound>();
    const [status, setStatus] = useState<AVPlaybackStatus>();

    async function loadSound(){
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync({uri}, undefined, onPlayBackStatusUpdate);
        setSound(sound);
    }

    useEffect(() => {
        loadSound();
    }, [uri]);


    const onPlayBackStatusUpdate = useCallback(async (newStatus: AVPlaybackStatus) => {
        console.log(JSON.stringify(status, null, 2));
        setStatus(newStatus);

        if(!newStatus.isLoaded || !sound){
            return;
        }

        if(newStatus.didJustFinish){
            console.warn('should restart');
            await sound?.setStatusAsync({positionMillis: 0})
        }
    }, [sound]);

    async function playSound() {
        if(!sound){
            return
        }

        if(status?.isLoaded && status.isPlaying){
            await sound.pauseAsync();
        }else {
            await sound.replayAsync();
        }
    }

    useEffect(() => {
        return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
            }
        : undefined;
    }, [sound]);
    const isPlaying = status?.isLoaded ? status.isPlaying : false;
    const position = status?.isLoaded ? status.positionMillis : 0;
    const duration = status?.isLoaded ? status.durationMillis: 1;
    const progress = position / duration;
    return (
        <View style={styles.container}>
            <FontAwesome5 onPress={playSound} name={isPlaying ? 'pause' : 'play'} size={20} color={'gray'} />
            <View style={styles.playbackContainer}>
                <View style={styles.playbackBackground}>

                </View>
                <View style={[styles.playbackIndicator, {left: `${progress * 100}%`}]}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        gap: 15,

        // shadow
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    playbackContainer: {
        flex: 1,
        height: 50,
        justifyContent: 'center'
    },
    playbackBackground: {
        height: 3,
        backgroundColor: 'gainsboro',
        borderRadius: 5,
    },
    playbackIndicator: {
        width: 10,
        aspectRatio: 1,
        borderRadius: 10,
        backgroundColor: 'royalblue',
        position: 'absolute',
    }
})

export default MemoListItem