const CLIENT_ID = '7cf755e6bdeb458ab722b97b59402735';
const CLIENT_SECRET = 'eff0da00ccce49cfa3858b9f6859ca38';
const TOKEN = 'BQCk61mLlNrs61T18BCfnre8VbARwjP1aM_vwWPSmvPW5-k-jG69cWMt2-z8a8LgMOgTzwku3tpUG1pw4AuH5C07n6q5CItYAxE1pTfC9i2hqWHPr0k';

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
    return data.tracks; 
};
