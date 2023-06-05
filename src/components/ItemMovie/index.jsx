import classNames from "classnames/bind";
import style from "./ItemMovie.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function ItemMovie(props) {

    const { film } = props;


    return (
        <div className={cx("wrapper", "items-center text-center cursor-pointer")}>
            <div className="flex-col flex bg-white drop-shadow-2xl rounded-2xl">
                <div className="h-[70%] relative">
                    <span className="absolute text-black text-sm top-[2%] left-[4%] px-1 rounded bg-[#7adeee]">HD</span>
                    <button className={cx("btn", "absolute top-[50%] left-[26%] bg-white text-black font-light text-sm px-4 py-2 rounded-xl hidden")}><FontAwesomeIcon icon={faPlay} /> Play Now</button>
                    <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} className="h-full rounded-2xl rounded-b-none" />
                </div>
                <div className="h-[30%] text-left px-4">
                    <div className="flex-col flex justify-between h-full w-full">
                        <span className="pt-4 pb-6 text-black font-bold text-[1rem]">{film?.title || film?.name}</span>
                        <p className="mb-3 text-gray-400 border-t-[1px] border-[#f3f9fe]">{film?.title && "Moive " || "TV show "}(2023)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemMovie;