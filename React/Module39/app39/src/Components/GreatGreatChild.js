import React from 'react';

const GreatGreatChild = (props) => {
    return (
        <div>
            <h3>Great Grand Child Value: {props.value}</h3>
        </div>
    );
};

export default GreatGreatChild;