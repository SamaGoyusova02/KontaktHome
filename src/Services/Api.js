import axios from "axios"
const BaseUrl = "https://kontakt-home-data.vercel.app/"
async function getData() {
    const response = await axios.get(`${BaseUrl}api/Products`)
    return response.data 
}
async function getCategory() {
    const response = await axios.get(`${BaseUrl}api/Category`)
    return response.data 
}
async function getAddress() {
    const response = await axios.get(`${BaseUrl}api/StoresAddress`)
    return response.data 
}
export {getData , getCategory , getAddress}


