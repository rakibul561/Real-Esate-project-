import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

    const { user,logOut } = useContext(AuthContext);

    const handleSignout = ()=>{
        logOut()
        .then()
        .catch(error=>{
            console.error(error);
        })
    }

    const navLinks = <>

        <li> <NavLink to='/'> Home</NavLink> </li>
        <li> <NavLink to='/about'>About</NavLink> </li>
        <li> <NavLink to='/career'> Career</NavLink> </li>
        <li> <NavLink to='/user'> User Profile</NavLink> </li>
        <li> <NavLink to='/update'> Update Profile</NavLink> </li>


    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> Real <span className="text-[#23BE0A]">Commercial</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>

                {
                    user ?
                        <button onClick={handleSignout} className="btn text-white bg-[#23BE0A]">Sign out</button>
                        :
                        <Link to='/login' >
                            <button className="btn text-white bg-[#23BE0A]">Login</button>
                        </Link>
                }



            </div>
        </div>
    );
};

export default Navbar;