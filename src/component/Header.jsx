import moment from "moment";
import logo from "../assets/logo.png"
const Header =()=>{
    return(
        <div className="flex flex-col justify-center items-center gap-2">
           <div className="p-5">
           <img src={logo} className="w-[450px]" alt="" />
           </div>
            <h1>sifat is the best</h1>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>

    )
}
export default Header;