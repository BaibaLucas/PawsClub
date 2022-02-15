/* Package imports */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* Local imports */
// Components
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import Login from '../Login';
import Signup from '../../containers/SignUp';
import JoinUs from '../JoinUs';
import About from '../About';
import LinesUp from '../LinesUp';
import Section from '../Section';
import News from '../News';
import Newsdetails from '../Newsdetails';
import Streams from '../Streams';
import Account from '../Account';
import Roster from '../Roster';

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
        <Route path='/newsdetails' element={<Newsdetails />} />
        <Route path='/streams' element={<Streams />} />
        <Route path='/account' element={<Account />} />
        <Route path='/roster' element={<Roster />} />


      </Routes>

      <Footer />

    </div>
  )
};

export default App;
