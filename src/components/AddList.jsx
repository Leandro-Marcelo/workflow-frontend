import React, { useContext, useState } from "react";
import { APIContext } from "../context/APIContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const AddList = () => {
  const { addList } = useContext(APIContext);
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

  const handleAddList = () => {
    addList(cardOrListText.text);
    setCardOrListText(initailForm);
    setOpen(true);
  };

  return (
    <div className="">
      {open ? (
        <div
          className="flex backdrop-blur-sm bg-white/30 px-2 py-2"
          onClick={() => setOpen(false)}
        >
          <p className="text-white cursor-pointer pr-2 flex justify-center items-center">
            +
          </p>
          <p className="text-white cursor-pointer ">Add another list</p>
        </div>
      ) : (
        <div className="pb-2 bg-[#EBECF0] ">
          <div className="mb-2">
            (
            <div className="pt-2 px-3">
              <input
                type="search"
                name="text"
                id="text"
                onBlur={null}
                placeholder={"Enter a title for this list..."}
                className="w-full mr-0 cursor-pointer rounded-sm bg-[#EBECF0] focus:bg-[white] focus:border-2 px-2 border-[#0079bf] outline-none text-black"
                value={cardOrListText.text}
                onChange={handleChange}
                autoFocus
              />
            </div>
            )
          </div>
          <div className="flex justify-between items-center ">
            (
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
            )
          </div>
        </div>
      )}
    </div>
  );
};

export default AddList;
