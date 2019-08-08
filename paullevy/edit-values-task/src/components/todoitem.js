import React from 'react';

class TodoItem extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
      isEditing : false
    }

    this.renderForm = this.renderForm.bind(this);
    this.renderitem = this.renderitem.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  updateItem(evt){
    evt.preventDefault(); 
    this.props.editTask(this.props.index, this.input.value);
    this.toggleState();
  }
  toggleState(){
    const {isEditing} = this.state;
    this.setState({
      isEditing : !isEditing
    })
  }
  renderitem(){
      return(
        <li onClick={() => {
          this.props.clickHandler(this.props.index)
        }}
 
          // className={this.props.details.completed ? 'task-completed' : 'not-completed'}
        >
          <span> {this.props.details.fname}</span>
           
          <div className="buttonsgroup">
          <button onClick={(evt) => {
            evt.stopPropagation();
            this.props.deleteTask(this.props.index)
          }}>Delete </button>
 
          &nbsp;
   
        <button onClick={(evt) => {
            evt.stopPropagation();
            this.toggleState()
          }}>Edit </button>
 </div>
        </li> 
      )
  }
  renderForm (){
    return(
      <form className="update-form" onSubmit={this.updateItem}> 
        <span> <input type="text" ref={(value) => {
          this.input = value

        }} defaultValue={this.props.details.fname} /></span>
        <button type="submit">Update</button>
        </form> 
    )
  }
  render() {
    const {isEditing} = this.state;
    return (
      <section>
        {
          isEditing ? this.renderForm () : this.renderitem()
        }  
      </section>
    )
  }
}
export default TodoItem;