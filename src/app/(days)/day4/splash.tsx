import { View, Text, Button } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';

const AnimationScreen = () => {
    const animation = useRef<LottieView>(null);
  return (
    <View>
        <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 400,
          height: 500,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('@assets/lottie/netflix.json')}
      />
    </View>
  )
}

export default AnimationScreen