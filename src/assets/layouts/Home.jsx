import { Outlet } from "react-router-dom";
import Header from "../../component/Header";
import LatestNews from "../../component/LeatestNews";
import Laft from "../../component/mainDesign/Laft";
import Right from "../../component/mainDesign/rigt";
import Navbar from "../../component/Navber";


const Home = () => {
    return (
        <div>
            <header> <Header></Header>
                <section className="w-11/12 mx-auto"><LatestNews></LatestNews></section>
                <nav><Navbar></Navbar></nav>
            </header>


            <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
               <aside className="col-span-3"><Laft></Laft></aside>
               <aside className="col-span-6">Dragon News Home
                <Outlet></Outlet>
               </aside>
               <aside className="col-span-3"><Right></Right></aside>

            </main>

        </div>
    )
}


export default Home;