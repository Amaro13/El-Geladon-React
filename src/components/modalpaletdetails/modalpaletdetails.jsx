import "./modalpaletdetails.css";
import Modal from "../modal/modal";

function PaletDetailsModal({ palet, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="PaletDetailsModal">
        <div>
          <div className="PaletDetailsModal_title"> {palet.title} </div>
          <div className="PaletDetailsModal_price">
            {" "}
            R$ {Number(palet.price).toFixed(2)}{" "}
          </div>
          <div className="PaletDetailsModal_description">
            {" "}
            <b>Flavor:</b> {palet.flavor}{" "}
          </div>
          {palet.filling && (
            <div className="PaletDetailsModal_description">
              {" "}
              <b>Filling:</b> {palet.filling}{" "}
            </div>
          )}
          <div className="PaletDetailsModal_description">
            {" "}
            <b>Description:</b> {palet.description}{" "}
          </div>
        </div>
        <img
          className="PaletDetailsModal_photo"
          src={palet.photo}
          alt={`Palet de ${palet.flavor}`}
        />
      </div>
    </Modal>
  );
}

export default PaletDetailsModal;
