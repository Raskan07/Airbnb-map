import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons'; 

const Header = () => {
  return (
    <Link href={"/Components/Search"}  asChild>
    <TouchableOpacity 
    style={styles.container}>
        {/* <GooglePlacesAutocomplete 
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
         */}
         <AntDesign name="search1" size={24} color="#00000050" style={{paddingLeft:20,paddingRight:10}} />
         <Text style={{marginRight:120,fontSize:16,color:"#00000050",fontWeight:"400"}}>Search</Text>
    </TouchableOpacity>
    </Link>
  )
}

export default Header

const styles = StyleSheet.create({
    container :{
        width:"100%",
        borderRadius:15,
        alignItems:"center",
        backgroundColor:"#FFF",
        height:38,
        flexDirection:"row"
    }
    
})