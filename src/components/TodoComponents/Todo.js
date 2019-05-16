import React from 'react';
import './Todo.css';

const Todo = props => {
 //  console.log('props in todo: ', props);
 return (
  <div className={`${props.item.completed ? null : 'line'}`}>
   {props.item.task}
  </div>
 );
};

export default Todo;
