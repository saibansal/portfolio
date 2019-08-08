import React from 'react';
const TodoForm = (props) => {
    return (
        <section className="addValueForm">
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
        </section>
    )
}
export default TodoForm; 