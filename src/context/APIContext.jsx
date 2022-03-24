import React, { useState, createContext } from "react";
import mockup from "../api/mockup";
import uuid from "react-uuid";

const APIContext = createContext();

function APIProvider({ children }) {
  const [apiLists, setApiLists] = useState(mockup);
  /* console.log(apiLists); */

  const addCard = (cardText, listId) => {
    // creamos un id único para el nuevo card
    const newCardId = uuid();
    // crear el card nuevo
    const newCard = {
      id: newCardId,
      title: cardText,
    };
    // añadir el newCard al array de cards que tiene la lista
    const list = apiLists.lists[listId];
    list.cards = [...list.cards, newCard];
    setApiLists({
      ...apiLists,
      lists: {
        ...apiLists.lists,
        [listId]: list,
      },
    });
  };

  const addList = (listText) => {
    const newListId = uuid();
    setApiLists({
      listIds: [...apiLists.listIds, newListId],
      lists: {
        ...apiLists.lists,
        [newListId]: {
          id: newListId,
          title: listText,
          cards: [],
        },
      },
    });
  };

  // const updateListTitle = (updatedList, listId) => {
  //   const lists = Object.values(apiLists.lists);
  //  const keyLists = Object.keys(apiLists.lists);

  //  let newArr = lists.map((list, index) => {
  //   if (listId === Object.values(list)[0]) {
  //    return { listId, index, keyLists: keyLists[index] };
  // }
  //});
  //newArr = newArr.filter((el) => el !== undefined);
  //apiLists.lists[newArr[0].keyLists].title = updatedList;
  /* setApiLists(...apiLists); */
  //console.log(apiLists.lists[newArr[0].keyLists]);

  /* SOLUCIONARLO
    setApiLists({
      ...apiLists,
      lists: {
        ...apiLists.lists,
        [apiLists.lists[newArr[0].keyLists].title]: updatedList,
      },
    }); */

  //el hace solamente esto porque sabe que el listId es igual al nombre del objeto que lo contiene, en mi caso si bien lo sabía, yo consideré que fueran distintos para que fuera una lógica mas completa

  //const list = data.lists[listId]
  //list.title = updatedList
  return (
    <APIContext.Provider value={{ apiLists, addCard, addList }}>
      {children}
    </APIContext.Provider>
  );
}
/* si bien lo modifica, lo hace de manera temporal porque no esta actualizando el estado en si, por lo que tenemos que usar setApiLists para que se actualice la base de datos */
/* updateListTitle("To do", "01list"); */

export { APIContext };
export default APIProvider;
