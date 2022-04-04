import React, { useEffect, useState } from "react";
import AddCard from "./AddCard";
/* import AddCardOrList from "../basurabasura/AddCardOrList"; */
import ListTitle from "./ListTitle";

const TrelloList = ({ list }) => {
    /* console.log(`qe trae esto`, list.cards.length);
  console.log(list.cards); */
    return (
        <div className="bg-[#ebecf0] text-[#172b4d] px-3 rounded-[3px]">
            <ListTitle title={list.title} id={list.id} />
            {/* {list.cards.length > 0 &&
                list.cards.map((card) => {
                    return <ListTask card={card} key={card.id} />;
                })} */}

            {/* <AddCardOrList type={true} id={list.id} /> */}
            <AddCard />
        </div>
    );
};

export default TrelloList;
