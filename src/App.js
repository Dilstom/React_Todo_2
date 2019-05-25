import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
 constructor() {
  super();
  this.state = {
   title: 'Todo List: MVP',
   message: '',
   list: [
    {
     task: 'Organize Garage',
     id: 1528817077286,
     completed: false,
    },
    {
     task: 'Bake Cookies',
     id: 1528817084358,
     completed: false,
    },
   ],
  };
 }

 handleChange = e => {
  e.preventDefault();
  this.setState({ message: e.target.value });
  console.log('this state message: ', this.state.message);
 };

 handleSubmit = e => {
  e.preventDefault();
  const newList = this.state.list.slice();
  if (this.state.message === '') {
   return;
  } else {
   const newObject = {
    task: this.state.message,
    id: Date.now(),
    completed: false,
   };
   newList.push(newObject);
   //   this.setState({ list: newList });
   this.setState({ list: newList, message: '' }); // doesn't work
  }
 };

 toggleFlag = id => {
  const newList = this.state.list.map(item => {
   if (item.id === id) {
    item.completed = !item.completed;
    return item;
   }
   return item;
  });
  this.setState({ list: newList });
  console.log(this.state.list);
 };

 clearCompleted = () => {
  let newList = this.state.list.slice();
  newList = newList.filter(item => item.completed === false);
  console.log(newList);
  this.setState({ list: newList });
 };

 render() {
  return (
   <div>
    <h2>{this.state.title}</h2>
    <TodoList listProps={this.state.list} toggleProps={this.toggleFlag} />
    <TodoForm
     message={this.state.message}
     onChangeProps={this.handleChange}
     onclickProps={this.handleSubmit}
     clearProps={this.clearCompleted}
    />
   </div>
  );
 }
}

export default App;
