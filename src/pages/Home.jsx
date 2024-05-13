import Categories from "../components/Categories/Categories.jsx";
import Copyright from "../components/Copyright/Copyright.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../components/Hero/Hero.jsx";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs.jsx";
const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <WhyChooseUs />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
