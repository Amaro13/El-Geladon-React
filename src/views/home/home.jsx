import AddEditPaletModal from "../../components/modaladdeditpalet/modaladdeditpalet";
import DeletePaletModal from "../../components/modaldeletepalet/modaldeletepalet";
import Navbar from "../../components/navbar/navbar";
import PaletList from "../../components/paletlist/paletlist";
import "./home.css";
import { useState } from "react";
import { ActionMode } from "../../constants";

function Home() {
  const [ShowAddPalet, setShowAddPalet] = useState(false);
  const [paletToAdd, setpaletToAdd] = useState();
  const [CurrentMode, setCurrentMode] = useState(ActionMode.NORMAL);
  const [paletToEdit, setpaletToEdit] = useState();
  const [paletToDelete, setpaletToDelete] = useState();
  const [EditedPalet, setEditedPalet] = useState();
  const [RemovedPalet, setRemovedPalet] = useState();

  const handleActions = (action) => {
    const newAction = CurrentMode === action ? ActionMode.NORMAL : action;
    setCurrentMode(newAction);
    // console.log(CurrentMode);
  };

  const handleDeletePalet = (paletToDelete) => {
    setpaletToDelete(paletToDelete);
  };

  const handleUpdatePalet = (paletToUpdate) => {
    setpaletToEdit(paletToUpdate);
    setShowAddPalet(true);
  };

  const handleCloseModal = () => {
    setShowAddPalet(false);
    setpaletToAdd();
    setpaletToDelete();
    setpaletToEdit();
    setCurrentMode(ActionMode.NORMAL);
  };

  return (
    <div className="Home">
      <Navbar
        mode={CurrentMode}
        createPalet={() => setShowAddPalet(true)}
        RemovedPalet={RemovedPalet}
        deletePalet={() => handleActions(ActionMode.DELETE)}
        updatePalet={() => handleActions(ActionMode.UPDATE)}
      />

      <div className="Home_container">
        <PaletList
          mode={CurrentMode}
          deletePalet={handleDeletePalet}
          updatePalet={handleUpdatePalet}
          paletCreated={paletToAdd}
          EditedPalet={EditedPalet}
        />
        {ShowAddPalet && (
          <AddEditPaletModal
            mode={CurrentMode}
            closeModal={handleCloseModal}
            paletToUpdate={paletToEdit}
            onCreatePalet={(palet) => setpaletToAdd(palet)}
            onUpdatePalet={(palet) => setEditedPalet(palet)}
          />
        )}
        {paletToDelete && (
          <DeletePaletModal
            paletToDelete={paletToDelete}
            closeModal={handleCloseModal}
            onDeletePalet={(palet) => setRemovedPalet(palet)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
