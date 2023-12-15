import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';

const LocationError = () => {
    const animation = useRef(null);
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <LottieView
        autoPlay
        ref={animation}
        style={{
          width: "100%",
          height: 300,
        }}
        source={require("../../assets/Animation/rocketLoading.json")}
      />
      <Text style={{padding:10,fontSize:17,color:"#00000090"}}>Please Enable Location</Text>
      <Text style={{color:"gray"}}>Check Your Internet Connection</Text>
    </View>
  )
}

export default LocationError

const styles = StyleSheet.create({})