import React from 'react';

const CopyRight = () => {

    const noPointers = {
        pointerEvents : 'none'
    }

    return (
        <div style={noPointers} id="copyright">
            <p>Tarik Louatah - 2021 © Tous droits réservés</p>
        </div>
    );
};

export default CopyRight;