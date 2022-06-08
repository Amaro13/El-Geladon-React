import Navbar from "../../components/navbar/navbar";
import PaletList from "../../components/paletlist/paletlist";
import "./home.css";

function Home() {
  return (
    <div className="Home">
      <Navbar/>
      <div className="Home_container">
        <PaletList />
      </div>
    </div>
  );
}

export default Home;
