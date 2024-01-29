import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    logo: {
       
        width: 60,
        height: 60, 
      },
})