
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    // const [menu, setMenu] = useState([])
    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // },[])

    const [menu] = useMenu()
    const polular = menu.filter(item => item.category === 'popular')
    
    return (
        <section className=" pb-12">
            <SectionTitle heading={"From Out menu"} subHeading={"Popular Items"}></SectionTitle>
            <div className=" grid grid-cols-2  gap-9">
                {
                  polular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)  
                }
            </div>
        </section>
    );
};

export default PopularMenu;