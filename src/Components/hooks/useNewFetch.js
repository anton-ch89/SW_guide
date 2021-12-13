import { useEffect, useState } from "react";


export const useNewFetch = () => {
    const [responseNew, setResponseNew] = useState(null);
    const [error, setError] = useState(null);
    const [urlNew, setUrlNew] = useState(``)



    useEffect(() => {
    

     const fetchData = async () => {

        try {
            const json = await fetch(urlNew);
            const res = await json.json();
            setResponseNew(res);
          } catch (err) {
            setError(err);
          }  
     };
     fetchData();

    }, [urlNew])
    return { responseNew, error, urlNew, setUrlNew };
}