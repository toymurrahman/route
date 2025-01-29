import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div>
            <h1>pew pew</h1>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Home;