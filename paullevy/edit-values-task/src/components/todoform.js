import React from 'react';
const TodoForm = (props) => {
    return (
        <form onSubmit={props.addTask}>
            <input type="text" required autoFocus
                value={props.currentTask}
                onChange={props.updateTask}
            />  &nbsp;

             {/* <input type="text" required
                value={props.lcurrentTask}
                onChange={props.lupdateTask}
            /> */}

            <button type="submit">Add task</button>
        </form>
    )
}
export default TodoForm; 