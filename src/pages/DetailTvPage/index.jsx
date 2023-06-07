import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataFilm } from "../../api/movieApi";

function DetailTvPage() {

    const { id } = useParams();
    const [film, setFilm] = useState({});

    useEffect(() => {
        const fetchFilm = async () => {
            const data = await getDataFilm.getOnetv(id);
            setFilm(data.data);
        }

        fetchFilm();
    }, [id])

    return(
        <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`}></img>
    )
}

export default DetailTvPage;