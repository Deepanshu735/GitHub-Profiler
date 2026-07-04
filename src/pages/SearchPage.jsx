import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSearch = () => {
    if (!username.trim()) return;

    navigate(`/user/${username}`);
  };

  return (
    <>
      <h1>GitHub Profiler</h1>

      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={handleChange}
      />

      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default SearchPage;