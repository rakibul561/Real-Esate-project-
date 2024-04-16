import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const NewsDetail = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    console.log(idInt);
    const item = jobs.find(job => job.id == idInt);
    console.log(item);

    const { estate_title, image_url, segment_name, price, description, } = item;

    return (
        <div>
            <Navbar />
            <div className="hero min-h-screen rounded-xl bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src= {image_url} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{estate_title} !</h1>
                        <p className="py-6"> {description}</p>
                        <h2 className="text-3xl font-bold">Name: {segment_name}</h2>
                        <p className="text-[#23BE0A] text-3xl">{price}</p>
                        <div className="card-actions justify-end">
                            <Link to= '/' className="btn bg-[#23BE0A] text-white"> Back to Home </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
