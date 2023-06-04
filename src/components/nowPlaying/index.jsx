import { useEffect, useState } from "react";
import { getDataFilm } from "../../api/movieApi";
import ItemMovie from "../ItemMovie";

function NowPlaying() {

    const [film, setFilm] = useState([]);

    useEffect(() => {
        const fetchFilm = async () => {
            const data = await getDataFilm.getNowPlay();
            setFilm(data.data.results);
        }

        fetchFilm();
    }, [])


    return (
        <div className="flex flex-col h-max">
            <div className="pb-2">
                <p className="text-3xl text-black font-semibold pb-2">Now Playing</p>
                <div className="py-2">
                    <button className="py-1 px-3 bg-white mr-3 rounded-md border-[#7adeee] border-[1px]">Movies</button>
                    <button className="py-1 px-3 bg-white mr-3 rounded-md border-[#7adeee] border-[1px]">TV shows</button>
                </div>
            </div>
            <div className="flex-1 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 w-full h-max">
                {
                    film.map((value, index) => {
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