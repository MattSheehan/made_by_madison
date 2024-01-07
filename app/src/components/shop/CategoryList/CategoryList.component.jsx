import './CategoryList.styles.scss';
import Category from '../Category/Category.component';

const CategoryList = ({appName, categories}) => {
  return(
    <div className='categories-list'>
      <div className='categories-title-container'>
        <h1 className='categories-title'>{appName}</h1>
      </div>
      <div className='categories-container'>
        {categories.map((category) => (
          <Category key={category.id} category={category}/>
        ))}
      </div>
    </div>
  )
}

export default CategoryList