import { useState } from 'react';
import { searchArtistAPI, getArtistTracksAPI } from '../services/spotify';

export const useSpotify = () => {
    const [tracks, setTracks] = useState([]);

    const searchArtist = async (artistName) => {
        const artist = await searchArtistAPI(artistName);
        if (artist) {
            const tracks = await getArtistTracksAPI(artist.id);
            setTracks(tracks);
        }
    };

    const playTrack = (url) => {
        const audio = new Audio(url);
        audio.play();
    };

    return {
        searchArtist,
        tracks,
        playTrack,
    };
};
