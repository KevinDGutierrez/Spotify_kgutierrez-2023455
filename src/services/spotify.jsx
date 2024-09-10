const CLIENT_ID = '7cf755e6bdeb458ab722b97b59402735';
const CLIENT_SECRET = 'eff0da00ccce49cfa3858b9f6859ca38';
let TOKEN = ''; 
const BASE_URL = 'https://api.spotify.com/v1';

const getToken = async () => {
    const resp = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        },
        body: 'grant_type=client_credentials',
    });
    
    const data = await resp.json();
    TOKEN = data.access_token; 
    return TOKEN;
};

const getHeaders = async () => {
    if (!TOKEN) { 
        await getToken();
    }
    return {
        Authorization: `Bearer ${TOKEN}`,
    };
};


export const searchArtistAPI = async (artistName) => {
    const headers = await getHeaders();
    const resp = await fetch(`${BASE_URL}/search?q=${artistName}&type=artist`, { headers });
    const data = await resp.json();
    return data.artists.items.length > 0 ? data.artists.items[0] : null;
};

export const getArtistTracksAPI = async (artistId) => {
    const headers = await getHeaders();
    const resp = await fetch(`${BASE_URL}/artists/${artistId}/top-tracks?market=US`, { headers });
    const data = await resp.json();
    return data.tracks.map(track => ({
        id: track.id,
        name: track.name,
        preview_url: track.preview_url,
        album_image: track.album.images[0]?.url || '', 
    }));
};



