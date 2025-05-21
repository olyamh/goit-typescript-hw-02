import axios from "axios";

interface Params{
    client_id: string;
    query: string;
    page: number | null;
    per_page:number;
}
 
export const fetchImages = async <T>(value:string, page:number | null) : Promise<T> => {
    const API_KEY:string = "53ogns1iRs3fdvb5H8KogcuoxZGCDNi114N1WpVcolk";
    const baseURL:string = "https://api.unsplash.com/search/photos";
    const params: Params ={
     client_id: API_KEY,
     query: value,
     page:page,
     per_page:12
    }
    const response = await axios.get(baseURL, {params});
return response.data;
}
