import Todo from "../Todo/Todo"
function TodoList({ todos ,setTodos}) {

    function onDeleteTodo(id){
        console.log(todos)
        const newTodo= todos.filter(todo => todo.id !== id);
        console.log(newTodo);
        setTodos(newTodo);
       
    }

    return (
        <div>
            {todos && todos.map((todo) => (
                <Todo 
                    key={todo.id}
                    text={todo.text}
                    isFinished={todo.isFinished}
                    deleteTodo={()=> onDeleteTodo(todo.id)}
                />
            ))}
        </div>
    );
}

export default TodoList;
