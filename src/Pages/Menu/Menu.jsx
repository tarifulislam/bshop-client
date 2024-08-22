import { Helmet } from 'react-helmet-async'; 
import Cover from '../Shared/Cover/Cover';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


import menuImg from "../../assets/menu/1.jpg"
import dessertImg from "../../assets/menu/2.jpg"
import pizzaImg from "../../assets/menu/3.jpg"
import saladImg from "../../assets/menu/4.jpg"
import soupImg from "../../assets/menu/5.jpg"

// horar , Poem , skilled, cooking, kids

const Menu = () => {
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')


    return (
        <div>
            <Helmet>
                <title>bookshop | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"our books"}></Cover>
            <SectionTitle subHeading={"Don't Miss"} heading={"today's offer"}></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={dessert} title={"horar"} img={dessertImg}></MenuCategory>

            <MenuCategory items={pizza} title={"skill"} img={pizzaImg}></MenuCategory>
            
            <MenuCategory items={salad} title={"Poem"} img={saladImg}></MenuCategory>
        
            <MenuCategory items={soup} title={"Kids"} img={soupImg}></MenuCategory>
          
        </div>
    );
};

export default Menu;


// react-parallax -----------------------------------
// npm i react-parallax
// import { Parallax } from 'react-parallax';

{/* <Parallax
blur={{ min: -50, max: 50 }}
bgImage={img}
bgImageAlt="the dog"
strength={-200}
>
<div className="hero  h-[700px]" >
    add here your component all content
</div>
</Parallax> */}