import React from 'react';

const TodoForm = props => {
 //  console.log(props);
 return (
  <div>
   <form onSubmit={props.onclickProps}>
    <input
     onChange={props.onChangeProps}
     placeholder="...todo"
     value={props.message}
    />
    <button>Add Todo</button>
    <button onClick={props.clearProps}>Clear Completed</button>
   </form>
  </div>
 );
};

export default TodoForm;
