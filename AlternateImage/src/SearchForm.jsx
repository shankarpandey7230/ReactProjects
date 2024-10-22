import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements);
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    // console.log(searchValue);
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="search"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
