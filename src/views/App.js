import { Routes, Route } from 'react-router-dom';
import Shop from '../routes/shop/Shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Shop />} />
    </Routes>
  );
};

export default App;