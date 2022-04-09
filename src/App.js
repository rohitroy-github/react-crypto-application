import React from 'react'
import { Route, Router, Link, Routes } from 'react-router-dom'; 
import { Layout, Typography, Space, } from 'antd';

import { Navbar, Homepage, Exchanges, News, Cryptocurrencies, CryptoDetails }  from './components';

const App = () => {
  return (
    <div>
      <div className="app">
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
              {/* <Route> should be packed inside <Routes> tags */}
              
              <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route exact path='/exchanges' element={<Exchanges />} />
                <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                <Route exact path='/news' element={<News />} />
              </Routes>
              
            </div>
          </Layout>
        </div>
        <div className='footer'>
          </div> 
      </div>
    </div>
  );
}

export default App; 
