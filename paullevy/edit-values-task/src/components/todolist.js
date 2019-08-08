import React from 'react'
import TodoItem from './todoitem';
import TodoForm from './todoform';

class TodoList extends React.Component {
  constructor() {
    super();
    this.changeStatus = this.changeStatus.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.state = {
      tasks: [],
      currentTask: ''
    }
  }

  deleteTask (index){
    console.log(index)
    let tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({
      tasks
    })
  }
 
  updateTask(newValue) {
    this.setState({
      currentTask: newValue.target.value
    });
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

  editTask(index, newValue){
    var tasks=this.state.tasks;
    var task=tasks[index];
    task['fname']=newValue;    
    this.setState({
      tasks
    })
  }
  
  changeStatus(index) { 
    var tasks = this.state.tasks;
    var task = tasks[index];
    task.completed = !task.completed;
    this.setState({
      tasks
    })
  }

  render() {
    return (
      <section>
        <TodoForm
          currentTask={this.state.currentTask}
          updateTask={this.updateTask}
          addTask={this.addTask}
        />
        <div className="todolist">
        <ul>
          {
            this.state.tasks.map((task, index) => {
              return <TodoItem
                details={task}
                index={index}
                clickHandler={this.changeStatus}
                key={index}
                lastname={task.lname}
                deleteTask={this.deleteTask}
                editTask={this.editTask}
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