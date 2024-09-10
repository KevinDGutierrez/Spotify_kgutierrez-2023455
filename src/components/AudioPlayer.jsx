import React, { useEffect, useRef } from 'react';

export const AudioPlayer = ({ trackName, url }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause(); // Pausa el audio actual
            audioRef.current.src = url; // Actualiza la URL
            audioRef.current.load(); // Recarga el audio
            audioRef.current.play(); // Reproduce el nuevo audio
        }
    }, [url]); // Reproduce la nueva URL cuando cambia

    return (
        <div>
            <h3>{trackName || 'Selecciona una cancion'}</h3>
            <audio ref={audioRef} controls />
        </div>
    );
};
