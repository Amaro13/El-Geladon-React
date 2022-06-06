import { palets } from "../../mocks/palets.jsx";
import "./paletlist.css";
import React, { useState } from "react";

function PaletList() {
  const [SelectedPalet, setSelectedPalet] = useState({});

  const addItem = (paletIndex) => {
    const palet = {
      [paletIndex]: Number(SelectedPalet[paletIndex] || 0) + 1,
    };
    setSelectedPalet({ ...SelectedPalet, ...palet });
  };

  return (
    <div className="PaletList">
      {palets.map((palet, index) => (
        <div className="PaletListItem" key={`PaletListItem_${index}`}>
          <span className="PaletListItem_badge">
            {SelectedPalet[index] || 0}
          </span>
          <div>
            <div className="PaletListItem_title">{palet.title}</div>
            <div className="PaletListItem_price">{palet.price}</div>
            <div className="PaletListItem_description">{palet.description}</div>
            <div className="PaletListItem_actions Actions">
              <button
                className="Actions_add Actions_add-fill"
                onClick={() => addItem(index)}
              >
                add
              </button>
              <button className="Actions_remove">delete</button>
            </div>
          </div>
          <img
            className="PaletListItem_photo"
            src={palet.photo}
            alt={palet.title}
          />
        </div>
      ))}
    </div>
  );
}

export default PaletList;
