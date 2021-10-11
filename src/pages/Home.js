import React, { Fragment } from 'react';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import BodyFrame from '../components/BodyFrame';
import DownloadPanel from '../components/MenuTarik';
import Responsive from '../components/Responsive';
import Counter from '../components/Counter';

const Home = () => {
  return (
    <Fragment>
      <Counter/>
      <Responsive/>
      <div id="home">
          <div className="homeframe">
            <TopBar/>
            <BodyFrame/>
            <BottomBar/>
            <div id="title-developer"><span>web</span><span>-</span><span>developer</span></div>
            <DownloadPanel/>
          </div>
      </div>
    </Fragment>
  );
};

export default Home;