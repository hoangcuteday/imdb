import axiosClient from "./axoisClient";

const getDataFilm = {
    getOne(id) {
        return axiosClient.get(`/movie/${id}`);
    },
    getPopularMovie() {
        return axiosClient.get('/movie/popular');
    },
    getPopularTv(){
        return axiosClient.get('/tv/popular');
    },
    getTopMoive() {
        return axiosClient.get('/movie/top_rated');
    },
    getTopTvShow() {
        return axiosClient.get('/tv/top_rated');
    }
};

export { getDataFilm }