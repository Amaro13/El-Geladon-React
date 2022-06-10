import { useEffect, useState } from "react";
import Modal from "../modal/modal";
import "./modaladdpalet.css";
import { PaletService } from "../../service/paletservice";

//the function runs as soon as the closeModal function runs wich closes the modal
function AddPaletModal({ closeModal, onCreatePalet }) {
  const form = {
    price: "",
    flavor: "",
    filling: "",
    description: "",
    photo: "",
  };
  //the state starts with the form value
  const [state, setState] = useState(form);

  //this function will receive the form values as e and the the name of the palet to be changed as name, the setState will spread the values of the form and with the name parameter it will update the values of the target in wich the name value is the same as the one mentioned in the parameter.
  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const [canDisable, setCanDisable] = useState(true);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.description.length &&
        state.photo.length &&
        state.flavor.length &&
        state.price.length
    );

    setCanDisable(response);
  };

  useEffect(() => canDisableSendButton);

  const createPalet = async () => {
    const renamePhotoPath = (fotoPath) => fotoPath.split("\\").pop();

    const { flavor, filling, description, price, photo } = state;

    const title = flavor + (filling && " with " + filling);

    const palet = {
      flavor: title,
      description,
      price,
      photo: `assets/images/${renamePhotoPath(photo)}`,
    };

    const response = await PaletService.create(palet);
    onCreatePalet(response);
    closeModal();
  };

  //will render this as the form and onChange it will apply it's values according with the function handleChange
  return (
    <Modal closeModal={closeModal}>
      <div className="AddPaletModal">
        <form autoComplete="off">
          <h2> Add To List </h2>
          <div>
            <label className="AddPaletModal_text" htmlFor="price">
              Price:
            </label>
            <input
              id="price"
              placeholder="10,00"
              type="text"
              value={state.price}
              onChange={(e) => handleChange(e, "price")}
              required
            />
          </div>
          <div>
            <label className="AddPaletModal_text" htmlFor="flavor">
              Flavor:
            </label>
            <input
              id="flavor"
              placeholder="Chocolate"
              type="text"
              value={state.flavor}
              onChange={(e) => handleChange(e, "flavor")}
              required
            />
          </div>
          <div>
            <label className="AddPaletModal_text" htmlFor="filling">
              Filling:
            </label>
            <input
              id="filling"
              placeholder="Banana"
              type="text"
              value={state.filling}
              onChange={(e) => handleChange(e, "filling")}
            />
          </div>
          <div>
            <label className="AddPaletModal_text" htmlFor="description">
              Description:
            </label>
            <input
              id="description"
              placeholder="Product Details"
              type="text"
              value={state.description}
              onChange={(e) => handleChange(e, "description")}
              required
            />
          </div>
          <div>
            <label
              className="AddPaletModal_text  AddPaletModal_photo-label"
              htmlFor="photo"
            >
              {!state.photo.length ? "Select Image" : state.photo}
            </label>
            <input
              className="AddPaletModal_photo"
              id="photo"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              value={state.photo}
              onChange={(e) => handleChange(e, "photo")}
              required
            />
          </div>
          <button
            type="button"
            className="AddPaletModal_send"
            disabled={canDisable}
            onClick={createPalet}
          >
            Send
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddPaletModal;
