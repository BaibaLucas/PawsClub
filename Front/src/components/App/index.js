/* Package imports */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

/* Local imports */
import { useScrollToTop } from '../../utils';
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
import Admin from '../../containers/Admin';
import AdminDashboard from '../../containers/AdminDashboard';
import AdminDashboardUsers from '../../containers/AdminDashboardUsers';
import AdminDashboardTags from '../../containers/AdminDashboardTags';
import AdminDashboardSections from '../../containers/AdminDashboardSections';
import AdminDashboardNews from '../../containers/AdminDashboardNews';
import { GuardedRoute, AdminRoute } from '../GuardedRoute';

const App = ({ loadNewsData, loadSectionsData, loadStreamersData, logged, role_id }) => {

  // Loading News - Sections - Streamers
  useEffect(() => {
    loadNewsData();
    loadSectionsData();
    loadStreamersData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useScrollToTop();

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
        <Route path='/streams' element={<Streams />}/>
        <Route path='/linesup' element={<LinesUp />} />
        <Route path='/news' element={<News />} />
        <Route path='/newsdetails' element={<Newsdetails />} />
        <Route path='/roster' element={<Roster />} />
        {/* User route */}
        <Route element={<GuardedRoute logged={logged} />}>
          <Route path='/account' element={<Account />} />
          <Route path='/account/update' element={<ImgProfil />} />
        </Route>
        {/* Admin route */}
        <Route path='/admin' element={<Admin />} />
        <Route element={<AdminRoute admin={role_id} />}>
          <Route path='/createnews' element={<CreateNews />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/dashboard/users' element={<AdminDashboardUsers />} />
          <Route path='/admin/dashboard/tags' element={<AdminDashboardTags />} />
          <Route path='/admin/dashboard/linesup' element={<AdminDashboardSections />} />
          <Route path='/admin/dashboard/news' element={<AdminDashboardNews />} />
        </Route>
      </Routes>
      <Footer />

    </div>
  )
};

export default App;
