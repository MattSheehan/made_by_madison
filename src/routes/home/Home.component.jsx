import './Home.styles.scss';
import shop_DATA from '../../db/data/shop_DATA.js';
import designStudio_DATA from '../../db/data/designer_DATA.js';
import about_DATA from '../../db/data/about_DATA.js';
import CategoryList from '../../components/shop/CategoryList/CategoryList.component';

const Home = () => {
  const appNames = ["Shop", "Designer", "About"]
  return (
    <div className='home'>
      <CategoryList appName={appNames[0]} categories={shop_DATA} />
      <CategoryList appName={appNames[1]} categories={designStudio_DATA} />
      <CategoryList appName={appNames[2]} categories={about_DATA} />
    </div>
  );
};

export default Home;