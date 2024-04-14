import { Outlet } from "react-router-dom"
import Fotter from "../Pages/Footer/Fotter";
const Root = () => {
    return (
        <div >
           <div className = "max-w-7xl mx-auto mt-10 font-poppins">
           <Outlet></Outlet>
           </div>
           <div className="mt-12">
            <Fotter></Fotter>
           </div>
            
        </div>
        
    );
};

export default Root;