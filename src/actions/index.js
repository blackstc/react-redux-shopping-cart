import axios from 'axios';

export const FETCH_TEAS = 'FETCH_TEAS';

export function fetchTeas() {
    const request = axios.get('src/files/teas.json');

    return {
        type: FETCH_TEAS,
        payload: request
    }
};
