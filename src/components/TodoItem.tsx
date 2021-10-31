import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div style={{ padding: "5px", marginTop: "5px", border: "1px solid teal"}}>
      <input type="checkbox" checked={todo.completed} />
      {todo.id}. {todo.title}
    </div>
  );
};

export default TodoItem;