import React, { useState, useEffect } from 'react';
import './MoodSetter.css';

function MoodSetter() {
    const [mood, setMood] = useState('Neutral'); // Default mood set to 'Neutral'
    const [message, setMessage] = useState('');

    // useEffect to handle the message display upon mood change
    useEffect(() => {
        setMessage(`Your current mood is: ${mood}`);
        
        // Clear the message after 3 seconds
        const timer = setTimeout(() => {
            setMessage('');
        }, 5000);

        return () => {
            clearTimeout(timer); // Cleanup timer to avoid any potential issues
        };
    }, [mood]);

    const handleMoodChange = (event) => {
        setMood(event.target.value);
    };

   const resetButton = () => {
        setMood('Neutral');

    };


    return (
        <div className={`mood-container ${mood.toLowerCase()}`}>
            <h1>Mood Setter</h1>
            <select value={mood} onChange={handleMoodChange}>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Neutral">Neutral</option>
                <option value="Sassy">Sassy</option>
            </select>
            {message && <p>{message}</p>}
            <button onClick={resetButton}>Reset Button</button>
        </div>
    );
} 

export default MoodSetter;