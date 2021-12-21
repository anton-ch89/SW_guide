import { useEffect, useState } from "react";


export const useFetch = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const path = '/swapi.json'



    useEffect(() => {
    

     const fetchData = async () => {

        try {
            const json = await fetch(path);
            const res = await json.json();
            const result = await res;
            setResponse(result);
          } catch (err) {
            setError(err);
          }  
     };
     fetchData();

    }, [path])
    return { response, error};
}