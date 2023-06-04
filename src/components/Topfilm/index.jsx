import { useEffect, useState } from "react";
import { getDataFilm } from "../../api/movieApi";
import ItemTop from "../ItemTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";

function Topfilm({ check = "movie" }) {

    const [film, setFilm] = useState([]);

    useEffect(() => {
        const fetchFilm = async () => {
            const data = (check !== "movie")  ? await getDataFilm.getTopTvShow() : await getDataFilm.getTopMoive();
            setFilm(data.data.results.slice(0, 10));
        }

        fetchFilm();
    }, [])

    return (
        <div className="flex flex-col w-full bg-white drop-shadow-2xl rounded-2xl rounded-b-none mb-10">
            <span className="text-2xl font-semibold p-5 lg:text-left text-center text-gray-500">Top rate {check}<FontAwesomeIcon className="m-0.5 ml-1 text-black" icon={faRankingStar} /></span>
            {
                film.map((value, index) => {
                    return (
                        <ItemTop key={index} film={value} />
                    )
                })
            }

        </div>
    );
}

export default Topfilm;