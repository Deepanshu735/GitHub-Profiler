import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import normalizeUsername from "@/utils/normalizeUsername";
import {
  Eyebrow,
  HeroCopy,
  HeroText,
  HeroTitle,
  Highlights,
  HighlightChip,
  SearchPageContainer,
} from "./SearchPage.styles";

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
    <SearchPageContainer>
      <HeroCopy>
        <Eyebrow>GitHub Explorer</Eyebrow>
        <HeroTitle>
          Find developers, projects, and communities in seconds.
        </HeroTitle>
        <HeroText>
          Search any GitHub profile and explore repositories, followers, and key
          stats in a polished dashboard.
        </HeroText>
        <Highlights>
          <HighlightChip>Fast profile lookup</HighlightChip>
          <HighlightChip>Clean repository view</HighlightChip>
          <HighlightChip>Modern UI</HighlightChip>
        </Highlights>
      </HeroCopy>

      <SearchForm
        username={username}
        onUsernameChange={setUsername}
        onSubmit={handleSearch}
      />
    </SearchPageContainer>
  );
};

export default SearchPage;
