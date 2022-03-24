import AddCardOrList from "./components/AddCardOrList";
import TrelloList from "./components/TrelloList";
import { useContext } from "react";
import { APIContext } from "./context/APIContext";

function App() {
  /* const [api, setApi] = useState(null); */

  const { apiLists } = useContext(APIContext);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://backendtzuzulcode.wl.r.appspot.com/teams/"
    );
    const apiTzuzul = await data.json();

    /* console.log(apiTzuzul); */

    /* setApi(apiTzuzul); */
  };

  /* type true + Add a card     Enter a title for this card...              type false  + Add another list    Enter a title for this list...   */

  return (
    <div className="w-full h-screen text-white ">
      {/* <button onClick={fetchPopular} className="text-red-800">
        consumir api
      </button> */}
      <div className="flex text-red-800 justify-between px-4 py-4">
        <div className="flex">
          <p className="pr-2">Board</p>
          <p className="pr-2">Challenge 1 - ONE</p>
          <p className="pr-2">estrella</p>
          <p className="pr-2">Leandro Marcelo's workspace</p>
          <p className="pr-2">private</p>
          <p className="pr-2">LM</p>
          <p className="pr-2">Invite</p>
        </div>
        <div className="flex">
          <p className="pr-2">Power-Ups</p>
          <p className="pr-2">Automation</p>
          <p className="pr-2">Filter</p>
          <p className="pr-2">... Show menu</p>
        </div>
      </div>
      <div className="flex w-full justify-start overflow-x-auto">
        {apiLists ? (
          apiLists.listIds.map((listId) => {
            const list = apiLists.lists[listId];

            return (
              /* ojito, hay darle la key al componente y no siempre al coso ese <TrelloList/> */
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
        )}

        <AddCardOrList type={false} />
      </div>
    </div>
  );
}

export default App;
