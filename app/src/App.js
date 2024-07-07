import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation.component';
import Home from './routes/home/Home.component';
import Shop from './routes/shop/Shop.component';
import Designer from './routes/designer/Designer.component';
import About from './routes/about/About.component';
import Auth from './routes/auth/Auth.component';
import './App.scss';
import { MdAccountCircle, MdSettings } from "react-icons/md";
const App = () => {
  const ContentBanner = () => {
    return (
      <div className='logo-container'>
        <h2 className='logo'><MdSettings/></h2><h2 className='logo'><MdAccountCircle/></h2>
      </div>
    );
  }
  return (
    <div className='tabs'>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={
            <div className='content-container'><ContentBanner /><div className='tabContent'>{<Home />}</div></div>
          } />
          <Route path='shop' element={<div className='tabContent'><Shop /></div>} />
          <Route path='designer' element={<div className='tabContent'><Designer /></div>} />
          <Route path='about' element={<div className='tabContent'><About /></div>} />
          <Route path='auth' element={<div className='tabContent'><Auth /></div>} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;