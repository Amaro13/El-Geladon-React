import "./paletlistitem.css";

//this function takes 4 paramaters from the parent component and feeds it back with the rendering of the palets and the two variables for the cart.
function PaletListItem({
  palet,
  Selectedqtd,
  index,
  onRemove,
  onAdd,
  clickItem,
}) {
  // canRender is a renderization condition function: in other words the canRender has to be positive so a number or true.
  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="PaletListItem_badge"> {Selectedqtd} </span>
    ); //What? needs further explanation

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
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
    <div className="PaletListItem" onClick={() => clickItem(palet.id)}>
      {badgeCounter(Selectedqtd, index)}
      <div>
        <div className="PaletListItem_title"> {palet.title} </div>
        <div className="PaletListItem_price">R$ {palet.price.toFixed(2)}</div>
        <div className="PaletListItem_description"> {palet.description} </div>
        <div className="PaletListItem_actions Actions">
          <button
            className={`Actions_add ${!Selectedqtd && "Actions__add-fill"}`}
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
