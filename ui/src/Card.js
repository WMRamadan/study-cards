import React, { useState } from 'react'

export default function Card({ card }) {
    const [flip, setFlip] = useState(false)
    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="front">
                {card.question}
                <div className="card-options">
                    {card.options.map(option => {
                        return <div className="card-option">{option}</div>
                    })}
                </div>
            </div>
            <div className="back">{card.answer}</div>
        </div>
    )
}
