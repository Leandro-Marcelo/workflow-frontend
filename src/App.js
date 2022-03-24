import ListUser from "./components/ListUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DragAndDrop from "./components/DragAndDrop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<ListUser />} />
        <Route path="/" element={<DragAndDrop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
