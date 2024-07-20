import NewGame from '../NewGame/NewGame';
import './Winner.css';
import React from 'react'

export default function Winner({numbers, reset}) {
    if (!numbers.every(n => n.value === n.index + 1))
        return null

    return (
        <div className='winner'>
            <p>You won!</p>
            <NewGame reset={reset}/>
        </div>
    )
}
