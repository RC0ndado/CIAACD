import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NewListings from "../components/NewListings";

function Home() {
  return (
    <div className="  ">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />

      {/* New Listings */}
      <NewListings />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
