
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className=' space-y-4 pb-12'>
            <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11.00am to 10.00pm"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className=' text-4xl uppercase text-center -mt-16 text-white'>Horar</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className=' text-4xl uppercase text-center -mt-16 text-white'>Story</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className=' text-4xl uppercase text-center -mt-16 text-white'>Kids</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className=' text-4xl uppercase text-center -mt-16 text-white'>English</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className=' text-4xl uppercase  text-center -mt-16 text-white pb-9 '>Nature</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;


// swipper js Centered carosel  --------------------------
// npm install swiper
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';

// import { Pagination } from 'swiper/modules';

{/* <Swiper
slidesPerView={4}
spaceBetween={30}
centeredSlides={true}
pagination={{
clickable: true,
}}
modules={[Pagination]}
className="mySwiper"
>
    <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className=' text-4xl uppercase text-center -mt-16 text-white'>Salad</h3>
    </SwiperSlide>
    <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className=' text-4xl uppercase text-center -mt-16 text-white'>Salad</h3>
    </SwiperSlide>
    <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className=' text-4xl uppercase text-center -mt-16 text-white'>Salad</h3>
    </SwiperSlide>
    <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className=' text-4xl uppercase text-center -mt-16 text-white'>Salad</h3>
    </SwiperSlide>
    <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className=' text-4xl uppercase text-center -mt-16 text-white'>Salad</h3>
    </SwiperSlide>
</Swiper> */}