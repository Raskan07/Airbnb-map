import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import MapView,{Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import { UseLocationContext } from '../Context/UseContext'

const MyMap = () => {
  const {location} =  useContext(UseLocationContext)
  console.log(location?.coords)

  const mapRegion = {
    latitude: location?.coords?.latitude || 0,
    longitude: location?.coords?.longitude || 0,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0445,
  };

    
  return (
    <MapView 
        style={{width:"100%",height:"100%"}}
        initialRegion={mapRegion}
        provider={PROVIDER_GOOGLE}
        showsMyLocationButton={true}
        showsUserLocation={true}

    >
      {
        location && (
          <Marker
          coordinate={mapRegion}
          title='Where am i'
          description='my Place'
          >
            <View style={{}}>
              <Text style={{fontWeight:"700",color:"#000",padding:5,backgroundColor:"#FFF",borderRadius:5,borderWidth:1,borderColor:"gray"}}>Home</Text>
            </View>

          </Marker>
        )
      }
    </MapView>
  )
}

export default MyMap

const styles = StyleSheet.create({})