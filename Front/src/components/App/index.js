/* Package imports */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

/* Local imports */
// Components
import Home from '../../containers/Home';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import Login from '../../containers/Login';
import Signup from '../../containers/SignUp';
import JoinUs from '../JoinUs';
import About from '../About';
import LinesUp from '../../containers/LinesUp';
import Section from '../Section';
import News from '../../containers/News';
import Newsdetails from '../Newsdetails';
import Streams from '../Streams';
import Account from '../../containers/Account';
import Roster from '../../containers/Roster';
import ImgProfil from '../../containers/ImgProfil';
import CreateNews from '../../containers/CreateNews';

const App = ({ loadNewsData, loadSectionsData, loadStreamersData }) => {

  // Loading News - Sections - Streamers
  useEffect(() => {
    loadNewsData();
    loadSectionsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Route path='/account/update' element={<ImgProfil />} />
        <Route path='/roster' element={<Roster />} />
        <Route path='/createnews' element={<CreateNews />} />
      </Routes>

      <Footer />

    </div>
  )
};

export default App;
