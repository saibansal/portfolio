import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';

import TodoList from './components/todolist';

class TodoContent extends React.Component{
  render(){
    return(
      <TodoList /> 
    )
  }
} 
ReactDOM.render(<TodoContent />, document.getElementById('root'));