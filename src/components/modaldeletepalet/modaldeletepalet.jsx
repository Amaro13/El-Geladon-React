import "./modaldeletepalet.css";
import Modal from "../modal/modal.jsx";
import { PaletService } from "../../service/paletservice.jsx";

function DeletePaletModal({ closeModal, paletToDelete, onDeletePalet }) {
  const handleDelete = async (palet) => {
    await PaletService.deleteById(palet.id);
    onDeletePalet(palet);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="DeletePaletModal">
        <h2>Confirmation</h2>
        <p>
          Are you sure you want to delete <b>{paletToDelete.title}</b>?
        </p>

        <img
          className="DeletePaletModal_photo"
          src={paletToDelete.photo}
          alt={paletToDelete.title}
        />

        <br />

        <div>
          <button
            onClick={() => handleDelete(paletToDelete)}
            className="DeletePaletModal_confirm"
          >
            Confirm
          </button>
          <button onClick={closeModal} className="DeletePaletModal_cancel">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletePaletModal;
