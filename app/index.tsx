import { StyleSheet, Text, View } from "react-native";
import MyMap from "./Components/MyMap";
import * as Location from 'expo-location';
import { createContext, useEffect, useState } from "react";
import { UseLocationContext } from "./Context/UseContext";


export default function Page() {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);


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

  return (
    <UseLocationContext.Provider value={{location,setLocation}}>
      <MyMap />
    </UseLocationContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
