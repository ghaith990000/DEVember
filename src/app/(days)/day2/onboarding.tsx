import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react';
import { Stack, router } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

const onboardingSteps = [
    {
        icon: "snowflake",
        title: "Welcome #DEVemeber",
        description: "Daily React Native tutorials during December",
    },
    {
        icon: "people-arrows",
        title: "Learn and grow together",
        description: "Learn by building 24 projects with React Native and Expo",
    },
    {
        icon: "people-arrows",
        title: "Education for Children",
        description: "Contribute to the fundraiser \"Education for Children to help Save the Children in their effort of providing education to every child",
    },
]

const OnboardingScreen = () => {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if(isLastScreen){
            endOnboarding();
        }else{
            setScreenIndex(screenIndex + 1);
        }
    }

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    }
  return (
    <SafeAreaView style={styles.page}>
        <Stack.Screen options={{headerShown: false}} />
        <View style={styles.pageContent}>
            <View style={styles.stepIndicatorContainer}>
                {onboardingSteps.map((step, index) => (
                    <View style={[styles.stepIndicator, {backgroundColor: index === screenIndex ? '#CEF202' : 'gray'}]} />
                ))}
            </View>
            <FontAwesome5 style={styles.image} name={data.icon} size={150} color="#CEF202" />
            <View style={styles.footer}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>
                    {data.description}
                </Text>
                <View style={styles.buttonsRow}>
                    <Text onPress={endOnboarding} style={styles.buttonText}>Skip</Text>
                    <Pressable onPress={onContinue} style={styles.button}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page: {
        // alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#15141A',
        padding: 20,

    },
    pageContent: {
        padding: 20,
        flex: 1,
    },
    image: {
        alignSelf: 'center',
        margin: 20,
    },
    title: {
        color: "#FDFDFD",
        fontSize: 50,
        fontWeight: '500',
        fontFamily: 'InterBlack',
        letterSpacing: 0.7,
        marginVertical: 20,
    },
    description: {
        color: 'gray',
        fontSize: 20,
        lineHeight: 28,
        fontFamily: 'Inter'
    },
    footer: {
        marginTop: 'auto'
    },
    buttonsRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    
    },
    button: {
        backgroundColor: '#302E38',
        // padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        flex: 1
    },
    buttonText: {
        color: '#FDFDFD',
        fontFamily: 'InterSemi',
        fontSize: 16,
        padding: 15,
        paddingHorizontal: 25,
    },
    stepIndicatorContainer: {
        flexDirection: 'row',
        gap: 7
    },
    stepIndicator: {
        flex: 1,
        height: 5,
        backgroundColor: 'gray',
        borderRadius: 10
    }
})

export default OnboardingScreen;