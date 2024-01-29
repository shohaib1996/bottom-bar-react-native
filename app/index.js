import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const startPage = () => {
  return (
    <Redirect href="/home"/>
  )
}

export default startPage

const styles = StyleSheet.create({})