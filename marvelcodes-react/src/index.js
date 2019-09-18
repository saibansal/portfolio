import React from 'react';
import ReactDOM from 'react-dom'
import Header from './components/header/header';
import ContentContainer from './components/ContentPages/ContentContainer';
import PortfolioPopup from '../src/components/ContentPages/portfolio/PortfolioPopUp';
class MarvelCode extends React.Component {
    componentDidMount(){
        document.title = "Karan Saluja"
      }
    render() {
        return (
            <div>
                <Header />
                <ContentContainer />
                <PortfolioPopup />
            </div>
        )
    }
}



ReactDOM.render(<MarvelCode />, document.getElementById('root'));