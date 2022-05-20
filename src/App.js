//Main App component 

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>

    <div className="main">
      <Layout>
        <div className="routes">
          <Routes> 
          <Route exact path='/' element={<Homepage />} />
            <Route exact path='/exchanges' element={<Exchanges />} />
            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
            <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />                 
            <Route exact path='/news' element={<News />} />
          </Routes>
        </div>
     </Layout>

      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          <Link to="/">
          Crypto-App
          </Link> <br />
          All Rights Reserved | Copyright 2022 | Rohit Roy
        </Typography.Title>
        {/* Ant design process of adding links to the footer of the page */}
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div> 
    {/* Closing 'main' */}

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
