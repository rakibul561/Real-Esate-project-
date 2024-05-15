import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import News from "../News/News";
import Client from "./Client";
import Extra from "./Extra";
// import Fotter from "../Footer/Fotter";

const Home = () => {

    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div>
                <div> 
                    <h1 className="text-center font-bold text-5xl mt-8 text-[#23BE0A]">Estate Section</h1>
                    <p className="text-center font-semibold mt-2">His estate, a magnificent expanse, boasted regal architecture <br /> amidst manicured gardens, a testament to opulence</p>
                </div>
                 
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {
                     data.map(aData => <News
                     key={aData.id}
                     data = {aData}
                     >
                     </News>)   
                    }
                </div>
                {/* <Fotter></Fotter> */}
                <Client></Client>
                {/* <div className="mt-8">
                    <Extra></Extra>
                </div> */}
                <Extra></Extra>
            </div>
        </div>
    );
};

export default Home;