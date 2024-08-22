import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


import { BiSolidQuoteSingleRight } from "react-icons/bi";


import { useEffect, useState } from "react";

const Testimonials = () => {
    const [reviews, setReviews]= useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
       .then(res => res.json())
       .then(data => setReviews(data))
    },[])

    return (
        <section className=" my-20">
            <SectionTitle subHeading={"What Our Client Say"} heading={"Testimonials"}></SectionTitle>  
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                 {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className=" mx-24 flex flex-col items-center text-center space-y-4">
                            <Rating
                            style={{ maxWidth: 180 }}
                            value={review?.rating}
                            readOnly
                            />
                             <span className=" text-6xl text-slate-400"> <BiSolidQuoteSingleRight /></span>
                            <p>{review?.details}</p>
                            <h3 className=" text-2xl text-orange-400">{review?.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
           
    
            </Swiper>
                  
        </section>
    );
};

export default Testimonials;


// swipper carosel Navigation -------------

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';


// <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
// <SwiperSlide>Slide 1</SwiperSlide>
// <SwiperSlide>Slide 2</SwiperSlide>
// <SwiperSlide>Slide 3</SwiperSlide>
// <SwiperSlide>Slide 4</SwiperSlide>
// </Swiper>


// react-rating - Basic usage - Read only ----------------------------
// npm i @smastrom/react-rating
// import { Rating } from "@smastrom/react-rating";
// import '@smastrom/react-rating/style.css'

{/* <Rating
style={{ maxWidth: 180 }}
value={review?.rating}
readOnly
/> */}


// React Icons ---------------------------------------------------------
// npm install react-icons --save
// import { BiSolidQuoteSingleRight } from "react-icons/bi";
{/* <BiSolidQuoteSingleRight /> */}


