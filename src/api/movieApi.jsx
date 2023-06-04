import axiosClient from "./axoisClient";

const getDataFilm = {
    getOne(id) {
        return axiosClient.get(`/movie/${id}`);
    },
    getNowPlay(){
        return axiosClient.get('/movie/now_playing');
    }
};

export { getDataFilm }