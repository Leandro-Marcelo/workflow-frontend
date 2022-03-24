import React, { useContext, useState } from "react";
import { APIContext } from "../context/APIContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const AddCardOrList = ({ type, id }) => {
  const { addCard, addList } = useContext(APIContext);

  const initailForm = {
    text: "",
  };
  const [cardOrListText, setCardOrListText] = useState(initailForm);
  const [open, setOpen] = useState(true);

  /* Cómo hacer para que cuando quiera escribir y no ponga nada, si cambia de pagina no se le cierre */
  const handleBlur = () => {
    if (cardOrListText.text === "") {
      setOpen(true);
      return;
    }
    /* esto es para que solamente cuando se este interactuando con una lista ya creada, cree una card y resetee el input despues de crearse esa card */
    if (type) {
      addCard(cardOrListText.text, id);
      setCardOrListText(initailForm);
    }
    /* si tiene contenido, entonces agregalo */
    setOpen(true);
  };

  const handleChange = (e) => {
    setCardOrListText({
      ...cardOrListText,
      [e.target.name]: e.target.value,
    });
  };

  /* se llamaba: handleAddCardOrList y lo tenía el button de crear card o list. No necesitamos hacer que el button cree una carta cuando ya el blur es capaz de hacerlo*/
  const handleAddList = () => {
    /* if (type === true) {
      // le pasamos el id de esta lista para que sepa donde añadir este nuevo TrelloCard
      addCard(cardOrListText.text, id);
    } else {
      addList(cardOrListText.text);
    } */
    addList(cardOrListText.text);
    setCardOrListText(initailForm);
    setOpen(true);
  };

  return (
    /* mx-2 padre */
    <div className="">
      {open ? (
        <div
          className="flex pb-2 backdrop-blur-sm bg-white/30"
          onClick={() => setOpen(false)}
        >
          <p className="text-[#172b4d] cursor-pointer pr-2">+</p>
          {type ? (
            <p className="text-[#172b4d] cursor-pointer ">Add a card</p>
          ) : (
            <p className="text-[#172b4d] cursor-pointer ">Add another list</p>
          )}
        </div>
      ) : (
        /* type ? textare : input */
        <div className="pb-2 bg-[#EBECF0] ">
          <div className="mb-2">
            {type ? (
              <input
                type="search"
                name="text"
                id="text"
                onBlur={type ? () => handleBlur() : null}
                placeholder={
                  type
                    ? "Enter a title for this card..."
                    : "Enter a title for this list..."
                }
                className="w-full h-11 rounded-md px-2 text-black"
                value={cardOrListText.text}
                onChange={handleChange}
              />
            ) : (
              <div className="pt-2 px-3">
                <input
                  type="search"
                  name="text"
                  id="text"
                  onBlur={type ? () => handleBlur() : null}
                  placeholder={
                    type
                      ? "Enter a title for this card..."
                      : "Enter a title for this list..."
                  }
                  className="w-full mr-0 cursor-pointer rounded-sm bg-[#EBECF0] focus:bg-[white] focus:border-2 px-2 border-[#0079bf] outline-none text-black"
                  value={cardOrListText.text}
                  onChange={handleChange}
                  autoFocus
                />
              </div>
            )}
          </div>
          <div className="flex justify-between items-center ">
            {type ? (
              <div className="flex justify-between w-full">
                <button className="hover:bg-[#026aa7] bg-[#0079bf] text-white h-8 w-20 rounded-sm">
                  Add card
                </button>
                <div className="hover:bg-[#ddd] w-8 h-8 flex justify-center items-center text-black">
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </div>
            ) : (
              <div className="px-3 pb-2 flex justify-between w-full">
                <button
                  className="hover:bg-[#026aa7] bg-[#0079bf] text-white h-8 w-20 "
                  onClick={handleAddList}
                >
                  Add list
                </button>
                <div className="hover:bg-[#ddd] w-8 h-8 flex justify-center items-center text-black">
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCardOrList;
