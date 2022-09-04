import './App.css';
import Appheader from './component/Appheader';
import{
  BrowserRouter,
  Routes,
  Route
}from 'react-router-dom';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';

function App() {
  return (
  <BrowserRouter>
  <Appheader></Appheader>
  <div className='pageBody'>
    <Routes>
      <Route>
      <Route path="/Homepage" element={<Homepage/>} />
      <Route path="/Productpage" element={<Productpage/>} />
      </Route>
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
