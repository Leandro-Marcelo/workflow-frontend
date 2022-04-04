import React, { useState } from "react";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CustomDroppable from "../components/DragAndDrop/CustomDroppable";

const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map((k) => ({
        id: `item-${k + offset}`,
        content: `item ${k + offset}`,
    }));

export default function DroppableTzuzul() {
    const [lista, setLista] = useState(getItems(10));
    const [lista2, setLista2] = useState(getItems(10, 10));
    const [lista3, setLista3] = useState(getItems(10, 20));
    const [lista4, setLista4] = useState(getItems(10, 30));
    const listas = {
        lista: {
            lista,
            setLista,
        },
        lista2: {
            lista: lista2,
            setLista: setLista2,
        },
        lista3: {
            lista: lista3,
            setLista: setLista3,
        },
        lista4: {
            lista: lista4,
            setLista: setLista4,
        },
    };

    const onDragEnd = ({ source, destination }) => {
        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const listaOrigen = listas[source.droppableId];
            listaOrigen.setLista(
                reorder(listaOrigen.lista, source.index, destination.index)
            );
        } else {
            const listaOrigen = listas[source.droppableId];
            const listaDestino = listas[destination.droppableId];

            const [origin, dest] = move(
                listaOrigen.lista,
                listaDestino.lista,
                source,
                destination
            );
            listaOrigen.setLista(origin);
            listaDestino.setLista(dest);
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
    const move = (
        source,
        destination,
        droppableSource,
        droppableDestination
    ) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        return [sourceClone, destClone];
    };

    return (
        <div className="flex bg-green-900">
            <DragDropContext onDragEnd={onDragEnd} className="">
                {Object.keys(listas).map((l, index) => (
                    <CustomDroppable key={l} lista={listas[l].lista} id={l} />
                ))}
            </DragDropContext>
        </div>
    );
}
