import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts=[
        {
            uid:1,
            name:'Samart Thaker',
            status:'Code Coffee',
            img:'https://www.pexels.com/photo/man-in-white-shirt-with-book-in-hands-18489099/'
        },
        {
            uid:2,
            name:'Dhairya Dedania',
            status:"What's up buddy?",
            img:"https://www.pexels.com/photo/boat-on-a-water-canal-8127035/"
        },
        {
            uid:3,
            name:'Yash Nayak',
            status:'Love DSA',
            img:"https://www.pexels.com/photo/boat-on-a-water-canal-8127035/"
        },
        {
            uid:4,
            name:'Divya Patel',
            status:'I want to fly!',
            img:"https://www.pexels.com/photo/person-in-white-clothes-wearing-a-hat-13250368/"
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={true}
      >
        {contacts.map(({uid, name, status,img}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                   uri:img
                }}
                style={styles.userImage}
                />
               <View>
                <Text style={styles.userName}>{name}</Text>
                
                <Text style = {styles.userStatus}>{status}</Text>
                </View>
                
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{},
    container:{
        paddingHorizontal:16,
        marginBottom:4,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#8D3DAF',
        borderRadius:14, 
        marginBottom:3,
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:30,
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#FFFFFF'
    },
    userStatus:{
        fontSize:12,
        color:'#FFFFFF'
    },  
})