import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>pew pew</h1>
           <Header></Header>

           {
            navigation.state === "loading" ? <p>Loading</p>:
            <Outlet/>
           }
           
           <Footer></Footer>
        </div>
    );
};

export default Home;