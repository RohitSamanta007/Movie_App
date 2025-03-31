// funcion: fetchPopularMovies(), fetchMovieDetails()

import { useEffect, useState } from "react";

// useFetch take a function as parameter like: useFetch(fetchMovies)
const useFetch = <T>(fetchFunction: ()=> Promise<T>, autoFetch = true) =>{
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async() =>{
        try {
            setLoading(true);
            setError(null);

            const result = await fetchFunction();

            setData(result);

        } catch (error) {
            setError(error instanceof Error ? error: new Error("An Error Occurred"));
        }
        finally{
            setLoading(false)
        }
    }

    const reset = () =>{
        setData(null);
        setLoading(false);
        setError(null);
    }

    useEffect(()=>{
        if(autoFetch){
            fetchData();
        }
    }, [])

    return {data, loading, error, refetch: fetchData, reset};
}

export default useFetch;