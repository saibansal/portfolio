import React from 'react';

class TodoItem extends React.Component {
  renderitem(){
    return(
      <li onClick={() => {
        this.props.clickHandler(this.props.index)
      }} 
      >
        <span> {this.props.details.fname}</span>
        <div className="buttonsgroup">
          <button onClick={(evt) => {
            evt.stopPropagation();
          }}>Delete </button>
        </div>
      </li> 
    )
  } 
  
  render() { 
    return (
      <section>
        {this.renderitem()}
      </section>
    )
  }
}
export default TodoItem;