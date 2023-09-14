import Hero from "../components/Hero";
import NewListings from "../components/NewListings";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
import Awards from "../components/awards/Awards";

function Home() {
  return (
    <div className="  ">
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* New Listings */}
      <NewListings />
      <Awards />
      <Footer />
    </div>
  );
}

export default Home;
