// import { palets } from "../../mocks/palets.jsx"; //mocked database
import { PaletService } from "../../service/paletservice.jsx"; //real database
import "./paletlist.css";
import React, { useEffect, useState, useCallback } from "react";
import PaletListItem from "../paletlistitem/paletlistitem.jsx";
import { ActionMode } from "../../constants";
import PaletDetailsModal from "../modalpaletdetails/modalpaletdetails"; //testing modal
import { matchByText } from "../../helpers/utils";

function PaletList({
  paletCreated,
  mode,
  updatePalet,
  deletePalet,
  EditedPalet,
  RemovedPalet,
}) {
  const [palets, setPalets] = useState([]);
  const [SelectedPalet, setSelectedPalet] = useState({});
  const [paletModal, setPaletModal] = useState(false);
  const [FilteredPalets, setFilteredPalets] = useState([]);

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

  const addPaletToList = (palet) => {
    const list = [...palets, palet];
    setPalets(list);
  };
  useEffect(() => {
    if (paletCreated) addPaletToList(paletCreated);
  }, [paletCreated]);

  async function getList() {
    const response = await PaletService.getList();
    setPalets(response);
  }

  const getPaletById = async (paletId) => {
    const response = await PaletService.getById(paletId);
    const mapper = {
      [ActionMode.NORMAL]: () => setPaletModal(response),
      [ActionMode.UPDATE]: () => updatePalet(response),
      [ActionMode.DELETE]: () => deletePalet(response),
    };

    mapper[mode]();
  };

  const adPaletToList = useCallback(
    (palet) => {
      const list = [...palets, palet];
      setPalets(list);
    },
    [palets]
  );

  const filterByTitle = ({ target }) => {
    const list = [...palets].filter(({ title }) =>
      matchByText(title, target.value)
    );
    setFilteredPalets(list);
  };

  useEffect(() => {
    if (paletCreated && !palets.map(({ id }) => id).includes(paletCreated.id)) {
      adPaletToList(paletCreated);
    }
    setFilteredPalets(palets);
  }, [adPaletToList, paletCreated, palets]);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    getList();
  }, [EditedPalet]);

  useEffect(() => {
    getList();
  }, [EditedPalet, RemovedPalet]);

  // console.log(PaletService);
  return (
    <div className="PaletList-Wrapper">
      <input
        className="PaletList-filter"
        onChange={filterByTitle}
        placeholder="Search for a palet."
      />
      <div className="PaletList">
        {FilteredPalets.map((palet, index) => (
          <PaletListItem
            mode={mode}
            key={`PaletListItem-${index}`}
            palet={palet}
            Selectedqtd={SelectedPalet[index]}
            index={index}
            onAdd={(index) => addItem(index)}
            onRemove={(index) => removeItem(index)}
            clickItem={() => getPaletById(palet._id)}
          />
        ))}

        {paletModal && (
          <PaletDetailsModal
            palet={paletModal}
            closeModal={() => setPaletModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default PaletList;
