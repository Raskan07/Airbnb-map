import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons,AntDesign } from '@expo/vector-icons'; 

const PlaceCard = ({place}:any) => {
  return (
    <TouchableOpacity style={styles.container}>
     <Image 
     source={{uri:"https://wallpapercave.com/wp/wp4371959.jpg"}}
     style={styles.img}
     />
     <View style={styles.subContainer}>
        <Text style={{
            fontSize:17,
            fontWeight:"500",
            textTransform:"capitalize",
            padding:10
        }}>{place.name}</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:10,marginTop:-8,alignItems:"center"}}>
            <Text style={{color:"gray",width:"80%"}}>{place?.vicinity || null}</Text>
            <EvilIcons name="location" size={24} color="#FFF" style={{padding:5,borderRadius:60,backgroundColor:"#00bc5a",left:-5}} />
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-around",marginLeft:-5,marginTop:15,alignItems:"center"}}>
            <View style={{flexDirection:"row"}}>
            <AntDesign name="calendar" size={15} color="gray" />
            <Text style={{fontSize:12,paddingLeft:5,color:"gray"}}>15.6.2019</Text>
            </View>
            <View style={[{flexDirection:"row",padding:5,borderRadius:15},place?.opening_hours?.open_now ? {backgroundColor:"#e4feeb"} :{backgroundColor:"#fce4e5"}]}>
            <AntDesign name="clockcircleo" size={15} color={place?.opening_hours?.open_now  ?"#00bc5a" : "red"} />
            <Text style={[{fontSize:12,paddingLeft:5},place?.opening_hours?.open_now  ? {color:"#00bc5a"} :{color:"red"}]}>{
                place?.opening_hours?.open_now ? "Open" :"close"
            }</Text>
            </View>
        </View>
     </View>
    </TouchableOpacity>
  )
}

export default PlaceCard

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"row",
        overflow:"hidden",
        borderRadius:20,
        backgroundColor:"#FFF",
        elevation:5

    },
    img:{
        width:"35%",
        height:120
    },
    subContainer:{
        width:"60%",
        marginLeft:15
    }
})