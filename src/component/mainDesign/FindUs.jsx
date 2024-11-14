import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h1 className="mt-10 mb-5">Find Us On</h1>
            <div className="join join-vertical w-full">
                <button className="btn join-item justify-start pl-6"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start pl-6"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item justify-start pl-6"><FaInstagram></FaInstagram>Instragram </button>
            </div>
        </div>
    )
};
export default FindUs