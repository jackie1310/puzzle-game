import React from 'react';
import './Tile.css';

export default function Tile({number, moveTile}) {
    return (
        <div onClick={() => moveTile(number)} className={`number ${number.value === number.index + 1 ? 'correct' : ''} ${number.value === 16 ? 'disabled' : ""} slot--${number.index}`}>
            {number.value === 16 ? '' : number.value}
        </div>
    )
}
