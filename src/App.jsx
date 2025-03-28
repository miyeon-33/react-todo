import Checkbox from '@/components/Checkbox';
import TodoAdd from '@/components/TodoAdd';
import TodoCount from '@/components/TodoCount';
import TodoList from '@/components/TodoList';
import { useState } from 'react';

const initTodos = [
  {
    id: 1,
    text: '리액트 공부하기',
    done: false,
  },
  {
    id: 2,
    text: '백엔드도 열심히 해야지',
    done: false,
  },
  {
    id: 3,
    text: '넷플릭스 시청',
    done: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="p-[30px]">
      <h2 className="text-[30px] font-bold text-gray-600">Todo List</h2>
      <TodoCount todos={todos} />
      <TodoAdd todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
