import { useState } from 'react';
import { searchArtistAPI, getArtistTracksAPI } from '../services/spotify';

export const useSpotify = () => {
    const [tracks, setTracks] = useState([]);
    const [currentAudio, setCurrentAudio] = useState(null); // Nuevo estado para controlar la reproducción de audio

    const searchArtist = async (artistName) => {
        const artist = await searchArtistAPI(artistName);
        if (artist) {
            const tracks = await getArtistTracksAPI(artist.id);
            setTracks(tracks);
        }
    };

    const playTrack = (url) => {
        if (currentAudio) {
            currentAudio.pause(); // Detener la canción anterior si está reproduciendo
        }
        const audio = new Audio(url);
        setCurrentAudio(audio);
        audio.play();
    };

    return {
        searchArtist,
        tracks,
        playTrack,
    };
};
