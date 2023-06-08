import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames from "classnames/bind";
import style from "./ItemTop.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function ItemTop(props) {

    const { film } = props;

    return (
        <Link to={(film?.title) ? `/movie/${film.id}` : `/tv/${film.id}`}>
            <div onClick={() => { window.scrollTo(0, 0) }} className={cx("wrapper", "flex p-4 border-[#7adeee] border-b-[1px] cursor-pointer max-h-32")}>
                <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} className="lg:w-[20%] w-[6%]" />
                <div className="w-[80%] ml-2 flex justify-between flex-col my-1">
                    <span className={cx("text", "text-sm font-bold")}>{film?.title || film?.name}</span>
                    <div className="flex justify-between">
                        <span className="text-[white] bg-yellow-300 rounded-lg px-1">{film.vote_average}<FontAwesomeIcon icon={faStar} className="ml-1" /></span>
                        <span className="mr-1 text-gray-400">{film?.release_date || film?.first_air_date}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ItemTop;