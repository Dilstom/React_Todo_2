import React from 'react';

const TodoForm = props => {
 //  console.log(props);
 return (
  <div>
   <input onChange={props.onChangeProps} placeholder="...todo" />
   <button onClick={props.onclickProps}>Add Todo</button>
   <button onClick={props.onClickP}>Clear</button>
  </div>
 );
};

export default TodoForm;
