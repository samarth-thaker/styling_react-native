import { ScrollView, ScrollViewComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true}>
        <View style = {[styles.card,styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card,styles.elevatedCard]}>
            <Text>to</Text>
        </View>
        <View style = {[styles.card,styles.elevatedCard]}>
            <Text>scroll</Text>
        </View>
        <View style = {[styles.card,styles.elevatedCard]}>
            <Text>left</Text>
        </View>
        <View style = {[styles.card,styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card,styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card,styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card,styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card,styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card,styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>

      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight:'bold',
        
        justifyContent:'center',
        paddingHorizontal:8,
    },
    container:{
        padding:8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        marginHorizontal:3
    },
    elevatedCard:{
        backgroundColor:'#DAE0E2'

    }
})