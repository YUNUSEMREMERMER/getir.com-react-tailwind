import Campaigs from "components/Campaigs";
import Cards from "components/Cards";
import Categories from "components/Categories";
import Favorites from "components/Favorites";
import Footer from "components/Footer";
import Header from "components/Header";
import HeroSection from "components/HeroSection";
import MobileApp from "components/MobileApp";


function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Categories/>
      <Campaigs/>
      <div className="container mx-auto max-w-7xl">
        <Favorites/>
        <MobileApp/>
        <Cards/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
