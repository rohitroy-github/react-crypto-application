import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100; //'count' variable keeps a track of the number of crypto cards 
  //if 'simplified view' diaplay only 10 cards else display 100 cards 
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  // console.log(cryptos);

  //Logic to filter out the serached items from the cryptoList
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

if (isFetching) return <Loader />;

  return (
    <div> 

      {/* Searchbar for cryptocurrencies */}
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}

      {/* Crptocurrency Cards */}
      <Row gutter={[32, 32]} className="crypto-card-container"> 
      {/* Adding some spaces using 'gutter' */}
        {cryptos?.map((currency) => (
          <Col
            xs={24} //Full length for small devices
            sm={12} //2 rows
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable //Making card hoverable 
              >
                {/* Data we want inside our paragraph  */}
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

    </div>
  );
}

export default Cryptocurrencies;