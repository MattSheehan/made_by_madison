import './Category.styles.scss';
import ReactLogo from '../../../utils/images/logo.svg';

const Category = ({category}) => {
  const {app, title, subtitle, imageUrl, phone, email} = category;
  let theCategory;
  let imageStyle = {backgroundImage: `url(${imageUrl})`};
  switch (app) {
    case "shop":
      theCategory = (
        <div className='category-container'>
          <div className='background-image' style={imageStyle}/>
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      );
      break;
    case "designer": 
      theCategory = (
        <div className='category-container'>
          <div className='background-image'><img src={ReactLogo} alt="user-img"/></div>
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      );
      break;
    case "about": 
      theCategory = (
        <div className='category-container'>
          <div className='background-image'><img src={ReactLogo} alt="user-img"/></div>
          <div className='category-body-container'>
            <h2>{title}</h2>
            {(title==="Contact") ? (<div><p>{phone}</p><p><u>{email}</u></p></div>) : (<div><p>{subtitle}</p></div>)}
          </div>
        </div>
      );
      break;
    case "home": 
      theCategory = (
        <div className='category-container'>
        <div className='background-image' style={imageStyle}/>
          <div className='category-body-container'>
            <h2>{title}</h2>
            <div><p>{subtitle}</p></div>
          </div>
        </div>
      );
      break;
    default: 
      console.log('category.app passed to prop is unrecognized or null: ', app);
      break;
  };
  return(theCategory);
};

export default Category;