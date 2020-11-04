import React from 'react';
import '../styles/Marker.css';

const Marker = (props) => {
    const { color, name, id } = props;
    return (
        <div className="marker"
             style={{ cursor: 'pointer'}}
             title={name}
        />
    );
};

export default Marker;
