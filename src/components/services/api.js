import axios from "axios";


 
export const fetchImages = async (value, page) => {
    const API_KEY = "53ogns1iRs3fdvb5H8KogcuoxZGCDNi114N1WpVcolk";
    const baseURL = "https://api.unsplash.com/search/photos";
    const params ={
     client_id: API_KEY,
     query: value,
     page:page,
     per_page:12
    }
    const response = await axios.get(baseURL, {params});
return response.data;
}
