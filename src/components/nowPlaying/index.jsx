import { useEffect, useRef, useState } from "react";
import { getDataFilm } from "../../api/movieApi";
import ItemMovie from "../ItemMovie";

import classNames from "classnames/bind";
import style from "./NowPlaying.module.scss";

const cx = classNames.bind(style);

function NowPlaying() {

    const btnmRef = useRef();
    const btntRef = useRef();
    const mRef = useRef();
    const tvRef = useRef();

    const [film, setFilm] = useState([]);
    const [tv, setTv] = useState([]);

    useEffect(() => {
        btnmRef.current.classList.add("bg-white", "border-[#7adeee]", "border-[1px]");
        const fetchFilm = async () => {
            const data = await getDataFilm.getPopularMovie();
            const data1 = await getDataFilm.getPopularTv();
 
            setTv(() => data1.data.results);
            setFilm(() => data.data.results);
        }

        fetchFilm();
    }, [])

    const handleBtnM = () => {
        mRef.current.classList.remove("hidden");
        tvRef.current.classList.add("hidden");
        btntRef.current.classList.remove("bg-white", "border-[#7adeee]", "border-[1px]");
        btnmRef.current.classList.add("bg-white", "border-[#7adeee]", "border-[1px]");
    }

    const handleBtnT = () => {
        tvRef.current.classList.remove("hidden");
        mRef.current.classList.add("hidden");
        btnmRef.current.classList.remove("bg-white", "border-[#7adeee]", "border-[1px]");
        btntRef.current.classList.add("bg-white", "border-[#7adeee]", "border-[1px]");
    }

    return (
        <div className="flex flex-col h-max">
            <div className="pb-2">
                <p className="text-3xl text-black font-semibold pb-2">Popular</p>
                <div className="py-2">
                    <button ref={btnmRef} onClick={handleBtnM} className={cx("py-1 px-3 hover:bg-white border-[#7adeee] hover:bg-white mr-3 rounded-md hover:border-[#7adeee] hover:border-[1px]")}>Movies</button>
                    <button ref={btntRef} onClick={handleBtnT} className={cx("py-1 px-3 hover:bg-white mr-3 rounded-md hover:border-[#7adeee] hover:border-[1px]")}>TV shows</button>
                </div>
            </div>
            <div ref={mRef} className="flex-1 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 w-full h-max">
                {
                    film.map((value, index) => {
                        return (
                            <ItemMovie key={index} film={value} />
                        )

                    })
                }
            </div>
            <div ref={tvRef} className="hidden flex-1 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 w-full h-max">
                {
                    tv.map((value, index) => {
                        return (
                            <ItemMovie key={index} film={value} />
                        )

                    })
                }
            </div>
        </div>
    );
}

export default NowPlaying;