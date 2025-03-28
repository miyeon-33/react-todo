import Checkbox from '@/components/Checkbox';

export default function TodoItem({ todo, todos, setTodos }) {
  // 배열 요소 업데이트
  function handleDone() {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            done: !t.done,
          };
        } else {
          return t;
        }
      })
    );
  }

  // 배열요소 삭제
  function handleDelete() {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <li className="flex items-center gap-x-[15px]">
      <Checkbox
        label={todo.text}
        onChange={handleDone}
        className={`grow ${todo.done ? 'line-through' : ''}`}
      />
      <button
        type="button"
        className="h-[32px] border border-[#b83030] rounded-[4px] px-[10px] text-[#b83030]
        "
        onClick={handleDelete}
      >
        remove
      </button>
    </li>
  );
}
