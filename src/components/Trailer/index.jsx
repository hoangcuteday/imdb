
function Trailer({id}) {


    console.log(id);


    return (
        <div id="trailer" className="w-full mt-10 text-center">
                <span className="text-4xl  px-4 py-2 font-medium font-serif border-b-[4px] border-b-[#7adeee]">Trailer</span>
                <iframe src={`https://www.youtube.com/embed/${id}`} allowfullscreen={true} className="mt-8 w-full lg:h-[600px] h-[400px]"></iframe>
        </div>
    );
}

export default Trailer;