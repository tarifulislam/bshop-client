import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation(); 
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();


    const handleAddToCart = () => {

        if(user && user.email){
            // console.log(food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} addeded to your cart`,
                    showConfirmButton: false,
                    timer: 1500
                    });
                    refetch();
                }
            })


        }else{
            Swal.fire({
                title: "You are not login",
                text: "please loogin add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                } 
              });
        }


    }
    return (
        <div className="card w-full bg-base-100 shadow-xl ">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=" bg-black text-white px-2  py-1 absolute right-6 top-4">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                <button onClick={handleAddToCart} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;


// axios install  --------------------------------
// npm install axios

// axios.get('http://localhost:5000/carts', cartItem)
// .then(res => {
//     console.log(res.data);
// })

// axios.post('http://localhost:5000/carts', cartItem)
// .then(res => {
//     console.log(res.data);
// })


// tanstack install `-------------------
// npm i @tanstack/react-query

// import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
// const queryClient = new QueryClient();

{/* <QueryClientProvider client={queryClient}>
<Example />
</QueryClientProvider> */}