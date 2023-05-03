import axios from "axios";
import { useEffect, useMemo } from "react";
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API = "/videos?api_key=01a54b95950c537418879c9806285052&language=en-US";

function GetData(url, setData) {
  useEffect(() => {
    axios(url).then((res) => {
      setData(res.data);
    });
  }, [url]);
}

export function GetMovie(id,setData) {
  useMemo(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=01a54b95950c537418879c9806285052&language=en-US`
    ).then(res => setData(res.data));
  }, [id]);
}

export function SearchData(query,setData){
    useMemo(()=>{
axios(`https://api.themoviedb.org/3/search/movie?api_key=01a54b95950c537418879c9806285052&language=en-US&query=${query}&page=1&include_adult=false`).then(res=>setData(res.data))
    },[query])
}

export function GetMovieTrailer(id) {
  useEffect(() => {
    axios(BASE_URL + id + API).then((res) => {
      return "https://www.youtube.com/watch?v=" + res.data.results[0].key;
    });
  }, [id]);
}

export default GetData;
