import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataFilm } from "../../api/movieApi";
import Detail from "../../components/Detail";
import Cast from "../../components/Detail/Cast";
import Trailer from "../../components/Trailer";

function DetailMoviePage() {

    const { id } = useParams();
    const [film, setFilm] = useState({});
    const [cast, setCast] = useState([]);

    useLayoutEffect(() => {
        const fetchFilm = async () => {
            const data = await getDataFilm.getOne(id);
            const data1 = await getDataFilm.getCastMovie(id);
            setFilm(data.data);
            setCast(data1.data.cast.slice(0, 4))
        }

        fetchFilm();
    }, [id])

    return (
        <div className="w-[90%] m-auto flex flex-col mt-4">
            <Detail film={film} />
            <Cast cast={cast} />
            <Trailer id={film?.videos?.results[2]?.key} />
        </div>
    )
}

export default DetailMoviePage;