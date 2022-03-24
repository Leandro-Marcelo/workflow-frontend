import React, { useState } from "react";

const AddTask = ({ type, handleClick }) => {
  const initailForm = {
    text: "",
  };

  const [cardOrListText, setCardOrListText] = useState(initailForm);

  const handleChange = (e) => {
    setCardOrListText({
      ...cardOrListText,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        name="text"
        id="text"
        onBlur={() => handleClick()}
        placeholder={
          type
            ? "Enter a title for this card..."
            : "Enter a title for this list..."
        }
        className="w-full h-11 rounded-md px-2 text-black"
        value={cardOrListText.text}
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
};

export default AddTask;
