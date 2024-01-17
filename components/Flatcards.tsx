import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View   style = {[styles.card, styles.cardone]}>
            <Text>Red</Text>
        </View>
        <View   style = {[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View   style = {[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>
        <View   style = {[styles.card, styles.cardone]}>
            <Text>Red</Text>
        </View>
       
        
      </View>
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
        flex:1,
        flexDirection:'row',
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'20%',
        height:100,
        borderRadius:8,
        margin:8
    },
    cardone:{
        backgroundColor:'#BA2F16',
    },
    cardTwo:{
        backgroundColor:'#6ab04c',
    },
    cardThree:{
        backgroundColor:'#74B9FF'
    }
    
})