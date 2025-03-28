export default function TodoCount({ todos }) {
  const done = todos.filter((todo) => todo.done).length;

  return (
    <div className="text-[14px] text-gray-600 mt-[10px]">
      완료: {done} / 할 일: {todos.length}
    </div>
  );
}
