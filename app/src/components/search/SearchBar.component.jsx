import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { MdAccountCircle, MdSettings } from "react-icons/md";
import { useState } from 'react';
import FormInput from '../forms/form-input/FormInput.component'
import './SearchBar.styles.scss';
const SearchBar = () => {
  const [ formFields, setFormFields ] = useState({ searchValue:'' });
  const { searchValue } = formFields;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setFormFields({ searchValue: '' });
    } catch (error) { 
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className='container'>
      <div className='search-container'>
        <form className='search-form-container' onSubmit={handleSubmit}>
          <FormInput
            label='Search'
            type='text'
            required={false}
            autoComplete='on'
            onChange={handleChange}
            name='searchValue'
            value={searchValue}
          />
        </form>
      </div>
      <Fragment>
        <div className='logo-container'>
          <Link className='logo' to='/settings'><div><h2><MdSettings/></h2></div></Link>
          <Link className='logo' to='/auth'><div><h2><MdAccountCircle/></h2></div></Link>
        </div>
        <Outlet />
      </Fragment>
    </div>
  );
};
export default SearchBar;