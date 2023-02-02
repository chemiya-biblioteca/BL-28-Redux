import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/tasksSlice";

function TasksList() {
  const tasks = useSelector((state) => state.tasks);//para acceder a los elementos
  const dispatch = useDispatch();//para acceder a las funciones

  const handleDelete = (id) => {
    dispatch(deleteTask(id));//llamo a la funcion para eliminar con el id
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks ({tasks.length})</h1>{/**enlazo con el array, su longituf */}

        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm"
        >
          Create Task
        </Link>{/**enlazo con la ruta para crear */}
      </header>

      <div className="grid grid-cols-3 gap-3">{/**muestro las tareas del array */}
        {tasks.map((task) => (
          <div className="bg-neutral-800 p-4 rounded-md" key={task.id}>{/**enlazo con su titulo e id */}
            <header className="flex justify-between">
              <h3 className="text-lg font-bold">{task.title}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center"
                >{/**ruta para editarla poniendo su id */}
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                >{/**boton para eliminarla pasando su id */}
                  delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>{/**enlazo con usus campos */}
            <p className="text-xs text-slate-400">{task.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TasksList;