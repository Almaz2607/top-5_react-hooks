import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
  const [value, setValue] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  function search(query) {
    fetch("https://jsonplaceholder.typicode.com/todos?query=" + query)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
    debouncedSearch(value);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <label>
        Search query:
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Search;
