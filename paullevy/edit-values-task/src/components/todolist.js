import React from 'react'
import TodoItem from './todoitem';
import TodoForm from './todoform';

class TodoList extends React.Component {
  constructor() {
    super(); 
    this.addTask = this.addTask.bind(this); 
    this.state = {
      tasks: [],
      currentTask: ''
    }
  } 
  
  addTask(evt) {
    evt.preventDefault();
    let tasks = this.state.tasks.slice();
    let currentTask = this.state.currentTask;
    tasks.push({
      fname: currentTask,
      completed: false
    })

    this.setState({
      tasks,
      currentTask: ''
    })
  }
 
   
  render() {
    return (
      <section>
        <TodoForm
          currentTask={this.state.currentTask} 
          addTask={this.addTask}
        />
        <div className="todolist">
        <ul>
        <li  >
        <span> fasdsa</span>
        <div className="buttonsgroup">
          <button> fdsadfsdf </button>
        </div>
      </li> 
          {
            this.state.tasks.map((task, index) => {
              return <TodoItem
                details={task}
                index={index} 
                key={index} 
              />
            })
          }
        </ul>
        </div>
      </section>
    )
  }
}
export default TodoList;