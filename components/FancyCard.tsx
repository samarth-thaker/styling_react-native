import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{

                        uri: '"C:\Users\Samarth\OneDrive\Desktop\download.jpeg"'
                    }}
                    style={styles.cardIMage}
                />
                <View >
                    <Text style={styles.cardTitle}>Hawa Mahal, Jaipur</Text>
                    <Text style={styles.cardFooter}numberOfLines={3}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.

                        The structure was built in 1799 by the Maharaja Sawai Pratap Singh, grandson of Maharaja Sawai Jai Singh, 
                        the founder of the city of Jhunjhunu in the state of Rajasthan. 
                        He was so inspired by the unique structure of Khetri Mahal that he built this grand and historical palace.</Text>
                </View>
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
    card: {
        width:360,
        height:350,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    cardElevated: {
        backgroundColor:'#FFFFFF',
        elevation:3,
    },
    cardIMage: {
        height: 180,
        marginBottom:5,
    },
    cardTitle:{
        fontWeight:'bold',
        color:'#000000'
    },
    cardLabel:{
        color:"#000000",
    },
    cardDescription:{
        color:'#000000',
        
    },
    cardFooter:{
        color:'#000000'
    }
})