import TodoItem from '@/components/TodoItem';

export default function TodoList({ todos, setTodos }) {
  return (
    <ul className="space-y-[10px]">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
}
