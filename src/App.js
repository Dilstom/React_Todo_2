import React from 'react';

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
    <TodoForm
     onChangeProps={this.handleChange}
     onclickProps={this.handleSubmit}
    />
      </div>
    );
  }
}

export default App;
