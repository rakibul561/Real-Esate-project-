import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const News = ({ data }) => {

    useEffect(()=>{
        Aos.init();
    },[]);

    const { estate_title, location, status, image, segment_name, price, description, id } = data;

    return (
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="zoom-out-down">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}!</h2>
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-xl font-bold">{segment_name}</h2>
                    </div>
                    <div>
                        <p className="text-[#23BE0A] font-bold">{price}</p>
                    </div>
                </div>
                <div>
                    <h1><span className="text-xl font-bold">Location</span>: {location}</h1>
                </div>
                <p>
                    {description.length > 80 ?
                        <p> {description.slice(0, 80)} </p>
                        : <p>{description}</p>
                    }
                </p>
                <p className="text-3xl text-success">Status: {status}</p>
                <div className="card-actions justify-end">
                    <Link to={`/data/${id}`} className="btn  btn-primary">View Property</Link>
                </div>
            </div>
        </div>
    );
};

export default News;
