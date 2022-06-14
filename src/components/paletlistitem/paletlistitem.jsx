import "./paletlistitem.css";
import { ActionMode } from "../../constants";

//this function takes 4 paramaters from the parent component and feeds it back with the rendering of the palets and the two variables for the cart.
function PaletListItem({
  palet,
  Selectedqtd,
  index,
  onRemove,
  onAdd,
  clickItem,
  mode,
}) {
  // canRender is a renderization condition function: in other words the canRender has to be positive so a number or true.
  const badgeCounter = (canRender) =>
    Boolean(canRender) && (
      <span className="PaletListItem_badge"> {Selectedqtd} </span>
    );

  const badgeAction = (canRender) => {
    if (canRender)
      return (
        <span
          className={`PaletListItem_tag ${
            mode === ActionMode.DELETE && "PaletListItem_tag-delete"
          }`}
        >
          {mode}
        </span>
      );
  };

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        disabled={mode !== ActionMode.NORMAL}
        className="Actions_remove"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        remove
      </button>
    );
  return (
    <div
      className={`
    PaletListItem
    ${mode !== ActionMode.NORMAL && "PaletListItem-disable"}
    ${mode === ActionMode.DELETE && "PaletListItem-delete"}
  `}
      onClick={() => clickItem(palet.id)}
    >
      {badgeCounter(Selectedqtd, index)}
      {badgeAction(mode !== ActionMode.NORMAL)}
      <div>
        <div className="PaletListItem_title"> {palet.title} </div>
        <div className="PaletListItem_price">R$ {palet.price.toFixed(2)}</div>
        <div className="PaletListItem_description"> {palet.description} </div>
        <div className="PaletListItem_actions Actions">
          <button
            disabled={mode !== ActionMode.NORMAL}
            className={`Actions_add ${!Selectedqtd && "Actions_add-fill"}`}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(index);
            }}
          >
            add
          </button>
          {removeButton(Selectedqtd, index)}
        </div>
      </div>
      <img
        className="PaletListItem_photo"
        src={`../${palet.photo}`}
        alt={`Palet  ${palet.flavor}`}
      />
    </div>
  );
}

export default PaletListItem;
