import axiosClient from "./axoisClient";

const getDataFilm = {
    getOne(id) {
        return axiosClient.get(`/movie/${id}`);
    },
    getNowPlay() {
        return axiosClient.get('/movie/now_playing');
    },
    getTopMoive() {
        return axiosClient.get('/movie/top_rated');
    },
    getTopTvShow() {
        return axiosClient.get('/tv/top_rated');
    }
};

export { getDataFilm }