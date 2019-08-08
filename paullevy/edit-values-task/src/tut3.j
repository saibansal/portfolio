import React from 'react';
import ReactDOM from 'react-dom';


class TodoList extends React.Component{
  constructor(){
    super();
    this.state = {
      names : ['Vishal Ba nsal', 'May', 'June', 'July']
    }
  }
 render(){
   return(
     <ul>
       {
         this.state.names.map(function(name){
          return  <TodoItem details={name} key={name} />;
         })
       }
      
     </ul>
   )
 }
}

class TodoItem extends React.Component{
  render(){
    return(
      <li>
        {this.props.details}
      </li>
    )
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));