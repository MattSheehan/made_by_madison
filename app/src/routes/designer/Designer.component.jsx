import './Designer.styles.scss';
import CategoryList from '../../components/cards/CategoryList/CategoryList.component';
import '../../components/cards/CategoryList/CategoryList.component';

const Designer = () => {
  const appData = [
    {
      id: 58789813,
      name: 'interiorDesign',
      title: 'Interior Design',
      subtitle: 'Augmented Reality for interior designers so you can make your ideas, reality.',
      app: 'designer',
      category: 'ARaaS'
    },
    {
      id: 89177731,
      name: 'graphicArt',
      title: 'Graphic Art',
      subtitle: 'Effectively market and advertise your services or brand to your clients.',
      app: 'designer',
      category: 'SaaS'
    },
    {
      id: 82591084,
      name: 'mobileStudio',
      title: 'Mobile Studio',
      subtitle: 'Get the App',
      app: 'designer',
      category: 'SaaS'
    },
    {
      id: 21464687,
      name: 'documentation',
      title: 'Documentation',
      subtitle: 'Learn about the MS Design Studio',
      app: 'designer',
      category: 'documentation'
    }
  ];
  return (
    <div className='designer-container'>
    <div className='categories-title-container'>
        <h1 className='categories-title'>Designer</h1>
    </div>
      <CategoryList categories={appData} />
    </div>
  );
};

export default Designer;