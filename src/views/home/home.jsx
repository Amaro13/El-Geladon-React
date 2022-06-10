import AddPaletModal from "../../components/modaladdpalet/modaladdpalet";
import Navbar from "../../components/navbar/navbar";
import PaletList from "../../components/paletlist/paletlist";
import "./home.css";
import { useState } from "react";

function Home() {
  const [ShowAddPalet, setShowAddPalet] = useState(false);
  const [paletToAdd, setpaletToAdd] = useState();
  return (
    <div className="Home">
      <Navbar createPalet={() => setShowAddPalet(true)} />
      <div className="Home_container">
        <PaletList paletCreated={paletToAdd} />
        {ShowAddPalet && (
          <AddPaletModal
            closeModal={() => setShowAddPalet(false)}
            onCreatePalet={(palet) => setpaletToAdd(palet)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
