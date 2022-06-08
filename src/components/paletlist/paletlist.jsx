// import { palets } from "../../mocks/palets.jsx"; //mocked database
import { PaletService } from "../../service/paletservice.jsx"; //real database
import "./paletlist.css";
import React, { useEffect, useState } from "react";
import PaletListItem from "../paletlistitem/paletlistitem.jsx";

import PaletDetailsModal from "../modalpaletdetails/modalpaletdetails"; //testing modal

function PaletList() {
  const [palets, setPalets] = useState([]);

  const [SelectedPalet, setSelectedPalet] = useState({});

  const [paletModal, setPaletModal] = useState(false);

  const addItem = (paletIndex) => {
    const palet = {
      [paletIndex]: Number(SelectedPalet[paletIndex] || 0) + 1,
    };
    setSelectedPalet({ ...SelectedPalet, ...palet });
  };

  const removeItem = (paletIndex) => {
    const palet = {
      [paletIndex]: Number(SelectedPalet[paletIndex] || 0) - 1,
    };
    setSelectedPalet({ ...SelectedPalet, ...palet });
  };

  const getList = async () => {
    const response = await PaletService.getList();
    setPalets(response);
  };

  const getPaletById = async (paletId) => {
    const response = await PaletService.getById(paletId);
    setPaletModal(response);
    console.log(response);
    console.log(paletId);
    console.log(paletModal);
  };

  useEffect(() => {
    getList();
  }, []);

  // console.log(PaletService);
  return (
    <div className="PaletList">
      {palets.map((palet, index) => (
        // notice how the father(this file) is sending data to the son(PaletListItem file) within the paramaters each value is a parameter from the son(palet, Selectedqtd, index) -> notice how uniquely a function is passed
        <PaletListItem
          key={`PaletListItem-${index}`}
          palet={palet}
          Selectedqtd={SelectedPalet[index]}
          index={index}
          onRemove={(index) => removeItem(index)}
          onAdd={(index) => addItem(index)}
          clickItem={(paletId) => getPaletById(palet)}
        />
      ))}

      {paletModal && (
        <PaletDetailsModal
          palet={paletModal}
          closeModal={() => setPaletModal(false)}
        />
      )}
    </div>
  );
}

export default PaletList;
