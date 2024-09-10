import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AudioPlayer } from './AudioPlayer';

export const TrackList = ({ tracks }) => {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [currentUrl, setCurrentUrl] = useState(null);

    const handlePlay = (track) => {
        setCurrentTrack(track.name); 
        setCurrentUrl(track.preview_url);
    };

    return (
        <div className="container mt-5 position-relative">
            <div className="row">
                {/* Sección del TrackList */}
                <div className="col-md-7">
                    <h2 className="mb-4 text-dark">Lista de canciones</h2>
                    <div className="row">
                        {tracks.map((track) => (
                            <div className="col-12 d-flex justify-content-between align-items-center mb-3" key={track.id}>
                                <span className="text-dark fs-5">{track.name}</span>
                                <button 
                                    className="btn btn-link d-flex align-items-center" 
                                    onClick={() => handlePlay(track)}
                                    style={{ padding: 0 }}
                                >
                                    <img 
                                        src="https://i.ibb.co/rMVMtrb/play-removebg-preview.png" 
                                        alt="Play"
                                        style={{ width: '50px', height: '50px' }}
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sección del Reproductor */}
                <div className="col-md-5 position-relative">
                    <div className="card" style={{ width: '25rem', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white'}}>
                        <img 
                            src="https://i.ibb.co/Hgmgfgs/Logo-Spotify.jpg" 
                            className="card-img-top" 
                            alt="Logo Reproductor"
                        />
                        <div className="card-body">
                            <h1 className="card-title">{currentTrack || 'Sin Reproducciones'}</h1>
                            <AudioPlayer trackName={currentTrack} url={currentUrl} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};