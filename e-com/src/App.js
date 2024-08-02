import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';

// import Navbar from'./components/Navbar';
// import Banner from './components/Banner';
import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
import Brands from './components/Brands';
import NewArrivals from './components/Newarrivals';
import Onsale from './components/Onsale';

function App()
{
  return(
    <>
        <Router> 
          <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/Loginpage" element={<Loginpage/>}></Route>
            <Route path='/Onsale' element={<Onsale/>}>
            </Route>
          </Routes>
        </Router>
    </>
  )
}
export default App;