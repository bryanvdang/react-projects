import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext();
  const searchTerm = React.useRef("");

  // set focus on input on page load
  React.useEffect(() => {
    searchTerm.current.focus();
  }, []);

  // call search on value change
  const searchCocktail = () => {
    setSearchValue(searchTerm.current.value);
  };

  // prevent user from using 'enter' key for search
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchTerm}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
