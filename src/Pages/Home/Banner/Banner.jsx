import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel} from 'react-responsive-carousel';

import img1 from "../../../assets/home/1.jpg"
import img2 from "../../../assets/home/2.jpg"
import img3 from "../../../assets/home/3.jpg"
import img4 from "../../../assets/home/4.jpg"
import img5 from "../../../assets/home/5.jpg"

// import img3 from "../../../assets/home/03.png"
// import img4 from "../../../assets/home/04.jpg"
// import img5 from "../../../assets/home/05.png"

const Banner = () => {
    return (
        <Carousel className="text-center">
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
        </Carousel>
    );
};

export default Banner;
// react-responsive-carousel ==========
// https://github.com/leandrowd/react-responsive-carousel
// npm i react-responsive-carousel
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

{/* <Carousel className="text-center">
    <div>
        <img src={img1} />
    </div>
    <div>
        <img src={img2} />
    </div>
    <div>
        <img src={img3} />
    </div>
</Carousel> */}
