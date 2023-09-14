import Hero from "../components/Hero";
import NewListings from "../components/NewListings";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
import Awards from "../components/awards/Awards";
import Location from "../components/location/Location";
import Team from "../components/team/Team";

function Home() {
  return (
    <div className="  ">
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* New Listings */}
      <NewListings />
      <Awards />
      <Location />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
