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
