import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation.component';
import Home from './routes/home/Home.component';
import Shop from './routes/shop/Shop.component';
import Designer from './routes/designer/Designer.component';
import About from './routes/about/About.component';
import Auth from './routes/auth/Auth.component';
import SearchBar from './components/search/SearchBar.component';
import './App.scss';
const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index={true} path='' element={
            <div className='content-container'><SearchBar /><div className='tabContent'><Home /></div></div>
          }/>
          <Route path='shop' element={
            <div className='content-container'><SearchBar /><div className='tabContent'><Shop /></div></div>
          }/>
          <Route path='designer' element={
            <div className='content-container'><SearchBar /><div className='tabContent'><Designer /></div></div>
          }/>
          <Route path='about' element={
            <div className='content-container'><SearchBar /><div className='tabContent'><About /></div></div>
          }/>
          <Route path='auth' element={
            <div className='content-container'><SearchBar /><div className='tabContent'><Auth /></div></div>
          }/>
        </Route>
      </Routes>
    </div>
  );
};
export default App;