import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <h2 className="text-5xl font-poppins font-bold">this is a Home pagse</h2>
        </div>
    );
};

export default Home;