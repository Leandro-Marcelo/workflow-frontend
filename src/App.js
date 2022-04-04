import ListUser from "./components/ListUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import DragAndDrop from "./components/DragAndDrop/DragAndDrop"; */
import Test from "./pages/Test";
/* import DroppableTzuzul from "./pages/DroppableTzuzul"; */
import { useSelector, useDispatch } from "react-redux";
import MyTeam from "./pages/MyTeam";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { useEffect } from "react";
import { validate } from "./features/user/userSlice";

function App() {
    const team = useSelector((state) => state.team);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(validate());
    }, []);

    console.log(team);
    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/user" element={<ListUser />} />
                {/*   <Route path="/" element={<DragAndDrop />} /> */}
                <Route path="/test" element={<Test />} />
                <Route path="/myteam" element={<MyTeam />} />
                <Route path="/myteam/:idTeam" element={<ListUser />} />
                <Route path="/login" element={<Login />} />
                {/*   <Route path="/droppable" element={<DroppableTzuzul />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
