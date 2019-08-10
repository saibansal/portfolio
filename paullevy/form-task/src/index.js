import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Row, Col, Table, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class FormTask extends React.Component {
    render() {
        return (
            <section>
                 <Container>
                    <Row>
                    <Col xs="12" sm="6" md="4" lg="5"> Col 1</Col>  
                    <Col> Col 2</Col>  
                    <Col> Col 3</Col>  
                    </Row>
                    <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
        </Row>
                 </Container>
                              
                <h1> Manage Forms</h1>
                <Button color="danger">Danger!</Button>
                 
            </section>
        )
    }
}


ReactDOM.render(<FormTask />, document.getElementById('form-task'));