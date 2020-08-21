import React from 'react';
import './BreakingCard.css';
function BreakingCard({data}) {
    return (
        <div className="main">
            
        <div className="container">
            <img 
                className="image"
                alt={data.name}
                src={data.img}
            />
            
            
            <h2><span className="name">{data.name}</span></h2>
                <table>
                <tr>Birthday:
                    <td>{data.birthday}</td>
                    </tr>
                <tr>Appearance:
                <td> {data.appearance} </td>
                </tr>
                <tr>Status:
                <td>{data.status}</td>
                </tr>
                 <tr>Portrayed:
                <td>{data.portrayed}</td>
                </tr>
                </table>
                
            </div>
            </div>
    )
}

export default BreakingCard;





























