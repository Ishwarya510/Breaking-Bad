import React from 'react';
import './BreakingCard.css';
function BreakingCard({data}) {
    return (
        <div className="container">
            <img 
                className="image"
                alt={data.name}
                src={data.img}
            />
            <div className="data">
                <h2><span className="name">{data.name}</span></h2>
                <p>Birthday:{data.birthday}</p>
                <p>Appearance:{data.appearance} </p>
                <p>Status:{data.status}</p>
                <p>Occupation:{data.occupation}</p>
                <p>Portrayed:{data.portrayed}</p>

                </div>
            </div>
    )
}

export default BreakingCard





























