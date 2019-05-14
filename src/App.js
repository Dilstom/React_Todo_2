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
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
