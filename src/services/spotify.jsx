const CLIENT_ID = '7cf755e6bdeb458ab722b97b59402735';
const CLIENT_SECRET = 'eff0da00ccce49cfa3858b9f6859ca38';
const TOKEN = 'BQCyFCNIBw34xi92CDHSd3HimX0Ka-LldJCUzK2sDRAF1kBbu19AK8c1-NnW7IL4cdJmIdFVDKBs64wuTLRMfwGV2K80qaLUufpKMtb9grMX17r0LgM';

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
