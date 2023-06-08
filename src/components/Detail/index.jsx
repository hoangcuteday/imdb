import { faPlay, faTrailer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Detail(props) {

    const { film } = props;


    return (
        <div className="w-full flex flex-col lg:flex-row px-12">
            <div className="lg:w-[23%] flex flex-col lg:mr-28">
                <img className="rounded-2xl" src={`https://image.tmdb.org/t/p/original/${film?.poster_path}`}></img>
                <button className="border-white border-[1.5px] text-center w-full bg-[#b9b9ff33] hover:bg-[#24246b33] rounded-2xl py-2 mt-4 text-xl text-black"><FontAwesomeIcon icon={faPlay} /> Watch</button>
            </div>
            <div className="flex flex-col flex-1 text-left lg:mt-0 mt-4">
                <span className="lg:text-4xl text-left text-2xl text-[#30b2c6] font-medium">{film?.title}</span>
                <a href="#trailer"><button className="border-white border-[1.5px]  lg:w-[20%] w-[50%] bg-[#b9b9ff33] hover:bg-[#24246b33] rounded-2xl py-2 mt-4 text-2xl text-black"><FontAwesomeIcon className="text-base mx-2" icon={faTrailer}/>Trailer</button></a>
                <div className="lg:w-[70%] mt-2">
                    <span className="text-xl font-normal text-black">Storyline:</span>
                    <p className="mt-2 text-base font-medium">{film?.overview}</p>
                </div>
                <div className="mt-4">
                    <h1 className="my-4 text-gray-500 font-normal text-base">Rating:  <span className="text-black font-medium ml-4">{parseInt(film.vote_average).toFixed(1)}</span></h1>
                    <h1 className="my-4 text-gray-500 font-normal text-base">Release:  <span className="text-black font-medium ml-4">{film.release_date}</span></h1>
                    <h1 className="my-4 text-gray-500 font-normal text-base">Genres:
                        <span className="text-black font-medium ml-4 italic">
                            {
                                film?.genres?.map((value, index) => {
                                    if (index < film.genres.length - 1) return (value.name + ", ")
                                    else return value.name
                                })
                            }
                        </span>
                    </h1>
                    <h1 className="my-4 text-gray-500 font-normal text-base">Duration:  <span className="text-black font-medium ml-4">{film.runtime} min</span></h1>
                </div>
            </div>
        </div>
    );
}

export default Detail;