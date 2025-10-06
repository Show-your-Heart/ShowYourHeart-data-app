import { Routes, Route, Link } from "react-router-dom";
import SYHRespuestas from "./Pages/SYHRespuestas";

export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/sub/syhrespuestas" element={<SYHRespuestas />} />
      </Routes>
    </div>
  );
}