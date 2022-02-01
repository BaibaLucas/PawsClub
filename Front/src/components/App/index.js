/* Package imports */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* Local imports */
// Components
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import Login from '../Login';
import Signup from '../SignUp';
import JoinUs from '../JoinUs';
import About from '../About';
import LinesUp from '../LinesUp';
import Section from '../Section';
import News from '../News';

const App = () => {
  return (
    <div className='app'>
      
      <Header />

      <Routes>
        {/* General route */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/linesup' element={<LinesUp />} />
        <Route path='/joinus' element={<JoinUs />} />
        <Route path='/about' element={<About />} />
        <Route path='/section' element={<Section />} />
        <Route path='/news' element={<News />} />
      </Routes>

      <Footer />

    </div>
  )
};

export default App;
