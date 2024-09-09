import React from 'react';
import { useSpotify } from '../hooks/useSpotify';
import { SearchArtist } from './SearchArtist';
import { TrackList } from './TrackList';

export const SpotifyApp = () => {
    const { searchArtist, tracks, playTrack } = useSpotify();

    return (
        <>
            <SearchArtist searchArtist={searchArtist} />
            <TrackList tracks={tracks} playTrack={playTrack} />
        </>
    );
};
