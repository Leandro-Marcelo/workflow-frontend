import React from "react";
import AddCardOrList from "./AddCardOrList";
import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";

const TrelloList = ({ list }) => {
  /* console.log(`qe trae esto`, list.cards.length);
  console.log(list.cards); */
  return (
    <div className="bg-[#EBECF0] text-[#172b4d] px-3 ">
      <ListTitle title={list.title} id={list.id} />
      {list.cards.length > 0 &&
        list.cards.map((card) => {
          return <TrelloCard card={card} key={card.id} />;
        })}

      <AddCardOrList type={true} id={list.id} />
    </div>
  );
};

export default TrelloList;
