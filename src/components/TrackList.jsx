import React from 'react';

export const TrackList = ({ tracks, playTrack }) => {
    return (
        <div className="d-flex flex-column align-items-center mt-3">
            {tracks.map((track) => (
                <div key={track.id} className="track-item">
                    <h5>{track.name}</h5>
                    <button className="btn btn-primary" onClick={() => playTrack(track.preview_url)}>
                        Reproducir
                    </button>
                </div>
            ))}
        </div>
    );
};
