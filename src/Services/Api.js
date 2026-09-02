import axios from "axios"
async function getData() {
    const response = await axios.get('http://localhost:3000/api/Products')
    return response.data 
}
async function getCategory() {
    const response = await axios.get('http://localhost:3000/api/Category')
    return response.data 
}
async function getAddress() {
    const response = await axios.get('http://localhost:3000/api/StoresAddress')
    return response.data 
}
export {getData , getCategory , getAddress}


