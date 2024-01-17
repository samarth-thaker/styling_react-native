import { StyleSheet, Text, View, Linking, Image, Touchable, 
    TouchableOpacity, Button, Alert } from 'react-native'
import React from 'react'

export default function () {
    function openWebsite(websitelink: string) {
        Linking.openURL(websitelink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Action Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in JS21?
                    </Text>
                   
                </View>
                <View style={styles.headingContainer}>
                <Text style={styles.textItalic}>
                        What's new in JS21?
                    </Text>
                </View>
                <View style={styles.headingContainer}>
                    <Text style={styles.textStyle}>
                        What's new in JS21?
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://blog.learncodeonline.in/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1613294983676%2F841x71jGr.png%3FwX3D1606%26hX3D840%26fit%3Dcrop%26crop%30entropy%26auto%3Dcompress%2Cformat%26foxmat%3Dwebp&w=3840&q=75',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, enim.</Text>
                </View>
                <View>
                    
                </View>
            </View>
            <View style={styles.footerContainer}>
            <TouchableOpacity  onPress={()=>openWebsite('https://www.google.com/')}
                    >
                        <Text style={styles.footerContent} >Read More</Text>
               
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>openWebsite('https://www.instagram.com/samarth.thaker07')}
                    >
                        <Text style={styles.footerContent}>Follow for more</Text>
               
            </TouchableOpacity>
           {/*  <Button
                
                title='Read more'
                onPress={() => Alert.alert('Simple Button pressed')}
                
            />
             <Button
                
                title='Follow'
                onPress={() => Alert.alert('Simple Button pressed')}
                
            /> */}


            </View>
           


        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',

        justifyContent: 'center',
        paddingHorizontal: 8,
    },
    card: {},
    elevatedCard: {
        backgroundColor:'#E36414',
        elevation:1,

    },
    headingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 40
    },
    headerText: {
        fontWeight: 'bold',
        color:'#10A881'
    },
    textStyle:{
        textDecorationLine:'underline',
        justifyContent:'center',
        alignItems:"center"

    },
    textItalic:{
        fontStyle:'italic',
        justifyContent:'center',
        alignItems:'center'
    },
    cardImage: {
        height: 100,
    },
    bodyContainer: {},
    footerContent:{
        fontSize:15,
        color:'#000000',
        backgroundColor:'#2475B0',
        padding:8,
    },
    footerContainer:{
        padding:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    }
})
