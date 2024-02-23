
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Enav from './E-commerce/Enav';
import Homepage from './E-commerce/Homepage';
import SignupPage from './E-commerce/SignupPage';
import SignupPage1 from './E-commerce/SignupPage1';
import Admin from './E-commerce/Admin';
import Products, { Newcontext } from './E-commerce/Products';
import Cart from './E-commerce/Cart';

function App() {
  return (
    <div className="App">



      <BrowserRouter>
      <Enav/>
      <Routes>
        <Route path='/home' element={<Homepage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/signup/login' element={<SignupPage1/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        
      </Routes>
      </BrowserRouter>
  
    
    </div>
  );
}

export default App;
