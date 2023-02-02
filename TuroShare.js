import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'


const TuroShare = () => (
<ScrollView style={styles.turo_share} showsVerticalScrollIndicator={false}>
<Image
    style={styles.background_image}
    source={{uri: item.background_image}}
    />
<Image
    style={styles.box_icon}
    source={{uri: item.box_icon}}
   />
<Text style={styles.give_amount}>{item.give_amount}</Text>
<Text style={styles.about_refer}>{item.about_refer}</Text>
<Image
    style={styles.facebook_icon}
    source={{uri: item.facebook_icon}}
   />
<Image
    style={styles.twitter_icon}
    source={{uri: item.twitter_icon}}
   />
<Image
    style={styles.whatsapp_icon}
    source={{uri: item.whatsapp_icon}}
   />
<Image
    style={styles.menu_icon}
    source={{uri: item.menu_icon}}
   />
<Text style={styles.invite_link}>{item.invite_link}</Text>
<Text style={styles.credit_earned}>{item.credit_earned}</Text>
</ScrollView>
)

export default TuroShare;

const styles = StyleSheet.create({
background_image: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
box_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
give_amount: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
about_refer: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
facebook_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
twitter_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
whatsapp_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
menu_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
invite_link: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
credit_earned: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  }
});