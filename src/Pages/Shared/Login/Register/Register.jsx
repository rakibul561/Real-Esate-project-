import { Link } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState(false);
    const [password, setPassword] = useState(false);

    const { crateUser, updateUserProfile } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password, name, photo);

        setRegisterError('');
        setSuccess('');


        if (password.length < 6) {
            setRegisterError('password should be a last 6 charecters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('your password should have at least one upper case characters');
            return;
        }

        // crate User in 

        crateUser(email, password)
            .then(result => {
                updateUserProfile(name, photo)
                    .then(() => {
                        console.log(result.user);
                        setSuccess(true);
                        alert('Registration Successful!');
                    })

            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-center text-3xl font-bold">Please Register</h1>
                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name"
                            name="name"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL"
                            name="photo"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email"
                            name="email"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                            <input
                                type={password ? "text" : "password"}
                                placeholder="Password"
                                name="password"

                                className="input w-full input-bordered" required />
                            <span className="absolute top-3 right-2" onClick={() => setPassword(!password)}>

                                {
                                    password ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                {
                    registerError && <p className="text-red-700 text-center">{registerError} </p>
                }
                <p className="text-center">Alrady have an Account <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>


            </div>
        </div>
    );
};

export default Register;