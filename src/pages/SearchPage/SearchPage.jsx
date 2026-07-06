import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import normalizeUsername from "@/utils/normalizeUsername";
import "./SearchPage.css";

const SearchPage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSearch = (value) => {
    const trimmedValue = normalizeUsername(value);

    if (!trimmedValue) {
      return;
    }

    navigate(`/user/${trimmedValue}`);
  };

  return (
    <div className="page-card search-page">
      <div className="hero-copy">
        <p className="eyebrow">GitHub Explorer</p>
        <h1>Find developers, projects, and communities in seconds.</h1>
        <p className="hero-text">
          Search any GitHub profile and explore repositories, followers, and key
          stats in a polished dashboard.
        </p>
        <div className="search-highlights">
          <span>Fast profile lookup</span>
          <span>Clean repository view</span>
          <span>Modern UI</span>
        </div>
      </div>

      <SearchForm
        username={username}
        onUsernameChange={setUsername}
        onSubmit={handleSearch}
      />
    </div>
  );
};

export default SearchPage;
