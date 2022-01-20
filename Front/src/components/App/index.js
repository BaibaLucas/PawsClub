/* Package imports */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* Local imports */
// Components
import Home from '../Home';

const App = () => {
  return (
    <div className='app'>

      <Routes>
        {/* General route */}
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  )
};

export default App;
