import { useEffect, useState } from "react";
import { getDataFilm } from "../../api/movieApi";

import classNames from "classnames/bind";
import styles from './ItemSwipper.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ItemSwipper({ id }) {

    const [film, setFilm] = useState({});

    useEffect(() => {
        const fetchFilm = async () => {
            const data = await getDataFilm.getOne(id);
            setFilm(data.data);
        }

        fetchFilm();
    }, [])

    return (
        <div className={cx('wrapper', 'w-full rounded-2xl relative')}>
            <img className="w-full rounded-2xl" src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} />
            <span className={cx("text", "lg:text-4xl sm:text-3xl text-xl font-semibold absolute top-[14%] text-[white] left-[5%]")}>{film.original_title}</span>
            <span className={cx("text", "absolute top-[40%] left-[5%] text-[#fcfcfd] text-sm max-w-sm  line-clamp-1 sm:line-clamp-3")}>{film.overview}</span>
            <span className="absolute top-[-1%] text-[white] right-[0] rounded-2xl rounded-br-none py-1 px-5 bg-[#ece92c]">{parseInt(film.vote_average).toFixed(1)}<FontAwesomeIcon className="ml-2" icon={faStar} /></span>
            <div className="absolute bottom-[20%] left-[5%] text-[white]">
            <Link to={`/movie/${film.id}`}>
                <button className="text-base py-2 px-2 rounded-2xl border-white border-[1.5px] hover:bg-[white] hover:text-[black]">Watch Now</button>
            </Link>
            </div>
        </div>
    );
}

export default ItemSwipper;