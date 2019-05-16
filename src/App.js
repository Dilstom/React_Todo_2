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
  //   console.log('this state message: ', this.state.message);
 };

 handleSubmit = e => {
  const newList = this.state.list.slice();
  const newObject = {
   task: this.state.message,
   id: Date.now(),
   completed: false,
  };
  newList.push(newObject);
  //   this.setState({ list: newList });
  this.setState({ list: newList, message: '' }); // doesn't work
 };
  this.setState({ list: newList });
  //   this.setState({ list: newList, message: '' }); // doesn't work
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
