import classNames from "classnames/bind";
import style from "./ItemSearch.module.scss";

const cx = classNames.bind(style);

function ItemSearch(props) {

    const { film } = props;

    return (
        <div className={cx("wrapper", "cursor-pointer w-full flex max-h-20 py-3 px-4 border-[1px] border-b-[#7adeee]")}>
            <img src={`https://image.tmdb.org/t/p/original/${film?.poster_path}`} className="lg:w-[7%] w-[10%]" />
            <div className="flex flex-col ml-4 justify-around text-left">
                <span className="text-black font-semibold lg:text-xl text-sm">{film?.title || film?.name}</span>
                <span className="text-gray-600 font-normal lg:text-base text-xs"><span className="rounded-lg px-1 bg-gray-500 text-sm text-white font-normal mr-2">HD</span>{film.media_type}</span>
            </div>
        </div>
    );
}

export default ItemSearch;