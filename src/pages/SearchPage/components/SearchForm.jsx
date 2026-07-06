import Button from "@/components/common/Button";

const SearchForm = ({ username, onUsernameChange, onSubmit }) => {
  return (
    <div className="search-panel">
      <label htmlFor="github-search">Enter GitHub Username</label>
      <div className="search-input-group">
        <input
          id="github-search"
          type="text"
          placeholder="e.g. octocat"
          value={username}
          onChange={(event) => onUsernameChange(event.target.value)}
        />
        <Button onClick={() => onSubmit(username)}>Search</Button>
      </div>
    </div>
  );
};

export default SearchForm;
