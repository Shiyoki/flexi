import Content from "../../components/Content";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Whats from "../../components/Whats";

const Home = () => {

    return (
        <div className="w-full h-screen">
            <div>
                <Header />
            </div>
            <Content />
            <Whats />
            <Footer />
        </div>
    )
};

export default Home;