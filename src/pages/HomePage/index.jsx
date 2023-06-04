import Swipper from "../../components/Swipper";
import Movies from "../Components/Movies";

function HomePage() {
    return (
        <div className="w-[90%] m-auto flex flex-col pl-1">
            <Swipper />
            <Movies />
        </div>
    );
}

export default HomePage;