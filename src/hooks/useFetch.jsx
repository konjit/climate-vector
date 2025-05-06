import { useEffect, useState, useCallback } from "react";

/** This a custom hook that fetches data given an api end point.
 *
 *  Returns an object with fields {data, error, loading}
 *   data: stores the fetched data(initially null) and it is up to the caller of the useFetch to give meaning to it.
 *   error: stores error messages(initial null). It can happen due to network error or bad request.
 *   loading: stores the progress of fetching data initially set true.
 */
const useFetch = (endPoint) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!endPoint) return;
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(endPoint, { signal: controller.signal });
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();

        setData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [endPoint]);

  return { data, error, loading };
};

export default useFetch;
