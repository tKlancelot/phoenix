import React, { Fragment, useEffect } from 'react';
import Portfolio from './Portfolio';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Tommy from '../components/Tommy.js'

const BodyFrame = () => {

    useEffect(() => {
        // styleMosaique();
    })

    return (
        <Fragment>

        <div className="bodyframe">
            <Portfolio/>
        </div>
        {/* <div className="fiber-frame shadow">
            <Canvas camera={{ fov: 28, position:[0,-1,5],near:1,far:24, zoom:1}}>
                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI/1.6} minPolarAngle={Math.PI / 2.8}/>
                <directionalLight intensity={0.5}/>
                <ambientLight intensity={0.36}/>
                <Suspense fallback={null}>
                <Tommy position={[0,-1.1,0]} castShadow={true}/>
                </Suspense>
            </Canvas>
        </div> */}

        </Fragment>
    );
};

export default BodyFrame;

