import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Todo from "./pages/to-do";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/todo">Todo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
