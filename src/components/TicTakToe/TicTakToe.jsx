import React from 'react'
import './TicTakToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

const TicTakToe = () => {
    return (
        <div className='container'>
            <h1 className='title'>Tic Tac Toe Game</h1>
            <div className='board'>
                <div className="row1">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
            </div>
            <button className='reset'>Reset</button>
        </div>
    )
}

export default TicTakToe