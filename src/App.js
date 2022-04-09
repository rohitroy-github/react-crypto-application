// import React from 'react'
// import { Route, Router, Link, Routes } from 'react-router-dom'; 
// import { Layout, Typography, Space, } from 'antd';

// import { Navbar, Homepage, Exchanges, News, Cryptocurrencies, CryptoDetails }  from './components';

// const App = () => {
//   return (
//     <div>
//       <div className="app">
//         <div className='navbar'>
//           <Navbar />
//         </div>
//         <div className='main'>
//           <Layout>
//             <div className='routes'>
//               {/* <Route> should be packed inside <Routes> tags */}
              
//               <Routes>
//                 <Route exact path='/' element={<Homepage />} />
//                 <Route exact path='/exchanges' element={<Exchanges />} />
//                 <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
//                 <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
//                 <Route exact path='/news' element={<News />} />
//               </Routes>
              
//             </div>
//           </Layout>
//         <div className='footer'>
//           <Typography.Title>
//             Cryptoverse <br />
//             All rights reserved - Rohit Roy - 2022 
//           </Typography.Title>
//           <Space>
//             <Link to="/">Home</Link>
//             <Link to="/exchnages">Exchanges</Link>
//             <Link to="/coindetails">Coin Details</Link>
//             <Link to="/news">News</Link>
//           </Space>
//         </div> 
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App; 


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
            {/* <Route exact path="/">
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
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/exchanges' element={<Exchanges />} />
            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
            <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />                 
            <Route exact path='/news' element={<News />} />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
