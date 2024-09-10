import React from 'react';
import { SearchArtist } from './SearchArtist';
import { TrackList } from './TrackList';
import { useSpotify } from '../hooks/useSpotify'; // Asegúrate de importar correctamente el hook

export const SpotifyApp = () => {
    const { searchArtist, tracks, playTrack } = useSpotify(); // Llamada a useSpotify correctamente

    return (
        <div style={{
            backgroundImage: 'url(https://i.ibb.co/RQSrkg9/spotify-verde.jpg)',
            backgroundSize: 'cover',
            minHeight: '100vh',
            color: 'white',
            
        }}>
            <SearchArtist searchArtist={searchArtist} />
            <TrackList tracks={tracks} playTrack={playTrack} />
        </div>
    );
};
