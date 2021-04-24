import React, { Fragment, useState } from "react";
import classes from "./searchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  const [type, setType] = useState("");
  const [word, setWord] = useState("");

  return (
    <div>
      <div className={classes.searchBar}>
        <input type="text" onChange={(e) => setWord(e.target.value)} />
        <div onChange={(e) => setType(e.target.value)} style={{display:'flex'}}>
          <input type="radio" value="name" name="gender" defaultChecked /> Name
          <input type="radio" value="website" name="gender" /> Website
        </div>
        <button onClick={() => props.onSearch(type, word)}>
            <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

    </div>
  );
};

export default SearchBar;
