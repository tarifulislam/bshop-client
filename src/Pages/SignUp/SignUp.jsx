import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const {createUser, updateProfileUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user ;
            console.log(loggedUser);
            updateProfileUser(data.name, data.photoURL )
            .then(()=> {
                // console.log("user profile updated")
                const userInfo = {
                    name: data.name,
                    email: data.email,
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if(res.data.insertedId){
                        console.log("user added to database");
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate("/");
                    }
                })

            })
            .catch(error => console.log(error))

        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"  {...register("name", {required:true})} name="name" placeholder="name" className="input input-bordered"  />
                    {errors.name && <span>Name field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text"  {...register("photoURL", {required:true})}  placeholder="photo URL" className="input input-bordered"  />
                    {errors.photoURL && <span>photoURL field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"  {...register("email" ,{required:true} )} name="email" placeholder="email" className="input input-bordered"  />
                    {errors.email && <span>Email field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>

                    <input type="password"  {...register("password", {
                        required: true,
                        minLength:6,
                        maxLength:20,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name="password" placeholder="password" className="input input-bordered"  />

                    {errors.password?.type === "required" && <p>Password is required</p>}
                    {errors.password?.type === "minLength" && <p>password must be 6 char</p>}
                    {errors.password?.type === "maxLength" && <p>Password less then 20 char</p>}
                    {errors.password?.type === "pattern" && <p>Password not valid </p>}

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                     <input className="btn btn-primary" type="submit" value="Signup" />
                </div>
            </form>
            <p className="px-6 pb-3"> new here <Link to="/login">login a accound</Link></p>
            <SocialLogin></SocialLogin>
            </div>
        </div>
        </div>
    );
};

export default SignUp;

// react-hook-form ----------------------------
// npm install react-hook-form

// const {register, handleSubmit, watch, formState: { errors }} = useForm()

// 7 video running --------------------

// Toukir@#12
// toukir@gmail.com

// Shihab@12

// Farjana@11

// Kalu@121

// Gorib12@

// Jalal@12

// Boltu@#112