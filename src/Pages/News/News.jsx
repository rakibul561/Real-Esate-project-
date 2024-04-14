
const News = ({ data }) => {
    const { estate_title, image_url ,segment_name,price,description} = data;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
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

                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Property</button>
                </div>
            </div>
        </div>
    );
};

export default News;