import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTask, editTask } from "../features/tasks/tasksSlice";
import { v4 as uuid } from "uuid";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });//creas variable para una tarea
  const dispatch = useDispatch();//para acceder a las funciones
  const navigate = useNavigate();//para navegar
  const params = useParams();//para el parametro
  const tasks = useSelector((state) => state.tasks);//para acceder a los elementos 

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,//actualizamos el campo modificado del estado
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {//si tengo id, llamo a la funcion para editar con la tarea y el id
      dispatch(editTask({ ...task, id: params.id }));
    } else {//si no tenfo id, llamo para crear con el id y la tarea
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/");//navego a la principal
  };

  useEffect(() => {
    if (params.id) {//si hay id, buscas en el array la que tiene el id igual
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params, tasks]);//al actualizart las tareas o el parametro

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">{/**evento para manejar subir el formulario */}
      <label className="block text-sm font-bold">Task:</label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        placeholder="Write a title"
        autoFocus
      />{/**enlazo con el campo de la variable y evento para manejar cambio */}
      <label>
        Description:
        <textarea
          type="text"
          name="description"
          onChange={handleChange}
          value={task.description}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          placeholder="Write a description"
        />{/**enlazo con el campo de la variable y evento para manejar cambio */}
      </label>
      <button type="submit" className="bg-indigo-600 px-2 py-1">Submit</button>
    </form>
  );
}

export default TaskForm;