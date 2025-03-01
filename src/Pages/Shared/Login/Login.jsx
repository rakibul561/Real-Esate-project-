import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Button from "./Button";
import 'animate.css';

const Login = () => {
    const { signIn, googleLoginUser, } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(googleLoginUser);
    console.log('this is a location', location);

    const handleLogin = event => {
        event.preventDefault();
        console.log(event.currentTarget);
        const form = new FormData(event.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location.state ? location.state : '/')
                alert('user login succesfully')

            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-center text-3xl font-bold animate__wobble">Please Login</h1>
                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"
                            name="email"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password"
                            name="password"
                            className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center">Crate a new Account <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
            </div>
            <div className="text-center">
                <Button></Button>
            </div>
        </div>
    );
};

export default Login;