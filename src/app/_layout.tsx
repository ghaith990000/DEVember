import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { 
    Inter_900Black,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_400Regular,
    useFonts } from '@expo-google-fonts/inter';
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
 } from '@expo-google-fonts/amatic-sc'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout(){
    const [fontLoaded, fontError] = useFonts({
        Inter: Inter_400Regular,
        InterBold: Inter_700Bold,
        InterSemi: Inter_600SemiBold,
        InterBlack: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold
      });
    
      useEffect(() => {
        if(fontLoaded || fontError){
          SplashScreen.hideAsync();
        }
      }, [fontLoaded, fontError]);
    
      if(!fontLoaded && !fontError){
        return null;
      }
    
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Stack screenOptions={{
            }}>
                <Stack.Screen name='index' options={{ title: 'Devember'}} />
            </Stack>
        </GestureHandlerRootView>
    )
}