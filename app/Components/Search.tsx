import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { router } from 'expo-router'



const Search = () => {
  const [searchLocation,setSearchLocation] = useState<any>()
  console.log(searchLocation)


  const LocationLAT = (details:any) => {
    try {
      setSearchLocation(details)

      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View>
     <GooglePlacesAutocomplete 
            placeholder='Search'
            query={{
                key:"AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc",
                language: 'en',
              }}
              fetchDetails={true}
              enablePoweredByContainer={false}
              keepResultsAfterBlur={true}
              onPress={(data, details = null) => {
                LocationLAT(details)
              }}
              styles={{
                  container: {
                      flex: 0,
                      borderRadius:15,
                      padding:15
                    },
                    textInputContainer: {
                      width: '100%',
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius:15,
                      elevation:0.7
                      
                    },
                    
                    textInput: {
                      marginLeft: 0,
                      marginRight: 0,
                      height: 38,
                      color: '#5d5d5d',
                      fontSize: 16,
                      borderRadius:15
                    },
                    predefinedPlacesDescription: {
                      color: '#1faadb',
                    },
                    listView: {
                        backgroundColor: 'red',
                        borderRadius: 15,
                        elevation: 2,
                      },
              }}


        />
        
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})