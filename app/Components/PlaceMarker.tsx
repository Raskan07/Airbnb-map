import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'


const PlaceMarker = ({place}:any) => {
  return (
   <Marker 
   title={place.name}
   coordinate={{
    latitude:place?.geometry?.location?.lat,
    longitude:place?.geometry?.location?.lng,
  }}
   />
  )
}

export default PlaceMarker

const styles = StyleSheet.create({})