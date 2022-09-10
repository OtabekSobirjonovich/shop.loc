import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => setData(data));
    setIsLoading(false);

    return () => abortController.abort();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
