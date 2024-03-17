import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import Markdown from 'react-native-markdown-display';
import MarkDownDisplay from '@/components/day3/MarkDownDisplay';
const template = `
# Markdown Editor

Hello **world**!
`;



const EditorScreen = () => {
    const [content, setContent] = useState(template);
    const [tab, setTab] = useState('edit');
  return (
    <View style={styles.page}>
        <View style={styles.tabsContainer}>
            <Pressable onPress={()=>setTab('edit')} style={[styles.tab, {backgroundColor: tab=== 'edit' ? 'blue' : 'white', }]}>
                <Text style={[styles.tabText, {color: tab === 'edit' ? 'white' : 'black'}]}>Edit</Text>
            </Pressable>
            <Pressable onPress={()=>setTab('preview')} style={[styles.tab, {backgroundColor: tab === 'preview' ? 'blue' : 'white'}]}>
                <Text style={[styles.tabText, {color: tab=== 'preview' ? 'white' : 'black'}]}>Preview</Text>
            </Pressable>
        </View>
        {
            tab === 'edit' ? 
            <TextInput value={content} multiline numberOfLines={50} style={styles.input} onChangeText={setContent} />
            : (
                <MarkDownDisplay>
                    {content}
                </MarkDownDisplay>
            )
        }
      
    </View>
  )
}


const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10
    },
    input: {
        backgroundColor: 'whitesmoke',
        flex: 1,
        padding: 10,
        paddingTop: 20,
        borderRadius: 10,
        fontSize: 16,
    },
    tabsContainer: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 10,
    }, 
    tab: {
        flex: 1,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center'
    },
    tabText: {
        fontFamily: 'InterBold',

    }

})

export default EditorScreen