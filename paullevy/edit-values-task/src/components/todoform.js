import React from 'react';
const TodoForm = (props) => {
    return (
        <section className="addValueForm">
            <form onSubmit={props.addTask}>
                <button type="submit" className="btn btn-link"><i className="fas fa-plus-circle"></i> Add Feild</button>
            </form>
        </section>
    )
}
export default TodoForm; 
 