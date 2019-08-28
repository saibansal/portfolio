import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () =>{
    return(
        <section>
            <div className="login-container">
                <div className="login-box">
                    <Form>
                        <FormGroup row>
                            <Label for="userName" sm={12}>Email</Label>
                            <Col sm={12}>
                                <Input type="email" name="email" id="userName" placeholder="Useremail" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="userPassword" sm={12}>Password</Label>
                            <Col sm={12}>
                                <Input type="password" name="password" id="userPassword" placeholder="Password" />
                            </Col>
                        </FormGroup>
                        <Col sm={12} className="text-center mt-4">
                            <Button color='primary'>Sign in</Button>
                        </Col>
                        <p className="w-100 float-left text-center pt-2">
                            Go to Dashboard
                        </p>
                    </Form>
                </div>
            </div>

        </section>
    )
}

export default Login;