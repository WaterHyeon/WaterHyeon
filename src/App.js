import React from 'react';
import { Route, BrowserRouter, Link, Routes  } from 'react-router-dom';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Activity from './pages/Activity';
import Career from './pages/Career';
import Work from './pages/Work';
import Footer from './pages/Footer';
import './App.css';
import logo from './assets/logo.png';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 
const App = () => {

  console.log(firebase)

  return (
    <BrowserRouter>
    <header >
      <section className="nav">
            <ul className="gnb">
                <li>
                  <Link to="/"><img src={logo} alt="윤수현의 포트폴리오" /></Link>
                </li>
                <li>
                  <Link to="/Welcome"><p>WELCOME</p></Link>
                </li>
                <li>
                  <Link to="/Activity"><p>ACTIVITY</p></Link>
                </li>
                <li>
                  <Link to="/Career"><p>CAREER</p></Link>
                </li>
                <li>
                  <Link to="/Work"><p>WORK</p></Link>
                </li>
            </ul>
        </section>
        </header>
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
    </BrowserRouter>
  );
};
 
export default App;