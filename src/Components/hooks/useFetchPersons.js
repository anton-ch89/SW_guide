import { useEffect, useState } from "react";


export const useFetch = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(``)



    useEffect(() => {
    

     const fetchData = async () => {

        try {
            const json = await fetch(url);
            const res = await json.json();
            const result = await res.results;
            setResponse(result);
          } catch (err) {
            setError(err);
          }  
     };
     fetchData();

    }, [url])
    return { response, error, url, setUrl };
}