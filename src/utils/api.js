import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzdjNzVhNTQ5MzBhZjNlMGQwNjdmZTg5YjlkNTkzOSIsInN1YiI6IjY2NThiMTliZmYxYjJlNWUyYzJkMmI0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MW3UGHvmM8Hq3QM4DDiaweR8nu6pg14k9ffOtGGO0Is";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};