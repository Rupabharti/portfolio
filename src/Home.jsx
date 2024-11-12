import React from 'react';

import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Freebook from './component/Freebook';


function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
