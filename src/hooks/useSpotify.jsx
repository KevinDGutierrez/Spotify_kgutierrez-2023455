import { useState } from 'react';
import { searchArtistAPI, getArtistTracksAPI } from '../services/spotify';

export const useSpotify = () => {
    const [tracks, setTracks] = useState([]);
    const [artistImage, setArtistImage] = useState(null); 
    const [artistName, setArtistName] = useState(''); 
    const [currentAudio, setCurrentAudio] = useState(null); 

    const searchArtist = async (artistName) => {
        const artist = await searchArtistAPI(artistName);
        if (artist) {
            const tracks = await getArtistTracksAPI(artist.id);
            setTracks(tracks);
            setArtistImage(artist.images[0]?.url || null);
            setArtistName(artist.name); 
        }
    };

    const playTrack = (url) => {
        if (currentAudio) {
            currentAudio.pause();
        }
        const audio = new Audio(url);
        setCurrentAudio(audio);
        audio.play();
    };

    return {
        searchArtist,
        tracks,
        playTrack,
        artistImage,
        artistName,  
    };
};
