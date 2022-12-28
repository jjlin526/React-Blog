import { useState, useEffect } from "react";

// custom hook to fetch data
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    // Simulate fetch time
    setTimeout(() => {
      // GET request which returns a promise
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    // cleanup function that is run when the component is unmounted (cancel fetch)
    return () => abortCont.abort();

    // add dependency array, fetch only occurs when url changes and on load
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
