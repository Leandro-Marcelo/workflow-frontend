import React, { useContext, useState } from "react";
import { APIContext } from "../context/APIContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddList = () => {
    /*    const { addList } = useContext(APIContext); */
    const initailForm = {
        text: "",
    };
    const [cardOrListText, setCardOrListText] = useState(initailForm);
    const [open, setOpen] = useState(true);

    const handleChange = (e) => {
        /* setCardOrListText({
      ...cardOrListText,
      [e.target.name]: e.target.value,
    }); */
    };

    const handleAddList = () => {
        /* addList(cardOrListText.text);
    setCardOrListText(initailForm);
    setOpen(true); */
    };

    return (
        <div className="">
            {open ? (
                <div
                    className="flex backdrop-blur-sm bg-white/30 px-2 py-2"
                    onClick={() => setOpen(false)}
                >
                    <p className="text-white cursor-pointer pr-1 flex justify-center items-center">
                        <FontAwesomeIcon icon={faPlus} />
                    </p>
                    <p className="text-white cursor-pointer ">
                        Add another list
                    </p>
                </div>
            ) : (
                <div className=" bg-[#EBECF0] py-2 px-2">
                    <div className="flex  items-center mb-2">
                        <input
                            type="search"
                            name="text"
                            id="text"
                            onBlur={null}
                            placeholder={"Enter list title..."}
                            className="w-full mr-0 cursor-pointer rounded-sm bg-[#EBECF0] focus:bg-[white] focus:border-2 px-2 py-1 border-[#0079bf] outline-none text-black"
                            /*  value={cardOrListText.text} */
                            /*  onChange={handleChange} */
                            autoFocus
                        />
                    </div>
                    <div className="flex  items-center ">
                        <button
                            className="hover:bg-[#026aa7] bg-[#0079bf] text-white h-8 w-20 rounded-[3px]"
                            /* onClick={handleAddList} */
                        >
                            Add list
                        </button>
                        <div className="w-8 h-8 flex justify-center items-center hover:text-[#42526e] text-[#6b778c]">
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddList;
