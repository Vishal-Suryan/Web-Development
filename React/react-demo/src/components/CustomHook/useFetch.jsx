import { useEffect } from "react";
import { useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data];
}

export default useFetch;
