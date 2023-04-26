import axios from "axios";
import React from "react";
import { useEffect } from "react";
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API = "?api_key=01a54b95950c537418879c9806285052";

function GetData(url,setData) {
    useEffect(()=>{
        axios(url).then((res) => {
            setData(res.data);
          });
    },[])
}

export default GetData;
