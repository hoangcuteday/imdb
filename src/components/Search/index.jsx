import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { getDataFilm } from "../../api/movieApi";
import ItemSearch from "../ItemSearch";

function Search() {

    const listRef = useRef();

    const [search, setSearch] = useState('');
    const [list, setList] = useState([]);


    useEffect(() => {
        const fetchFilm = async () => {
            const data = await getDataFilm.getSearch({ query: search, });
            setList(data.data.results.slice(0, 5))
        }
        fetchFilm();
    }, [search])

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleBlur = () => {
        const timer = setTimeout(() => {
            listRef.current.classList.add("hidden")
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }

    return (
        <div className="flex-1 relative w-full">
            <div className="flex justify-center items-center text-center w-full bg-white rounded-md drop-shadow-2xl">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="hover:cursor-pointer px-4 text-xl text-[gray]" />
                <input onFocus={() => listRef.current.classList.remove("hidden")} onBlur={handleBlur} value={search} onChange={handleSearch} className="flex-1 py-2 border-none outline-none rounded-md" placeholder="Search......" />
            </div>
            <div ref={listRef} className=" absolute top-[103%] z-10 bg-[white] w-[90%] rounded-lg left-[5%]">
                {
                    list.map((value, index) => {
                        return (
                            <ItemSearch key={index} film={value} />
                        )
                    })
                }
                {
                    (list.length === 0) ? <></> : <div className="hover:bg-[#7adeee] py-2 rounded-b-md cursor-pointer">
                        <span className="text-center lg:text-lg text-base font-medium text-[#128294]">View All Results...</span>
                    </div>
                }
            </div>
        </div>
    );
}

export default Search;