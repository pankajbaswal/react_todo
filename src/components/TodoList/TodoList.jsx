import Todo from "../Todo/Todo"
function TodoList({ todos }) {
    return (
        <div>
            {todos && todos.map((todo) => (
                <Todo 
                    key={todo.id}
                    text={todo.text}
                    isFinished={todo.isFinished}
                />
            ))}
        </div>
    );
}

export default TodoList;
