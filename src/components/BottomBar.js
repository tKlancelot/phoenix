import React from 'react';

const BottomBar = () => {


    // style de ce composant
    const bottomBar = {
        position : "absolute",
        bottom  : 0
    } 

    return (
        <div style={bottomBar} className="bottombar">
            <p>Tarik Louatah 2021 - © Tous droits réservés</p>
        </div>
    );
};

export default BottomBar;