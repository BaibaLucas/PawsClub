/* Package imports */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* Local imports */
// Components
import Home from '../Home';
import Header from '../Header';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        {/* General route */}
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  )
};

export default App;
