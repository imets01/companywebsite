import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import BannerDetails from "./components/bannerDetails/BannerDetails";
import Blog from "./components/blogs/Blog";
import Counter from "./components/counter/Counter";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="dark:bg-neutral-900 bg-neutral-200">
      <Navbar />
      <Hero />
      <Counter />
      <BannerDetails />
      <BannerDetails reverse={true} />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
