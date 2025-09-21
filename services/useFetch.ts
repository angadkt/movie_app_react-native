//this is a custom hook
// this is created to fetch data of movies , it is a generic function

import { useEffect, useState } from "react";

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }finally {
        setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  }

  useEffect(()=>{
    if(autoFetch){
        fetchData();
    }
  }, [])


  return {data , loading, error, refetch: fetchData, reset}
};


export default useFetch;