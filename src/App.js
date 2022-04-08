import React from 'react'
import { Route, Link, Routes } from 'react-router-dom'; 
import { Layout, Typography, Space, } from 'antd';

import { Navbar, Homepage, Exchanges, News, Cryptocurrencies, CoinDetails }  from './components';

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
              <Routes>
                <Route exact path='/'>
                  <Homepage /> 
                </Route>
                <Route exact path='/exchanges'>
                  <Exchanges /> 
                </Route>
                <Route exact path='/cryptocurrencies'>
                  <Cryptocurrencies /> 
                </Route>
                <Route exact path='/crypto/:coinId'>
                  <CoinDetails /> 
                </Route>
                <Route exact path='/news'>
                  <News /> 
                </Route>
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
