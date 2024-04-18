import Navbar from "./Navbar/Navbar";

const About = () => {
    <Navbar></Navbar>
    return (
        
        <div>
            <Navbar></Navbar>
            <div className="border">
            <div className="card items-center glass">
                <h1 className="text-4xl font-bold">About Me:</h1>
                <figure><img className="w-56" src="https://i.ibb.co/bspwk8t/1679870967357-01.jpg" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">Rakibul Hasan</h2>
                     <p className="text-2xl font-bold">01982535062</p>
                     <h2><span className="text-green-700 text-2xl font-bold">Gmail: </span>rakibulhasan3929@gmail.com</h2>
                   
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;