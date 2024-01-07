import './Home.styles.scss';
import home_DATA from '../../db/data/home_DATA.js'
import CategoryList from '../../components/shop/CategoryList/CategoryList.component';

const Home = () => {
  const appNames = ["Home", "Auth", "About"]
  return (
    <div className='home'>
      <CategoryList appName={appNames[0]} categories={home_DATA} />
    </div>
  );
};

export default Home;