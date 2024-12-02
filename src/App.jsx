
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Gaming from './Component/Gaming';
import All from './Component/All';
import Music from './Component/Music';
import Navbar from './Component/Navbar';
import Oggy from './Component/Oggy';
import Thrillers from './Component/Thrillers';
import Mixes from './Component/Mixes';
import Podcast from './Component/Podcast';
import Live from './Component/Live';
import Financial from './Component/Financial';
import Comic from './Component/Comic';
import Account from './Component/Account';
import Showdata from './Component/Showdata';

function App() {

  return (
    <>

      <Header />

      <Sidebar />
      <Navbar />
      <Routes>

        <Route path='/' element={<All />} />
        <Route path='/gaming' element={<Gaming />} />
        <Route path='/music' element={<Music />} />
        <Route path='/oggy' element={<Oggy />} />
        <Route path='/thrillers' element={<Thrillers />} />
        <Route path='/mixes' element={<Mixes />} />
        <Route path='/podcast' element={<Podcast />} />
        <Route path='/live' element={<Live />} />
        <Route path='/financial' element={<Financial />} />
        <Route path='/comic' element={<Comic />} />
        <Route path='/account' element={<Account />} />
        <Route path='/data' element={<Showdata />} />
      </Routes>
    </>
  )
}

export default App;
