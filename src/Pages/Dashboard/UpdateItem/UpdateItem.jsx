
import { useLoaderData } from 'react-router-dom';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { register, handleSubmit, reset } = useForm();
     const {name, category, price,  recipe, _id} = useLoaderData();
     console.log(name, category, price,  recipe, _id);

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        

        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuItem = {
                name : data.name,
                category : data.category,
                price : parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if(menuRes.data.modifiedCount > 0){
                // reset();
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is updated to the menu`,
                showConfirmButton: false,
                timer: 1500
                });
            }

        }
        // console.log(res.data);
    }

    return (
        <div>
            <SectionTitle heading={"Update an Item"} subHeading={"Refresh info"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full  my-2 ">
                        <div className="label">
                            <span className="label-text">Recipe Name?</span>
                        </div>
                        <input type="text"  defaultValue={name} placeholder="Recipe Name"  {...register("name", {required: true})} className="input input-bordered w-full" />
                    </label>

                    <div className=" flex gap-6">
                        <label className="form-control w-full  my-6 ">
                            <div className="label">
                                <span className="label-text">category</span>
                            </div>
                            <select defaultValue={category} {...register("category", {required: true})} className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">salad</option>
                                <option value="pizza">pizza</option>
                                <option value="soup">soup</option>
                                <option value="dessert">dessert</option>
                                <option value="drinks">drinks</option>
                            </select>
                        </label>

                        <label className="form-control w-full  my-6 ">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input type="number" defaultValue={price} placeholder="price"  {...register("price", {required: true})} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe details</span>
                        </div>
                        <textarea  defaultValue={recipe} {...register("recipe")}  className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label>

                     <div className="form-control w-full  my-6">
                       <input {...register("image", {required: true})}  type="file" className="file-input w-full max-w-xs" />
                    </div> 

                    <button className=" btn btn-secondary">  Update Item  </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;