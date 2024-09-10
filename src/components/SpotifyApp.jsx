import React from 'react';
import { SearchArtist } from './SearchArtist';
import { TrackList } from './TrackList';
import { useSpotify } from '../hooks/useSpotify';

export const SpotifyApp = () => {
    const { searchArtist, tracks, playTrack, artistImage, artistName } = useSpotify();

    return (
        <div style={{
            backgroundImage: 'url(https://i.ibb.co/nfK6jMQ/spotify-azul.png)',
            minHeight: '100vh',
            color: 'white',
        }}>
            <SearchArtist searchArtist={searchArtist} />
            <TrackList tracks={tracks} playTrack={playTrack} artistImage={artistImage} artistName={artistName} />
        </div>
    );
};
