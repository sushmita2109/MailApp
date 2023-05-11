import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Inbox } from "./pages/Inbox";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Inbox />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
