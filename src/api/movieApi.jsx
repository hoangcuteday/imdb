import axiosClient from "./axoisClient";

const getDataFilm = {
    getOne(id) {
        return axiosClient.get(`/movie/${id}`);
    }
};

export { getDataFilm }