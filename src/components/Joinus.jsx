import Row from 'react-bootstrap/Row';
import { Card, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';

import Directlink from './Directlink';

function Joinus(){
    const [validated, setValidated] = useState(false);
    const [userSaved,setUserSaved] = useState(false);
    const [submitDisable, setSubmitDisable] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        setSubmitDisable(true);

        const form = event.currentTarget;
        if(form.checkValidity() == false){
            setSubmitDisable(false);
            setValidated(true);
        } else {
            setValidated(true);
            const formData = new FormData(event.target);
            var formDataObj = Object.fromEntries(formData.entries())
            console.log(formDataObj);

            var urlencoded = new URLSearchParams();
            urlencoded.append("fname", formDataObj.fname);
            urlencoded.append("lname", formDataObj.lname);
            urlencoded.append("email", formDataObj.email);
            urlencoded.append("mobile", formDataObj.mobile);
            urlencoded.append("email_preference", formDataObj.email_preference);
            urlencoded.append("whatsapp_preference", formDataObj.whatsapp_preference);

            fetch('/api/user',{
                method:'POST',
                mode: 'cors',
                headers:{'Content-Type':'application/x-www-form-urlencoded'},
                body: urlencoded
            }).then((response)=>{
                if(response && response.status == 201){
                    setUserSaved(true);
                    setSubmitDisable(false);
                    setTimeout(()=>{
                        location.reload(true);
                    },1000);
                }
            });
        }
    };

        return (
            <>
                <Row className='justify-content-center' style={{'marginTop':'20px'}} id="joinus">
                    <Col lg="10">
                        <Card>
                            <Card.Body>
                                <h3>Join Us as a Volunteer: The HeartBeat of OASF <Directlink url="#joinus" /></h3>
                                <Card.Text>
                                    At Offer A Smile Foundation, our volunteers are the heart and soul of our mission. 
                                    They are the driving force behind our commitment to being a reason for someone's smile. 
                                    We invite you to become a part of our dedicated team, the heartbeat of OASF, and make a 
                                    tangible difference in the lives of those in need.
                                </Card.Text>
                                <h4 id="whyvolunteerwithus">Why Volunteer with Us? <Directlink url="#whyvolunteerwithus" /></h4>
                                <Card.Text>
                                    Volunteering with OASF is not just an opportunity to give back; it's a chance to be an 
                                    instrument of positive change. By joining us, you become an essential part of our efforts 
                                    to spread smiles, create opportunities, and make the world a better place. Here's why 
                                    volunteering with us is so rewarding:
                                </Card.Text>
                                <ul>
                                    <li>
                                        <strong>Impactful Contributions:</strong>
                                        <span>
                                        As a volunteer, you'll directly impact the lives of individuals and communities. 
                                        Your time, skills, and dedication will create ripples of change, bringing hope and 
                                        happiness to those who need it most.
                                        </span>
                                    </li>
                                    <li>
                                        <strong>Sense of Purpose:</strong>
                                        <span>
                                            Volunteering with OASF provides a sense of purpose and fulfillment from knowing you've made a 
                                            meaningful difference. It's a chance to be part of something greater than yourself.
                                        </span>
                                    </li>
                                    <li>
                                        <strong>Skill Enhancement:</strong>
                                        <span>
                                            You'll be able to develop and enhance valuable skills, from teamwork and leadership to 
                                        communication and problem-solving. Volunteering with us is not just about giving; it's 
                                        also about personal growth.
                                        </span>
                                    </li>
                                    <li>
                                        <strong>Community:</strong>
                                        <span>
                                            Our volunteers become part of a close-knit and supportive community of like-minded 
                                            individuals with the same passion for making a positive impact. Together, we 
                                            inspire and empower one another.
                                        </span>
                                    </li>
                                    <li>
                                        <strong>Spread Smiles::</strong>
                                        <span>
                                            By volunteering, you become an ambassador of smiles. Your efforts contribute to our vision of spreading 
                                            happiness across miles, making the world a brighter place for everyone.
                                        </span>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='justify-content-center' style={{'marginTop':'20px'}} id="joinus">
                    <Col lg="10">
                        <Card>
                            <Card.Body>
                                <h3>How to Get Involved: <Directlink url="#registrationform" /></h3>
                                <Card.Text>
                                    Getting involved as a volunteer is easy. We have a range of opportunities to match your 
                                    skills, interests, and availability. Whether you're passionate about education, 
                                    healthcare, food support, social awareness, or any of our other initiatives, there's a 
                                    role for you at OASF. Simply fill out the <strong>registration form below</strong>, 
                                    and we'll guide you through becoming a valued member of our volunteer team.
                                </Card.Text>
                                <Row id="volunteerform">
                                    <Col lg="2"></Col>
                                    <Col lg="8">
                                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr align="center">
                                                        <th colSpan={2} style={{background:'black',color:'orange'}}>Registration Form</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="registrationform">
                                                    <tr>
                                                        <td width={'50%'}>First Name</td>
                                                        <td>
                                                            <Form.Control type="text" name="fname" required placeholder="First name" />
                                                            <Form.Control.Feedback type="invalid">Please provide a first name.</Form.Control.Feedback>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Last Name</td>
                                                        <td>
                                                            <Form.Control type="text" name='lname' required placeholder="Last name" />
                                                            <Form.Control.Feedback type="invalid">Please provide a last name.</Form.Control.Feedback>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mobile</td>
                                                        <td>
                                                            <Form.Control type="text" name='mobile' required placeholder="Mobile" />
                                                            <Form.Control.Feedback type="invalid">Please provide a mobile number.</Form.Control.Feedback>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email</td>
                                                        <td>
                                                            <Form.Control type="email" name='email' required placeholder="Email" />
                                                            <Form.Control.Feedback type="invalid">Please provide your email address.</Form.Control.Feedback>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Date of Birth</td>
                                                        <td>
                                                            <Form.Control type="date" name='dob' required placeholder="Date of birth" />
                                                            <Form.Control.Feedback type="invalid">Please provide a date of birth</Form.Control.Feedback>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Address</td>
                                                        <td> 
                                                            <Form.Control as="textarea" name='address' required rows={3} />
                                                            <Form.Control.Feedback type="invalid">Please provide your address.</Form.Control.Feedback>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Permission to Contact over WhatsApp</td>
                                                        <td>
                                                            <Form.Select required name='whatsapp_preference'>
                                                                <option value="yes">Yes</option>
                                                                <option value="no">No</option>
                                                            </Form.Select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>I want to receive OASF's newsletter and emails about upcoming events.</td>
                                                        <td>
                                                            <Form.Select required name='email_preference'>
                                                                <option value="yes">Yes</option>
                                                                <option value="no">No</option>
                                                            </Form.Select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={2}>
                                                            <strong>By submitting this form, I agree to your <a href="#">Privacy Policy</a>.</strong>
                                                        </td>
                                                    </tr>
                                                    <tr align="center">
                                                        <td colSpan={2}>
                                                            <Button type="submit" variant="success" disabled={submitDisable} >
                                                                <Spinner  style={{display: submitDisable?'inline-block':'none'}}
                                                                as="span"
                                                                animation="grow"
                                                                size="sm"
                                                                role="status"
                                                                aria-hidden="true"
                                                                />
                                                                {submitDisable?' Saving....':' Submit'}
                                                            </Button>
                                                            <span>{userSaved?' User created successfully':''}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={2} style={{fontStyle:'italic'}}>
                                                            Join us in our journey to bring happiness, hope, and a brighter future 
                                                            to those most need it. Together, we can offer a smile to the world.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Form>
                                    </Col>
                                    <Col lg="2"></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>        
            </>
        )
}

export default Joinus;