import { useCallback, useState } from "react";

export const useHttps = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request =  useCallback( async ()=>{
        setError(false);
        setLoading(true);


        try{
            const response = await fetch(`https://api.punkapi.com/v2/beers?page=1`)


            if(!response.ok) {
                throw new Error (`Could not fetch , status: ${response.status}`)
            }

            const data = await response.json();

            setLoading(false);
            console.log(data)
            return(data);
        }
        catch(e){
            setLoading(false);
            setError(true);
            console.log(e)
            throw e;
        }
    }, [])

    return {loading, error, request}
}   