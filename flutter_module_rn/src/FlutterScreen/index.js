import { NativeModules, Platform, Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const { FlutterModuleRn } = NativeModules;

const FlutterScreen = () => {
  useEffect(() => {
    FlutterModuleRn.startFlutterActivity('', 0, (text) => {
      //alert(text);Hello1 from RN wrapper for Flutter {Platform.OS}!
    });
  }, [])

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
  return (
    <View style={[styles.container, styles.horizontal]}>
     <ActivityIndicator size="large" />
    </View>
  )
}

export default FlutterScreen;
