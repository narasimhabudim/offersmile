import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { useState } from 'react';

function Contactus(){
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
    };
    return (
        <>
            <Container>
                <Row style={{marginTop:'20px'}} className="justify-content-center">
                    <Col lg="5" style={{marginTop:'50px'}}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Table bordered hover>
                        <thead>
                            <tr align="center" >
                                <th style={{backgroundColor:'black',color:'white'}}>Inquiry</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                                        <Form.Control required name="name" type="text" placeholder="" />
                                        <Form.Control.Feedback type="invalid">Please provide a name.</Form.Control.Feedback>
                                    </FloatingLabel>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FloatingLabel controlId="floatingInput" label="Mobile" className="mb-3">
                                        <Form.Control required name="mobile" type="text" placeholder="" />
                                        <Form.Control.Feedback type="invalid">Please provide mobile number.</Form.Control.Feedback>
                                    </FloatingLabel>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FloatingLabel controlId="floatingInput" label="Email Address" className="mb-3">
                                        <Form.Control required name="email" type="email" placeholder="" />
                                        <Form.Control.Feedback type="invalid">Please provide your email address.</Form.Control.Feedback>
                                    </FloatingLabel>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FloatingLabel controlId="floatingSelect" label="Query type">
                                        <Form.Select required aria-label="choose one">
                                            <option value="volunteer_related_query">Volunteer Related Query</option>
                                            <option value="donation_related_query">Donation Related Query</option>
                                            <option value="others">Others</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                    </FloatingLabel>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                        <Form.Control required name="comment" as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                                        <Form.Control.Feedback type="invalid">Provide comment</Form.Control.Feedback>
                                    </FloatingLabel>
                                </td>
                            </tr>
                            <tr align="center">
                                <td>
                                    <Button type="submit" variant="success">Send Request</Button>
                                </td>
                            </tr>
                        </tbody>
                        </Table>
                        </Form>
                    </Col>
                    <Col lg="6">
                        <Card border="info">
                            <Card.Header>Contact Us</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <span>
                                    <strong>Address:</strong> 
                                    <span>1654, 12th cross road, Mariappanapalya, Rajajinagar,
                                        Bengaluru, Karnataka 560021
                                    </span>
                                </span>
                                <br />
                                <span>
                                    <strong>Mobile No: </strong> 
                                    <span>
                                        <a href="tel:09533401234">095334 01234</a>
                                    </span>
                                </span>
                                <br />
                                <span>
                                    <strong>Email: </strong> 
                                    <span>
                                        <a href="mailto:info@offerasmile.org">info@offerasmile.org</a>
                                    </span>
                                </span>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="info" style={{marginTop:'20px'}}>
                            <Card.Header>NGO details</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <span>
                                    <strong>NGO Name: </strong> 
                                    <span>Offer A Smile</span>
                                </span>
                                <br />
                                <span>
                                    <strong>Reg No: </strong> 
                                    <span>9999/12/99999999999999</span>
                                </span>
                                <br />
                                <span>
                                    <strong>State: </strong> 
                                    <span>Karnataka</span>
                                </span>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="info" style={{marginTop:'20px'}}>
                            <Card.Header>Bank details</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <span>
                                    <strong>Bank & Branch: </strong> 
                                    <span>Axis Bank, Rajajinagar branch</span>
                                </span>
                                <br />
                                <span>
                                    <strong>Account No:</strong> 
                                    <span>999999999999999999</span>
                                </span>
                                <br />
                                <span>
                                    <strong>IFSC Code:</strong> 
                                    <span>xxxxxxxxxxxxxxxxxxxxx</span>
                                </span>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="info" style={{marginTop:'20px'}}>
                            <Card.Header>Legal details</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <span>Here are the </span> 
                                <span>
                                    <a href="/privacy">Privacy Policy</a>
                                </span>
                                <span> and </span>
                                <span>
                                    <a href="/refund">Refund Policy</a>
                                </span>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contactus;