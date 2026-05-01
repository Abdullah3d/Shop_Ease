import ProductCard from "../components/ProductCard";
import Hero from "./Hero";
import NewCollection from "./NewCollection";
import AboutSection from "./AboutSection";
import BestSeller from "../components/BestSeller";
import OurProducts from "../components/OurProducts";
import Testimonials from "../components/Testimonials";
import DealOfDay from "../components/DealOfDay";

const Home = () => {
    return (
        <>
            <Hero />
            <NewCollection />
            <AboutSection />
            <BestSeller />
            <OurProducts />
            <DealOfDay />
            <Testimonials />
        </>
    );
};

export default Home;
