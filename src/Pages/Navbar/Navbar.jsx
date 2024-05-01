import { useContext, useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const [userOpen, setUserOpen] = useState();
    const { user, logOut } = useContext(AuthContext)

    const handleLogOUt = async () => {
        await logOut()
        if (logOut.insertedId) {
            alert('user login successfully')

        }
        Navigate("/login")
    }

    const navLinks = <>

        <li> <NavLink to='/'> Home</NavLink> </li>
        <li> <NavLink to='/about'>About</NavLink> </li>
        <li> <NavLink to='/user'> User Profile</NavLink> </li>
        <li> <NavLink to='/update'> Update Profile</NavLink> </li>


    </>


    return (
        <div className="navbar bg-base-300 rounded-lg mb-4 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> Dream <span className="text-[#23BE0A]">Home</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            {/* <div className="navbar-end gap-2">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/bspwk8t/1679870967357-01.jpg" />
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



            </div> */}
            <div>
                {user ? (
                    <button
                        onClick={() => setUserOpen(!userOpen)}
                        className="border-2 ml-28 border-[#FF497C] rounded-full w-[40px]"
                    >
                        <img
                            src={user?.photoURL}
                            alt=""
                            className="w-10 h-10 rounded-full"
                        />
                    </button>
                ) : (
                    <Link
                        to={"/login"}
                        className="bg-[#FF497C] hover:bg-[#ab3154]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
                    >
                        Login
                    </Link>
                )}

                {/* user Menu */}
                <div
                    className={`absolute z-50 ${userOpen ? "block" : "hidden"
                        } flex flex-col  gap-4  shadow-lg bg-base-200 px-8 py-4 top-16 `}
                >
                    <p className="text-sm  font-semibold">{user?.displayName}</p>
                    <p className="text-sm font-semibold">{user?.email}</p>

                    {
                        user && <button

                            className="bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded cursor-pointer"
                            onClick={handleLogOUt}
                        >
                            logout
                        </button>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;