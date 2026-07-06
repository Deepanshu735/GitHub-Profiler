import { useEffect, useState } from "react";

const useResourceList = (fetcher, username) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchItems = async () => {
      try {
        const data = await fetcher(username);
        if (isMounted) {
          setItems(data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchItems();

    return () => {
      isMounted = false;
    };
  }, [fetcher, username]);

  return { items, loading, error };
};

export default useResourceList;
