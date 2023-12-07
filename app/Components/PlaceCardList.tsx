import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlaceCard from './PlaceCard'

const PlaceCardList = ({place}:any) => {
  return (
    <View style={styles.container}>
      {/* <FlatList 
      data={place}
      style={styles.container}
      horizontal
      keyExtractor={(item) => item.place_id.toString()}
      renderItem={({item,index}) => (
         <PlaceCard/>
      )}
      /> */}

      <PlaceCard  place={place}/>


    </View>
  )
}

export default PlaceCardList

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        zIndex:10,
        top:130,
        width:"95%",
        left:10
    }
})