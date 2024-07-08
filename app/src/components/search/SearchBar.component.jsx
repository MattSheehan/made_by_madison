import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { MdAccountCircle, MdSettings } from "react-icons/md";
import './SearchBar.styles.scss';
const SearchBar = () => {
  return (
    <Fragment>
      <div className='logo-container'>
        <Link className='logo' to='/settings'><div><h2><MdSettings/></h2></div></Link>
        <Link className='logo' to='/auth'><div><h2><MdAccountCircle/></h2></div></Link>
        <Outlet />
      </div>
    </Fragment>
  );
};
export default SearchBar;