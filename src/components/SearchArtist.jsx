import React, { useState } from 'react';

export const SearchArtist = ({ searchArtist }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchArtist(query); // Realiza la búsqueda del artista
    }

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000000' }}>
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">
                    <img src="https://i.ibb.co/Hgmgfgs/Logo-Spotify.jpg" alt="Spotify Logo" style={{ width: '40px', marginRight: '10px' }}/>
                    Spotify
                </a>
                <form className="d-flex" role="search" onSubmit={handleSubmit}>
                    <input className="form-control me-2" type="search" placeholder="Buscar un artista" aria-label="Search" value={query}onChange={(e) => setQuery(e.target.value)}/>
                    <button className="btn" type="submit" style={{ padding: '0' }}>
                        <img src="https://i.ibb.co/qFCsr6r/lupab.jpg" alt="Search Icon" style={{ width: '30px', height: '30px' }}/>
                    </button>
                </form>
            </div>
        </nav>
    );
}