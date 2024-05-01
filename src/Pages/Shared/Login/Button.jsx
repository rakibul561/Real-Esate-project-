import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Button = () => {
    const navigate = useNavigate()
    const { googleLoginUser, githubLogin } = useContext(AuthContext);



    const handleGooglelogin = async () => {
        const userCredential = await googleLoginUser();
        console.log(userCredential);
        navigate("/")
    }


    return (
        <div className="space-x-64">
            <button
                onClick={handleGooglelogin}
                className="btn btn-success">Google Login </button>


            <button
                onClick={() => githubLogin()}
                className=" btn btn-success">github login </button>
        </div>
    );
};

export default Button;