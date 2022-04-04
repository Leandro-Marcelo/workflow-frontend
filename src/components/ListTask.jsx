import React from "react";

const ListTask = ({ card }) => {
    /* console.log(`que llega acá`, card); */
    return (
        /* no nos deja crear una tarjeta sin nombre */
        <div className="bg-[#fff] mb-2 rounded-[3px] px-2">
            {card && <p>{card.title}</p>}
        </div>
    );
};

export default ListTask;
