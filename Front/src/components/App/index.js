/* Package imports */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* Local imports */
// Components
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import Login from '../Login';

const App = () => {
  return (
    <div className='app'>
      
      <Header />

      <Routes>
        {/* General route */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />

    </div>
  )
};

export default App;
