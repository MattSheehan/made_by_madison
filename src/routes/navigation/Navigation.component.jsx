import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Navigation.styles.scss';
import ReactLogo from '../../utils/images/crown.svg';

const Navigation = ({components}) => {
  return (
    <Fragment>
      <div className='container'>
        <div className='navigation'>
          <div>
            <Link className='logo-container' to='/'>
              <img className='background-image' src={ReactLogo} alt="navigation-img"/>
            </Link>
          </div>
          <div className='nav-links-container' >
            <Link className='nav-link' to='/shop'>Shop</Link>
            <Link className='nav-link' to='/shop'>Login</Link>
          </div>
        </div>
        <Outlet />
      </div>
    </Fragment>
  )
};

export default Navigation;