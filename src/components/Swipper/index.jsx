
import ItemSwipper from "../ItemSwipper";
import Carousel from "react-material-ui-carousel";

function Swipper() {
    const idFilm = [
        502356,
        385687,
        447277,
        840326,
        569094,
        713704,
        605886,
        552688
    ];


    return (
        <div>
            <Carousel
            navButtonsAlwaysInvisible={true}
            navButtonsAlwaysVisible={true}
            autoPlay={true}
            interval={6000}
            animation={"slide"}
            duration={1000}
            swipe={true}
            indicators={false}
            >
                {
                    idFilm.map((value, index) => {
                        return (
                            <ItemSwipper id={value} key={index} />
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default Swipper;