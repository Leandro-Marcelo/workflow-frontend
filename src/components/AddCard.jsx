import React, { useContext, useState } from "react";
import { APIContext } from "../context/APIContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const AddCard = ({ type, id }) => {
  const { addCard } = useContext(APIContext);

  const initailForm = {
    text: "",
  };
  const [cardOrListText, setCardOrListText] = useState(initailForm);
  const [open, setOpen] = useState(true);

  const handleChange = (e) => {
    setCardOrListText({
      ...cardOrListText,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = () => {
    if (cardOrListText.text === "") {
      setOpen(true);
      return;
    }
    if (type) {
      addCard(cardOrListText.text, id);
      setCardOrListText(initailForm);
    }
    setOpen(true);
  };

  return (
    <div className="">
      {open ? (
        <div
          className="flex pb-2 backdrop-blur-sm bg-white/30"
          onClick={() => setOpen(false)}
        >
          <p className="text-[#172b4d] cursor-pointer pr-2">+</p>
          <p className="text-[#172b4d] cursor-pointer ">Add a card</p>
        </div>
      ) : (
        <div className="pb-2 bg-[#EBECF0] ">
          <div className="mb-2">
            <input
              type="search"
              name="text"
              id="text"
              onBlur={() => handleBlur()}
              placeholder={"Enter a title for this card..."}
              className="w-full h-11 rounded-md px-2 text-black"
              value={cardOrListText.text}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex justify-between w-full">
              <button className="hover:bg-[#026aa7] bg-[#0079bf] text-white h-8 w-20 rounded-sm">
                Add card
              </button>
              <div className="hover:bg-[#ddd] w-8 h-8 flex justify-center items-center text-black">
                <FontAwesomeIcon icon={faEllipsis} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCard;
