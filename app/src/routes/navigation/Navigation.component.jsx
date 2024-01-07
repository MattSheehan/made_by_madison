import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Navigation.styles.scss';
import ReactLogo from '../../utils/images/crown.svg';

const Navigation = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='navigation'>
          <div>
            <Link className='logo-container' to='/'><img className='logo' src={ReactLogo} alt="navigation-img"/></Link>
          </div>
          <div className='nav-links-container' >
            <Link className='nav-link' to='/shop'>SHOP</Link>
            <Link className='nav-link' to='/'>LOGIN</Link>
          </div>
        </div>
        <Outlet />
      </div>
    </Fragment>
  )
};

export default Navigation;