import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
 constructor() {
  super();
  this.state = {
   title: 'Todo List: MVP',
   message: '',
   list: ['learn react', 'clean table'],
  };
 }

 handleChange = e => {
  e.preventDefault();
  this.setState({ message: e.target.value });
  //   console.log('this state message: ', this.state.message);
 };

 handleSubmit = e => {
  //   e.preventDefault();
  const newList = this.state.list.slice();
  //   console.log(newList);
  newList.push(this.state.message);
  this.setState({ list: newList, message: '' });
 };

 render() {
  return (
   <div>
    <h2>{this.state.title}</h2>
    <TodoList listProps={this.state.list} />
    <TodoForm
     onChangeProps={this.handleChange}
     onclickProps={this.handleSubmit}
    />
   </div>
  );
 }
}

export default App;
