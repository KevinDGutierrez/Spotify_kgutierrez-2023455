import React, { useState } from 'react';

export const SearchArtist = ({ searchArtist }) => {
    const [artist, setArtist] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchArtist(artist);
    };

    return (
        <div className="d-flex justify-content-center mt-3">
            <form onSubmit={handleSubmit} className="d-flex">
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Buscar Artista"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
                <button className="btn btn-success" type="submit">
                    Buscar
                </button>
            </form>
        </div>
    );
};
