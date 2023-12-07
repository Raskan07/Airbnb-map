import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons,AntDesign } from '@expo/vector-icons'; 
import { useBottomSheet } from '@gorhom/bottom-sheet';
import { Link } from 'expo-router';
import MyModal from './MyModal';

const PlaceCard = ({place}:any) => {
    const date = new Date()
  return (
    <Link href={'/Components/MyModal'} asChild>
    <TouchableOpacity style={styles.container} >
        { place?.photos ? 
        
        <Image 
        source={{uri:"https://maps.googleapis.com/maps/api/place/photo"+"?maxwidth=400"+"&photo_reference="+place.photos?.[0]?.photo_reference+"&key=AIzaSyDWGpUaorhi5tjnMlrjVoGme6KSiTOMdDk"}} 
        style={styles.img}
        /> 
        
        :
     <Image 
     source={{uri:"https://wallpapercave.com/wp/wp4371959.jpg"}}
     style={styles.img}
     />  }
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
            <Text style={{fontSize:12,paddingLeft:5,color:"gray"}}>{date.toLocaleDateString()}</Text>
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
    </Link>
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
        height:"100%",
        backgroundColor:"#00bc5a"
    },
    subContainer:{
        width:"60%",
        marginLeft:15
    }
})