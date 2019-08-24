import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import TodoList from './components/todolist';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.css';

class TodoContent extends React.Component{
  render(){
    return(
      <section>
        <Header />
        <TodoList /> 
      </section>
    )
  }
} 
ReactDOM.render(<TodoContent />, document.getElementById('root'));