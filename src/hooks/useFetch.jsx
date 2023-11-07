import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [ispending, setIspending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Could not load data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError("");
          setIspending(false);
        })
        .catch((error) => {
          console.log(error.message);
          setError(
            "An error occurred while fetching data. Please try again later."
          );
        });
    }, 500);
}, [url]);

return { data, ispending, error };
};

export default useFetch;
