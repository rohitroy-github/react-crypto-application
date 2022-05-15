//Main App component 

import React from 'react';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (

  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      {/* <Layout> */}
        {/* <div className="routes">
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/exchanges' element={<Exchanges />} />
            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
            <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />                 
            <Route exact path='/news' element={<News />} />
          </Routes>
        </div>
      </Layout> */}
      </div>

      <div className="footer">
        {/* <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space> */}
      </div>
    </div>
    
);

export default App;





//Test <Routes> codes > 
            {/* <Routes>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route> */}
