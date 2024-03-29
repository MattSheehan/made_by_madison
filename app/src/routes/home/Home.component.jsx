import './Home.styles.scss';
import home_DATA from '../../data/home_DATA'
import CategoryList from '../../components/shop/CategoryList/CategoryList.component';

const Home = () => {
  const appName = "Home"
  return (
    <div className='home'>
      <CategoryList appName={appName} categories={home_DATA} />
    </div>
  );
};

export default Home;