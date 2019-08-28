import React from 'react'
// import { BrowserRouter as  Router, Route, Link } from "react-router-dom";
import { Container, Col, Row } from 'reactstrap';
const Dashboard = () => {
    return (
        <section>
            <Container>
                <Row className="pt-3 pb-3">
                    <Col xs={'2'} md={'2'}> Logo Here </Col>
                    <Col xs={'10'} md={'10'}>
                        <ul class="top-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/dashboard">Dashboard</a></li>
                            <li><a href="/">Logout</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Dashboard;