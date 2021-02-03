import { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (ev) => {
    ev.preventDefault();
    onFormSubmit?.(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="search">Video Search</label>
          <input type="text" id="search" value={term} onChange={(ev) => setTerm(ev.target.value)} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
