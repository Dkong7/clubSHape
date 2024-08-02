import Hero from "../components/Hero";
import Programs from "../components/Programs";
import Reasons from "../components/Reasons";
import Planes from "../components/Planes";
import Testimonials from "../components/Testimonials";
import Join from "../components/Join";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
      <Reasons />
      <Planes />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
};

export default HomePage;
