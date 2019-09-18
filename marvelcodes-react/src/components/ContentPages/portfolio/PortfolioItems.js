import React from 'react' 

class PortfolioItems extends React.Component {  
    render (){
        return(
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 position-relative mb-4 float-left portfolio-items" data-id="first"  data-toggle="modal" data-target=".portfolio-popup-modal-lg">
             <img src={this.props.ListUrl} className="img-fluid" alt="" />
            <div className="item-caption">
                <a href="#">{this.props.PortfolioDetails}</a>
            </div>
        </div>
        )
    }
}



export default PortfolioItems;