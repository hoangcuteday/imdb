
import ItemSwipper from "../ItemSwipper";
import Carousel from "react-material-ui-carousel";

function Swipper() {
    const idFilm = [
        1119173,
        603692,
        385687,
        502356,
        493529,
        640146,
        667538,
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