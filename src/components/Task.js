import React, { useState } from 'react';
import { IoTrashOutline, IoCreateOutline } from 'react-icons/io5';
import '../styles/Task.css';

/**
 * Componente que representa una tarea en la lista.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.task - Objeto que representa la tarea.
 * @param {number} props.task.id - ID de la tarea.
 * @param {string} props.task.text - Texto de la tarea.
 * @param {boolean} props.task.completed - Indica si la tarea está completada.
 * @param {Function} props.completeTask - Función para marcar la tarea como completada.
 * @param {Function} props.deleteTask - Función para eliminar la tarea.
 * @param {Function} props.editTask - Función para editar la tarea.
 * @returns {JSX.Element} Elemento JSX que representa una tarea en la lista.
 */
function Task({ task, completeTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);

  const handleCheckboxChange = () => {//maneja el cambio de estado del checkbox de completado. 
    completeTask(task.id);
  };

  const handleEditClick = () => {//maneja el clic en el botón de editar
    setIsEditing(true);
  };

  const handleInputChange = (event) => {//maneja el cambio de valor del campo de entrada de texto para la edición de la tarea.
    setEditedTask(event.target.value);
  };

  const handleSaveClick = () => {//maneja el clic en el botón de guardar
    editTask(task.id, editedTask);
    setIsEditing(false);
  };

  const handleCancelClick = () => {//maneja el clic en el botón de cancelar
    setIsEditing(false);
    setEditedTask(task.text);
  };

  const handleDeleteClick = () => {//maneja el clic en el botón de eliminar
    deleteTask(task.id);
  };

  return (
    <li className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
        className="task-checkbox"
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={handleInputChange}
            className="task-input"
          />
          <div className="button-group">
            <button onClick={handleSaveClick} className="task-button">
              <IoCreateOutline />
            </button>
            <button onClick={handleCancelClick} className="task-button">
              Cancelar
            </button>
          </div>
        </>
      ) : (
        <>
          <span className={task.completed ? 'completed' : ''}>
            {task.text}
          </span>
          <div className="button-group">
            <button onClick={handleEditClick} className="task-button">
              <IoCreateOutline />
            </button>
            <button onClick={handleDeleteClick} className="task-button">
              <IoTrashOutline />
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default Task;
