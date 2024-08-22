import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Bookshop | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
// 5:18
// react-helmet --------------------------------------
// npm i react-helmet-async
// import { HelmetProvider } from 'react-helmet-async'; // import it in -- main.jsx.
{/* <HelmetProvider> paste here child component </HelmetProvider> // wrapping main.jsx all propes using this. */}


// import { Helmet } from 'react-helmet-async'; // import it in in  -- page component..

{/* <Helmet>
    <title>BistruBoss | Home</title>
</Helmet> */}
