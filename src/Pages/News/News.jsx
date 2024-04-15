
import { Link } from "react-router-dom";

const News = ({ data }) => {
    const { estate_title, image_url ,segment_name,price,description,id} = data;
    return (
        <div className="card card-compact    bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}!</h2>
                <div className="flex justify-between">
                     <div>
                     <h2 className="text-xl font-bold">{segment_name}</h2>
                     </div>
                     <div>
                        <p className=" text-[#23BE0A] font-bold">{price}</p>
                     </div>
                </div>

                <p>
                    {
                        description.length > 80 ?
                       <p> {description.slice(0,80)} </p>
                     
                       : <p>{description}</p>
                    }
                    
                    </p>


                <div className="card-actions justify-end">
                    <Link to= {`/data/${id}`} className="btn  btn-primary">View Property</Link>
                </div>
            </div>
        </div>
    );
};

export default News;