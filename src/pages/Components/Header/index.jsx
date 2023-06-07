import { faFilm, faList, faTvAlt, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRef } from "react";
import Search from "../../../components/Search";



function Header() {


    const ulRef = useRef();

    function handleIcon() {
        ulRef.current.classList.toggle('hidden')
    }

    return (
        <div className="w-[90%] flex flex-col justify-between text-center m-auto mb-8">
            <div className="w-full text-left my-4">
                <span className="text-5xl text-[black] font-bold tracking-tighter">MOV<FontAwesomeIcon className="text-[#17a1b7] ml-[4px]" icon={faFilm} />E</span>
            </div>
            <div className="w-full flex justify-between items-center text-center ml-1">
                <div className="text-left mr-5 relative">
                    <FontAwesomeIcon onClick={handleIcon} icon={faList} className="text-3xl hover:text-[#17a1b7] hover:cursor-pointer" />
                    <ul ref={ulRef} className="absolute z-10 w-max hidden text-[black] font-sans py-2 mt-2 rounded-xl bg-[white] drop-shadow-2xl">
                        <li className="p-2 my-2 mx-3 hover:cursor-pointer hover:bg-[#7adeee] rounded-2xl">
                            <FontAwesomeIcon icon={faVideoCamera} className="mx-2  text-[#F0E68C]" />
                            <span className="font-bold">Movies</span>
                        </li>
                        <li className="p-2 my-2 mx-3  hover:cursor-pointer  hover:bg-[#7adeee] rounded-2xl">
                            <FontAwesomeIcon icon={faTvAlt} className="mx-2  text-[#F0E68C]" />
                            <span className="font-bold">TV shows</span>
                        </li>
                    </ul>
                </div>
               <Search />
            </div>
        </div>
    );
}

export default Header;