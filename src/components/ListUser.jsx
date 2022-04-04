import AddCardOrList from "../basurabasura/AddCardOrList";
import TrelloList from "./TrelloList";
import { useContext } from "react";
import { APIContext } from "../context/APIContext";
import { useSelector, useDispatch } from "react-redux";

import React from "react";
import AddList from "./AddList";

const ListUser = () => {
    /* const { apiLists } = useSelector((state) => state.list); */
    /* const [list, setList] = useState(null);
    useEffect(() => {
        aGet("/teams/624a157612bad4383482ec3b");

        return () => {};
    }, []); */

    /* const { apiLists } = useContext(APIContext); */
    /* console.log(apiLists); */

    /* type true + Add a card     Enter a title for this card...              type false  + Add another list    Enter a title for this list...   */
    return (
        <div className="w-full h-screen text-white px-4 py-4  ">
            <div className="flex justify-between px-2 py-2 ">
                <div className="flex ">
                    <p className="mr-2  bg-white/30 hover:bg-white/40 px-2 py-1">
                        Board
                    </p>
                    <p className="mr-2 bg-white/30 hover:bg-white/40 px-2 py-1">
                        Challenge 1 - ONE
                    </p>
                    <p className="mr-2 bg-white/30 hover:bg-white/40 px-2 py-1">
                        estrella
                    </p>
                    <p className="mr-2 bg-white/30 hover:bg-white/40 px-2 py-1">
                        Leandro Marcelo's workspace
                    </p>
                    <p className="mr-2 bg-white/30 hover:bg-white/40 px-2 py-1">
                        private
                    </p>
                    <p className="mr-2 bg-white/30 hover:bg-white/40 px-2 py-1">
                        LM
                    </p>
                    <p className="mr-2 bg-white/30 hover:bg-white/40 px-2 py-1">
                        Invite
                    </p>
                </div>
                <div className="flex">
                    <p className="mr-2 bg-white/30 hover:bg-white/40 px-2 py-1">
                        Power-Ups
                    </p>
                    <p className="mr-2 bg-white/30 hover:bg-white/40 px-2 py-1">
                        Automation
                    </p>
                    <p className="mr-2 bg-white/30 hover:bg-white/40 px-2 py-1">
                        Filter
                    </p>
                    <p className=" bg-white/30 hover:bg-white/40 px-2 py-1">
                        ... Show menu
                    </p>
                </div>
            </div>
            {/* bg-[green] */}
            <div className="flex w-full h-[95%] justify-start  overflow-x-auto ">
                {/*  {apiLists ? (
                    apiLists.listIds.map((listId) => {
                        const list = apiLists.lists[listId];

                        return (
                            //ojito, hay darle la key al componente y no siempre al coso ese <TrelloList/>
                            <div
                                className="w-[272px] bg-transparent mx-2 shrink-0"
                                key={list.id}
                            >
                                <TrelloList list={list} />
                            </div>
                        );
                    })
                ) : (
                    <TrelloList />
                )} */}
                <div className="w-[272px] mx-2 shrink-0">
                    {/* <AddCardOrList type={false} /> */}
                    {/* <AddList /> */}
                </div>
            </div>
        </div>
    );
};

export default ListUser;
