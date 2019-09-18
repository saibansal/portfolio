import React from 'react'


class NavigationList extends React.Component{  
    render(){ 
        return(
             <li 
                className={this.props.navigationClass} 
                data-id={this.props.dataIdName} 
             >
                 <a>
                    {this.props.PortfolioDetails}
                </a> 
             </li>
         )
    }
}

export default NavigationList;