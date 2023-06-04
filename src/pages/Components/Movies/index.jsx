import ListMovie from "../../../components/listMovie";
import RecommentMovie from "../../../components/recommentMovie";

function Movies() {
    return (
        <div className="grid lg:grid-cols-12 grid-cols-1 grid-rows-1 mt-12 h-max gap-6">
            <div className="lg:col-span-9 col-span-1 row-span-1">
                <ListMovie />
            </div>
            <div className="lg:col-span-3 col-span-1 ">
                <RecommentMovie />
            </div>
        </div>
    );
}

export default Movies;