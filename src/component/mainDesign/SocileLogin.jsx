import { FaGithub, FaGoogle } from "react-icons/fa";

const  SocileLogin =()=>{
    return(
        <div>
            <h1 className="mt-3 mb-3">Login With</h1>
            <div className="flex  flex-col gap-2">
                <button className="btn"><FaGoogle></FaGoogle> Login With Google </button>
                <button className="btn"><FaGithub></FaGithub>Login With Github</button>
            </div>
        </div>
    )
};
export default SocileLogin;