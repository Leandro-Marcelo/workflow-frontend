import AddCard from "./AddCard";
import AddList from "./AddList";

const AddCardOrList = ({ type, id }) => {
  return (
    <div className="">
      {type ? <AddCard type={type} id={id} /> : <AddList />}
    </div>
  );
};

export default AddCardOrList;

/* 


return (
    // mx-2 padre
    <div className="">
      {open ? (
        <div
          className="flex pb-2 backdrop-blur-sm bg-white/30"
          onClick={() => setOpen(false)}
        >
          {type ? (
            <p className="text-[#172b4d] cursor-pointer pr-2">+</p>
          ) : (
            <p className="text-white cursor-pointer pr-2 flex justify-center items-center">
              +
            </p>
          )}
          {type ? (
            <p className="text-[#172b4d] cursor-pointer ">Add a card</p>
          ) : (
            <p className="text-white cursor-pointer ">Add another list</p>
          )}
        </div>
      ) : (
        // type ? textare : input
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














*/
