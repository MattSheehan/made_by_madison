import './Shop.styles.scss';
import shop_DATA from '../../db/data/shop_DATA.js';
import designStudio_DATA from '../../db/data/designer_DATA.js';
import about_DATA from '../../db/data/about_DATA.js';
import CategoryList from '../../components/shop/CategoryList/CategoryList.component';

const Shop = () => {
  const appNames = ["Shop", "Designer", "About"]
  return (
    <div className='shop'>
      <CategoryList appName={appNames[0]} categories={shop_DATA} />
      <CategoryList appName={appNames[1]} categories={designStudio_DATA} />
      <CategoryList appName={appNames[2]} categories={about_DATA} />
    </div>
  );
};

export default Shop;