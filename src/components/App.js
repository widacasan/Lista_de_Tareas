import React from 'react';
import TaskList from './TaskList';
import '../styles/App.css';

/**
 * Componente principal de la aplicación.
 * Representa la página principal de la Lista de Tareas.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que contiene la estructura de la página principal.
 */
function App() {
  return (
    <div className="App">
      <h1 className="app-title">Lista de tareas</h1>
      <TaskList />
    </div>
  );
}

export default App;