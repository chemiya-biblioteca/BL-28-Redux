import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
    description: "This is a task",
  },
  {
    id: "2",
    title: "Task 2",
    completed: false,
    description: "This is a task",
  },
];//array con las tareas

const userSlice = createSlice({
  name: "tasks",//nombre de slice
  initialState,//inicial
  reducers: {//modificadores
    addTask: (state, action) => {
      state.push(action.payload);//al estado le añades lo que llega en el payload que sera la tarea
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;//coges los datos del payload
      const foundTask = state.find((task) => task.id === id);//buscas en el estado la que tiene ese id
      if (foundTask) {
        foundTask.title = title;//actualizas los campos
        foundTask.description = description;
      }
    },
    deleteTask: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload);//buscas en el stado la que tiene ese id que llega en el payload
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1);//la borras del estado
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = userSlice.actions;//exportas las acciones
export default userSlice.reducer;