import React from "react";

const TrelloCard = ({ card }) => {
  /* console.log(`que llega acá`, card); */
  return (
    /* no nos deja crear una tarjeta sin nombre */
    <div className="bg-white mb-2 rounded-md px-2">
      {card && <p>{card.title}</p>}
    </div>
  );
};

export default TrelloCard;
