const CLIENT_ID = '7cf755e6bdeb458ab722b97b59402735';
const CLIENT_SECRET = 'eff0da00ccce49cfa3858b9f6859ca38';
const TOKEN = 'BQBupp2Py4yCzXg6_u8Pf15gnHc13jpRiCuZmk9vfcqF6LKOYzLMSiW_cjVhw8X4T9JMHcFyJK_-z-vTCtbvfj0bUHoF5BUt_X8TJhLTHrZLQ3VFthA';

const BASE_URL = 'https://api.spotify.com/v1';

const headers = {
    Authorization: `Bearer ${TOKEN}`,
};

export const searchArtistAPI = async (artistName) => {
    const resp = await fetch(`${BASE_URL}/search?q=${artistName}&type=artist`, { headers });
    const data = await resp.json();
    return data.artists.items[0]; 
};

export const getArtistTracksAPI = async (artistId) => {
    const resp = await fetch(`${BASE_URL}/artists/${artistId}/top-tracks?market=US`, { headers });
    const data = await resp.json();
    return data.tracks; 
};
