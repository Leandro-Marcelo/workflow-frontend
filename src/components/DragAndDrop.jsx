import React, { useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getItems = (count, offset = 0) =>
  /* crea un arreglo dependiendo del count que le pasemos, si le pasamos count = 3, entonces devuelve [0,1,2] y luego para cada uno de ellos le genero un objeto con un id y content */
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`,
  }));

export default function DragAndDrop() {
  const [lista, setLista] = useState(getItems(10));
  const [lista2, setLista2] = useState(getItems(10, 10));

  const onDragEnd = ({ source, destination }) => {
    console.log(source, destination);
    // dropped outside the list
    if (!destination) {
      return;
    }

    /* el elemento tiene un droppable, acá lo que esta preguntando es IF el droppable del elemento es igual al droppable del destino entonces */
    if (source.droppableId === destination.droppableId) {
      /* si esto sucedió en el droppable2 entonces reordena la lista 2 */
      if (source.droppableId === "droppable2") {
        setLista2(reorder(lista2, source.index, destination.index));
        /* en caso contrario, reordena la lista 1 */
      } else {
        setLista(reorder(lista, source.index, destination.index));
      }
      /* sin embargo, IF el droppable del elemento no es igual al droppable del destino entonces */
    } else {
      if (source.droppableId === "droppable") {
        const [origin, dest] = move(lista, lista2, source, destination);
        setLista(origin);
        setLista2(dest);
      } else {
        const [origin, dest] = move(lista2, lista, source, destination);
        setLista(dest);
        setLista2(origin);
      }
    }
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  /**
   * Moves an item from one list to another list.
   */
  const move = (source, destination, droppableSource, droppableDestination) => {
    /* hace un clon */
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    /* luego elimina ese elemento dentro de su droppable */
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    /* hacemos un splice agregando el elemento que eliminamos del droppable anterior a este nuevo droppable*/
    destClone.splice(droppableDestination.index, 0, removed);
    /* luego regresa las dos listas actualizadas para que luego despues de ejecutar esta función la desestructuren y actualicen el estado */
    return [sourceClone, destClone];
  };

  return (
    <div className="flex">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {lista.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="droppable2">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {lista2.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      /* la propiedad de referencia para el mismo elemento */
                      ref={provided.innerRef}
                      /* las propiedades para el origen y cual es el elemento */
                      {...provided.draggableProps}
                      /* para que podamos controlar como es que se mueve y se va colocando en las posiciones */
                      /* para que cuando nosotros lo agregamos, le asigne propiedades para que se pueda mover entre los demas elementos */
                      {...provided.dragHandleProps}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
