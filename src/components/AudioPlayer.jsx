import React, { useEffect, useRef } from 'react';

export const AudioPlayer = ({ trackName, url }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = url; 
            audioRef.current.load(); 
            audioRef.current.play(); 
        }
    }, [url]); 

    return (
        <div>
            <h3>{trackName || 'Selecciona una cancion'}</h3>
            <audio ref={audioRef} controls />
        </div>
    );
};
