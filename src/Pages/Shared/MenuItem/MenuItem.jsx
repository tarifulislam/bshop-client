

const MenuItem = ({item}) => {
    const {image, price, name, recipe} = item;
    return (
        <div className=" flex space-x-4">
            <img className=" w-[100px] " src={image} alt="" />
            <div>
               <h3 className=" uppercase">{name} ------------</h3> 
               <p className=" mt-3">{recipe}</p>
            </div>
            <p className=" text-yellow-500">{price}</p>
        </div>
    );
};

export default MenuItem;