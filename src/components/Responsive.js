import React from 'react';
import PortfolioPhone from './PortfolioPhone';
import TopBar from '../components/TopBar';
import MenuTarik from './MenuTarik';
// import { Box, OrbitControls } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';

const Responsive = () => {

    return (
        <div id="responsive">
            <MenuTarik/>
            <div className="header">
                <TopBar/>
            </div>
            <div id="title-developer"><span>web</span><span>-</span><span>developer</span></div>
            <PortfolioPhone/>
            <div className="footer">
                <span>Tarik Louatah 2021 - © Tous droits réservés</span>
            </div>
        </div>
    );
};

export default Responsive;