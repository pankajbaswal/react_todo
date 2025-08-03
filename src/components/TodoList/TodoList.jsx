import Todo from "../Todo/Todo";
function TodoList({ todos, setTodos }) {
  function onDeleteTodo(id) {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  }

  function onEditTodo(id, newTodo) {
    const newTodoList = todos.map((todo) => {
      if (todo.id == id) {
        todo.text = newTodo;
      }
      return todo;
    });
    setTodos(newTodoList);
}
   function onFinished(id , state){
    const newTodoList=todos.map(()=>{
        if(todo.id==id){
            todo.isFinished=state;
        }
        return todo;
    });
    setTodos(newTodoList);


} 
  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            isFinished={todo.isFinished}
            editTodo={(newTodo) => onEditTodo(todo.id, newTodo)}
            deleteTodo={() => onDeleteTodo(todo.id)}
            finishedTodo ={(state) =>onFinished(todo.id , state)}
          />
        ))}
    </div>
  );
}

export default TodoList;
