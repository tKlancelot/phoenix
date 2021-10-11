import React from 'react';

const ProfileBar = () => {

    const titre = {
        writingMode      : "vertical-lr",
        textOrientation  : "upright",
        marginBlockStart : 0,
        marginBlockEnd   : 0,
        textTransform    : "uppercase",
        fontSize         : "0.92rem",
        color            : "#fff"
    }

    return (
        <div className="profile-panel">
            <h2 style={titre}>tarik louatah</h2>
        </div>
    );
};

export default ProfileBar;