import React, { useContext, useState } from "react";
import { APIContext } from "../context/APIContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaTrello } from "react-icons/fa";

const AddCard = ({ type, id }) => {
    /* const { addCard } = useContext(APIContext); */

    const initailForm = {
        text: "",
    };
    const [cardOrListText, setCardOrListText] = useState(initailForm);
    const [open, setOpen] = useState(true);

    /*   const handleChange = (e) => {
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
  }; */

    return (
        <div className="pb-2">
            {open ? (
                <div
                    className="flex  justify-between items-center"
                    onClick={() => setOpen(false)}
                >
                    <div className="flex text-[#5e6c84] hover:text-[#091e42] hover:bg-[#ddd] w-full px-2 rounded-[3px]">
                        <div className=" cursor-pointer pr-1 flex justify-center items-center">
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <p className="">Add a card</p>
                    </div>
                    <div className="hover:bg-[#ddd] text-[#5e6c84] hover:text-[#091e42] w-8 h-8 flex justify-center items-center rounded-[3px]">
                        <FaTrello />
                    </div>
                </div>
            ) : (
                <div className="pb-2 bg-[#EBECF0] ">
                    <div className="mb-2">
                        <input
                            type="search"
                            name="text"
                            id="text"
                            /*   onBlur={() => handleBlur()} */
                            placeholder={"Enter a title for this card..."}
                            className="w-full h-11 rounded-md px-2 text-black"
                            /*    value={cardOrListText.text}
              onChange={handleChange} */
                        />
                    </div>
                    <div className="flex justify-between items-center ">
                        <div className="flex justify-between w-full">
                            <div className="flex">
                                <button className="hover:bg-[#026aa7] bg-[#0079bf] text-white h-8 w-20 rounded-sm">
                                    Add card
                                </button>
                                <div className="w-8 h-8 flex justify-center items-center hover:text-[#42526e] text-[#6b778c]">
                                    <FontAwesomeIcon icon={faXmark} />
                                </div>
                            </div>
                            <div className="hover:bg-[#ddd] text-[#5e6c84] hover:text-[#091e42] w-8 h-8 flex justify-center items-center rounded-[3px]">
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
