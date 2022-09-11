import { useState, useEffect } from "react";
import { fetchData } from "../services/fetchData";

export const useFetch = ( category: string ) => {
  
    const [respData, setRespData] = useState([]);

    const getInformation = async() => {
        const newInfo:any = await fetchData(category);
        setRespData(newInfo);
    }

    useEffect(() => {
        getInformation();
    }, [])


    return {
        respData
    }
}