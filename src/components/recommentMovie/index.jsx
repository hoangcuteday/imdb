import Topfilm from "../Topfilm";

function RecommentMovie() {
    return (
        <div className="flex flex-col">
            <Topfilm />
            <Topfilm check={"TV Show"} />
        </div>
    );
}

export default RecommentMovie;