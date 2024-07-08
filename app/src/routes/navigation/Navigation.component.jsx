import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Navigation.styles.scss';
import { MdInfo, MdMuseum, MdPalette, MdStore } from "react-icons/md";

const Navigation = () => {
  const dirs = [
    { path:('/'), content:(<div><h2><MdMuseum /></h2></div>) },
    { path:'/shop', content:<div><h2><MdStore/></h2></div> },
    { path:'/designer', content:<div><h2><MdPalette/></h2></div>  },
    { path:'/about', content:<div><h2><MdInfo/></h2></div>  }
  ];
  return (
    <Fragment>
      <div className='container'>
        <div className='navigation'>
          <div className='logo-container'>
            <Link className='logo' to={dirs[0].path}>{dirs[0].content}</Link>
          </div>
          <div className='logo-container'>
            <Link className='logo' to={dirs[1].path}>{dirs[1].content}</Link>
          </div>
          <div className='logo-container'>
            <Link className='logo' to={dirs[2].path}>{dirs[2].content}</Link>
          </div>
          <div className='logo-container'>
            <Link className='logo' to={dirs[3].path}>{dirs[3].content}</Link>
          </div>
        </div>
        <Outlet />
      </div>
    </Fragment>
  )
};
export default Navigation;