import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Tommy from '../components/Tommy.js'

const Header = () => {

    // const colors = {
    //     buttonPrimary : '#ffffff',
    //     buttonSecondary : '#31649F'
    // }


    return (
        <div className="header">
            <div className="leftHeader">
                <h1>tarik <span>louatah</span></h1>
                <h2>développeur web front-end</h2>
                <div className="blockquote">
                    <p>Je m’appelle Tarik ! Je suis développeur web,  passionné par mon métier et axé sur le développement front-end !</p>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/downloads/portfolio-tarik.pdf" target="_blank" className="orange-button" download="portfolio-tarik.pdf">portfolio</Link></li>
                        <li><Link to="/downloads/cv-figma.pdf" target="_blank" rel="noopener noreferrer" download='cv-figma.pdf' className="blue-button">resume</Link></li>
                        <li><NavLink to="/blog" className="magenta-button">blog</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="rightHeader">
                <div className="fiber-frame">
                    <Canvas camera={{ fov: 28, position:[0,-1,5],near:1,far:24, zoom:1}}>
                        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI/1.6} minPolarAngle={Math.PI / 2.8}/>
                        <directionalLight intensity={0.5}/>
                        <ambientLight intensity={0.36}/>
                        <Suspense fallback={null}>
                        <Tommy position={[0,-1.1,0]} castShadow={true}/>
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    );
};

export default Header;
