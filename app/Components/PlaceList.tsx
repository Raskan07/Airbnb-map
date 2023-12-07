import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PlaceList = ({setCategory}:any) => {
    const data = [
        {
            shopName:"store",
            id:"0",
            value:"store",
            uri:"https://img.freepik.com/premium-photo/3d-isometric-shop-building-created-with-generative-ai_660901-424.jpg"
        },
        {
            shopName:"fuel Station",
            id:"1",
            value:"gas_station",
            uri:"https://st3.depositphotos.com/15264692/32064/i/450/depositphotos_320649104-stock-photo-gas-station-canopy-render.jpg"
        },
        {
            shopName:"cafe",
            id:"2",
            value:"cafe",
            uri:"https://netrinoimages.s3.eu-west-2.amazonaws.com/2022/01/08/1066237/381588/cafe_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_3948918_o.png"
        },
        {
            shopName:"restaurant",
            id:"3",
            value:"restaurant",
            uri:"https://renderatelier.com/wp-content/uploads/2019/06/Cam_01_Final-1.jpg"
        },
        {
            shopName:"Hospital",
            id:"4",
            value:"hospital",
            uri:"https://png.pngtree.com/background/20230525/original/pngtree-3d-model-of-a-building-with-red-cars-picture-image_2732862.jpg"
        },
        {
            shopName:"Police Station",
            id:"5",
            value:"police",
            uri:"https://img.pikbest.com/ai/illus_our/20230428/b539e42f0536edd98b91997ad3766f6c.jpg!w700wp"
        },
        {
            shopName:"Mosque",
            id:"6",
            value:"mosque",
            uri:"https://static.vecteezy.com/system/resources/previews/022/874/955/large_2x/illustration-of-amazing-architecture-design-of-muslim-mosque-ramadan-kareem-islamic-architecture-background-ramadan-kareem-islamic-mosque-ramdan-ramzan-eid-culture-arab-generate-ai-free-photo.jpg"
        },
        {
            shopName:"Pharmacy",
            id:"7",
            value:"pharmacy",
            uri:"https://us.123rf.com/450wm/pramotephotostock/pramotephotostock2309/pramotephotostock230900860/212792806-pharmacy-interior-medicine-cabinet-and-store-medicine-and-pharmacy-drugstore-for-blurry-background.jpg?ver=6"
        },
        {
            shopName:"gym",
            id:"8",
            value:"gym",
            uri:"https://artimg.gympik.com/articles/wp-content/uploads/2019/10/Featured1.jpg"
        },
        {
            shopName:"bank",
            id:"9",
            value:"bank",
            uri:"https://immigrantinvest.com/wp-content/uploads/2022/03/best-banks-2021-40543452.jpg"
        },
        {
            shopName:"Atm",
            id:"10",
            value:"atm",
            uri:"https://www.eliteias.in/wp-content/uploads/2022/07/atm-full-form.webp"
        },
        {
            shopName:"School",
            id:"11",
            value:"school",
            uri:"https://www.greatschools.org/gk/wp-content/uploads/2014/03/The-school-visit-what-to-look-for-what-to-ask-1-750x325.jpg"
        },
        {
            shopName:"Bus Station",
            id:"12",
            value:"bus_station",
            uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ecnAgDKrVf7ofWMCThYZyxxJWDrPh1yxjg&usqp=CAU"
        },
        {
            shopName:"Salon",
            id:"13",
            value:"hair_care",
            uri:"https://images.squarespace-cdn.com/content/v1/622562a91826ae0faf2e21fb/f043c914-21e8-40be-b745-790c99984dbc/2-SalonCapri-HERO-Newton-Boston-Dedham-NewburyStreet-hair-salon.jpg"
        },
        {
            shopName:"Toursit Place",
            id:"14",
            value:"tourist_attraction",
            uri:"https://www.trawell.in/admin/images/upload/111543779Sigiriya_Main1.jpg"
        }, 
        {
            shopName:"Cloth store",
            id:"15",
            value:"clothing_store",
            uri:"https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg"
        },

    ]

    const onPlaceDetails = (item:any) => {
        try {
            console.log(item.value)
            setCategory(item.value)
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <View>
        <FlatList 
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item,index}) => (
            <TouchableOpacity 
            onPress={() => onPlaceDetails(item)}
            style={{margin:5}}>
                <Text style={{
                    padding:10,
                    borderRadius:15,
                    textAlign:"center",
                    backgroundColor:"#8eade6",
                    fontSize:16,
                    fontWeight:"600",
                    elevation:1.7,
                    textTransform:"capitalize",
                    borderWidth:1,
                    borderColor:"#FFF",
                    color:"#FFF",
                }}>{item.shopName}</Text>
            </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default PlaceList

const styles = StyleSheet.create({})