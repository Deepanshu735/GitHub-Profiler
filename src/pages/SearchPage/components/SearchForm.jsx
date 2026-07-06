import Button from "@/components/common/Button";
import {
  SearchInput,
  SearchInputGroup,
  SearchLabel,
  SearchPanel,
} from "./SearchForm.styles";

const SearchForm = ({ username, onUsernameChange, onSubmit }) => {
  return (
    <SearchPanel>
      <SearchLabel htmlFor="github-search">Enter GitHub Username</SearchLabel>
      <SearchInputGroup>
        <SearchInput
          id="github-search"
          type="text"
          placeholder="e.g. octocat"
          value={username}
          onChange={(event) => onUsernameChange(event.target.value)}
        />
        <Button onClick={() => onSubmit(username)}>Search</Button>
      </SearchInputGroup>
    </SearchPanel>
  );
};

export default SearchForm;
