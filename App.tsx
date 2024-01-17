import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        
     
      <Flatcards/>
      <ElevatedCards/>
      <FancyCard/>
      <ActionCards/>
      <ContactList/>
      </ScrollView>
      
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})