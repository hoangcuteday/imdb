
function Cast({ cast }) {

    return (
        <>
            <h1 className="px-12 mt-10 mb-4 lg:text-5xl sm:text-2xl text-xl font-semibold text-gray-600">Cast</h1>
            <div className="flex flex-row flex-wrap px-12 ">
                {
                    cast.map((value, index) => {
                        return (
                            <div key={index} className="w-[20%] h-[40%] m-4 flex flex-col">
                                <img className="lg:w-[60%] h-[50%] w-[100%] rounded-2xl" src={`https://image.tmdb.org/t/p/original/${value?.profile_path}`} />
                                <div className="mt-1">
                                    <h1 className="lg:text-base text-sm text-black font-medium">{value?.name}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Cast;