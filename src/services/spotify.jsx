const CLIENT_ID = '7cf755e6bdeb458ab722b97b59402735';
const CLIENT_SECRET = 'eff0da00ccce49cfa3858b9f6859ca38';
const TOKEN = 'BQDRL6T117RdA3Zk8jXtz5TJYWLdOgOikb0BtHq8_N7ehVCqhLkvOIyZrsI2-t5T6grrCPXGto1Lws9CZCWlNpHSHM-cY72BsWHFVaXR29CvhzfUnC8';

const BASE_URL = 'https://api.spotify.com/v1';

const headers = {
    Authorization: `Bearer ${TOKEN}`,
};

export const searchArtistAPI = async (artistName) => {
    const resp = await fetch(`${BASE_URL}/search?q=${artistName}&type=artist`, { headers });
    const data = await resp.json();
    return data.artists.items.length > 0 ? data.artists.items[0] : null;
};

export const getArtistTracksAPI = async (artistId) => {
    const resp = await fetch(`${BASE_URL}/artists/${artistId}/top-tracks?market=US`, { headers });
    const data = await resp.json();
    return data.tracks.map(track => ({
        id: track.id,
        name: track.name,
        preview_url: track.preview_url,
        album_image: track.album.images[0]?.url || '', 
    }));
};


