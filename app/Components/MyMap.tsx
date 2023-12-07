import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import MapView,{Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import { UseLocationContext } from '../Context/UseContext'
import PlaceMarker from './PlaceMarker'
import PlaceCardList from './PlaceCardList'

const MyMap = ({placeList}:any) => {
  const {location} =  useContext(UseLocationContext)
  console.log(location)

  const mapRegion = {
    latitude: location?.coords?.latitude ||  6.4705866,
    longitude: location?.coords?.longitude || 79.9901606,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0445,
  };

  const [choosedPlace,setChoosedPlace] = useState([])

  console.log("ch",choosedPlace)

  const [isSlected,setIsSelected] = useState<any>(null)

  useEffect(()=>{
    if(choosedPlace.length === 0){
      setIsSelected(false)
    }
    return ;
  },[choosedPlace])

    
  return (
    <View>
    <MapView 
        style={{width:"100%",height:"100%"}}
        initialRegion={mapRegion}
        provider={PROVIDER_GOOGLE}
        showsMyLocationButton={true}
        showsUserLocation={true}
        mapType="satellite"

    >
      {
        location && (
          <Marker
          coordinate={mapRegion}
          title='Where am i'
          description='my Place'
          pinColor='#4165f4'
          
          >
            <View style={{}}>
              <Text style={{fontWeight:"700",color:"#000",padding:5,backgroundColor:"#FFF",borderRadius:5,borderWidth:1,borderColor:"gray"}}>Home</Text>
            </View>

          </Marker>
        )
      }

      {
        location && (
          placeList.map((item:any,index:any) => (
            <PlaceMarker place={item} key={index} setPlace={(value:any) => setChoosedPlace(value)}  />
          ))
        )
      }
    </MapView>
    {
      choosedPlace.length === 0 ? null : <PlaceCardList place={choosedPlace} />
    }

        
    </View>
  )
}

export default MyMap

const styles = StyleSheet.create({
  contentContainer:{

  }
})