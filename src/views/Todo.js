const Todo = props => {
  const { todos, deleteDataTodo } = props;

  const handleDelete = id => {
    deleteDataTodo(id);
  };
  return (
    <div className="todos-container">
      <div className="title">{props.title}</div>
      {todos.map(todo => {
        // console.log(">>>> check todo list:", todo);
        return (
          <div key={todo.id}>
            <li className="todo-child" key={todo.id}>
              {todo.title}
              &nbsp;&nbsp;<span onClick={() => handleDelete(todo.id)}> X</span>
            </li>
          </div>
        );
      })}
      <hr />
    </div>
  );
};
export default Todo;
