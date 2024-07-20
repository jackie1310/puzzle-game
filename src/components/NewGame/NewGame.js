import './NewGame.css';
import React from 'react'

export default function NewGame({reset}) {
    return (
        <div className='button-wrapper'>
            <button id="newGame" onClick={reset}>New Game</button>
        </div>
    )
}
