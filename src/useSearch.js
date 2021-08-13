import { useEffect, useState } from "react";
import axios from "axios";
export default function useSearch(pageNumber) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(false);
  //console.log(pageNumber);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=10`
    })
      .then((res) => {
        setImages([...images, ...res.data]);
        setHasMore(res.data.length > 0);
        setLoading(false);
        //  console.log(images);
        //  console.log(res.data);
      })
      .catch((e) => {
        return setError(true);
        setLoading(false);
      });
  }, [pageNumber]);
  return { images, loading, hasMore, error };
}
