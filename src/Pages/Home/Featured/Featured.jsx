import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/4.jpg"
import './feature.css'

const Featured = () => {
    return (
        <div className="feature-bg  bg-fixed text-white" >
            <div className=" bg-black  bg-opacity-50  pb-16">
                <SectionTitle subHeading={"check it out"} heading={"Featured Item"}></SectionTitle>
                <div className="md:flex justify-center items-center  px-[10%] ">
                    <img className=" w-5/12" src={ featuredImg} alt="" />
                    <div className="md:ml-10">
                        <p>Aug 20, 2029</p>
                        <p className=" uppercase"> where can i get some?</p>
                        <p className=" my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum laboriosam nisi cupiditate, libero provident, reprehenderit et fugit commodi animi error quod inventore quasi dolorum itaque saepe, nesciunt tempore nostrum magni vel ea natus minus sapiente nobis. Voluptatem laudantium, reprehenderit quisquam quas accusamus, fuga, sit neque labore maxime at praesentium.</p>
                        <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                    </div>
                </div>


            </div>
            
        </div>
    );
};

export default Featured;