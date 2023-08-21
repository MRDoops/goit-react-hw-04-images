import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchBar,
  SerchForm,
  Input,
  SearchBtn,
  SerchFormBtnLabel,
} from './Searchbar.styled.jsx';

function SearhBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = evt => {
    setSearchQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Please enter something');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchBar>
      <SerchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
          value={searchQuery}
          onChange={handleChange}
        />
        <SearchBtn type="submit">
          <SerchFormBtnLabel>Search</SerchFormBtnLabel>
        </SearchBtn>
      </SerchForm>
    </SearchBar>
  );
}

SearhBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearhBar;
