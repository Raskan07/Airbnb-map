import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Header = () => {
  return (
    <View style={styles.container}>
        <GooglePlacesAutocomplete 
            placeholder='Search'
            query={{
                key:"AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc",
                language: 'en',
              }}
              fetchDetails={true}
              enablePoweredByContainer={false}
              keepResultsAfterBlur={true}
              styles={{
                  container: {
                      flex: 0,
                      borderRadius:15
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

export default Header

const styles = StyleSheet.create({
    container :{
        width:"100%",
        borderRadius:5,
        alignItems:"center",
    }
    
})