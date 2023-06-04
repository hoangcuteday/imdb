import ListMovie from "../../../components/listMovie";
import SuggestMovie from "../../../components/suggestMovie";

function Movies() {
    return (
        <div className="grid lg:grid-cols-12 grid-cols-1 grid-rows-2 lg:grid-rows-1 mt-12">
            <div className="lg:col-span-9 col-span-1 row-span-1">
                <ListMovie />
            </div>
            <div className="lg:col-span-3 col-span-1 row-span-1">
                <SuggestMovie />
            </div>
        </div>
    );
}

export default Movies;