import { Link } from "react-router-dom"
import icone from "../assets/user.png"

const Navbar = ()=>{
    return(
        <div className="flex justify-between p-5">
            <div></div>
            <div className="nav space-x-2">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="login flex gap-3 items-center">
                <div className="img">
                    <img src={icone} alt="" />
                </div>
                <div className="btn"> Login</div>
            </div>
        </div>
    )
}
export default Navbar