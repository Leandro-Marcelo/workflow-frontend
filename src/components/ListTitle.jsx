import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { APIContext } from "../context/APIContext";

const ListTitle = ({ title, id }) => {
  const { updateListTitle } = useContext(APIContext);

  const initailForm = {
    title: title,
  };

  const [activeInput, setActiveInput] = useState(false);
  const [listTitle, setListTitle] = useState(initailForm);

  const handleChange = (e) => {
    /* habría que ver como guardarlo en el backend. Agregar lo de que se guarde la edición del title aparte de clickeando afuera, tambien cuando le den al enter */
    setListTitle({
      ...listTitle,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = () => {
    /* updateListTitle(listTitle.title, id); */
    setActiveInput(false);
  };

  return (
    /* no nos deja crear una lista sin nombre */
    <div className="flex justify-between py-2">
      {activeInput ? (
        <input
          type="text"
          name="title"
          value={listTitle.title}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          className="w-full mr-0 cursor-pointer rounded-sm bg-[#EBECF0] focus:bg-[white] focus:border-2 px-2 border-blue-600 outline-none"
        />
      ) : (
        <p
          onClick={() => setActiveInput(true)}
          className="w-full cursor-pointer"
        >
          {listTitle.title}
        </p>
      )}
      <div className="hover:bg-[#ddd] w-8 h-8 flex justify-center items-center">
        <FontAwesomeIcon icon={faEllipsis} className="" />
      </div>
    </div>
  );
};

export default ListTitle;
