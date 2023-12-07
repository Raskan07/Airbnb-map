import axios from "axios"

const BASE_URL = "https://maps.googleapis.com/maps/api/place"
const API_KEY  = "AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc"

const nearbyPlace = (latitude:Number,longitude:Number,type:any) => 
    axios.get(
        `${BASE_URL}/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=${type}&key=${API_KEY}`
    )


export default {
    nearbyPlace
}