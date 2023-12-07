import { StyleSheet, Text, View } from "react-native";
import MyMap from "./Components/MyMap";
import * as Location from 'expo-location';
import { createContext, useEffect, useState } from "react";
import { UseLocationContext } from "./Context/UseContext";
import Header from "./Components/Header";
import PlaceList from "./Components/PlaceList";
import GlobalApi from "./Server/GlobalApi";


export default function Page() {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const [placeList,setPlaceList] = useState<any>([])



  const latitude = location?.coords?.latitude;
  const longitude = location?.coords?.longitude;

  



  const NerabyPlace = (type:any) => {
    try {
      GlobalApi.nearbyPlace(latitude,longitude,type).then(res => {
        setPlaceList(res.data.results)
      })
      
    } catch (error) {
     console.log(error) 
    }
  }




  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);


  useEffect(() => {
    NerabyPlace("restaurant")
  },[location])

  return (
    <UseLocationContext.Provider value={{location,setLocation}}>
      <View style={styles.container}>
      <View style={{position:"absolute",zIndex:10,top:13,width:"80%",left:15}}>
          <Header />
      </View>
      <View style={{position:"absolute",zIndex:10,top:70,width:"100%",left:15}}>
        <PlaceList setCategory={(value:any) => NerabyPlace(value)} />
      </View>
       <MyMap placeList={placeList} />
      </View>
    </UseLocationContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{}  
  
});
