import { useEffect, useState } from "react";
import { getUser } from "../api/githubService";

const useFetchUser = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      try {
        const data = await getUser(username);
        if (isMounted) {
          setUser(data);
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

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { user, loading, error };
};

export default useFetchUser;
