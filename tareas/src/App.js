import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">{/**alto como la pantalla */}
      <div className="flex items-center justify-center h-full">{/**centrads y todo el alto */}
        <BrowserRouter>
          <Routes>{/**las rutas, con el componente al que llaman */}
            <Route path="/" element={<TasksList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;