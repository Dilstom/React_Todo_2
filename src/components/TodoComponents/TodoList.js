// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
 console.log('props in todolist: ', props);
 return (
  <div>
   {props.listProps.map((item, i) => (
    <div key={i} onClick={() => props.toggleProps(item.id)}>
     <Todo item={item} />
    </div>
   ))}
  </div>
 );
};

export default TodoList;
