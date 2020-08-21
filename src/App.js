import React from 'react';
import uuid from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css"

import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="container">
      <div className="row">
        <h1>Hello from app</h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
