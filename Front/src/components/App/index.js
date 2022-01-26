/* Package imports */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* Local imports */
// Components
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import Login from '../Login';
import Signup from '../Signup';
import JoinUs from '../JoinUs';
import About from '../About';

const App = () => {
  return (
    <div className='app'>
      
      <Header />

      <Routes>
        {/* General route */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/joinus' element={<JoinUs />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <Footer />

    </div>
  )
};

export default App;
