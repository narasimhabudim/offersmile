import { Container, Col, Row } from "react-bootstrap";

function Refund(){
    return (
        <>
            <Container style={{border:'1px solid #ddd',marginTop:'20px',borderRadius:'10px'}}>
            <Row style={{marginTop:'20px'}}>
                <Col>
                    <h3 style={{marginBottom:'20px'}}>Refund Policy:</h3>
                    <p>
                        At Offer A Smile Foundation, we are immensely grateful for your support and dedication 
                        to our mission of making the world a better place. Your contributions are pivotal in 
                        fueling our initiatives, and we genuinely appreciate your commitment.
                    </p>
                    <p>
                        Donations processed successfully through the payment gateway or other means 
                        will not be refunded. Please consider the cause you wish to support and the amount 
                        you intend to contribute. We are here to ensure that every cent of your donation is 
                        utilized to make a meaningful impact where needed most.
                    </p>
                    <p style={{fontWeight:'bold'}}>
                        Transaction Failures:
                    </p>    
                    <p>
                        In the rare event that a transaction fails to process, please rest 
                        assured that no amount will be deducted. We are dedicated to making your 
                        donation experience as seamless as possible.
                    </p>
                    <p style={{fontWeight:'bold'}}>
                        Our Pledge: 
                    </p>    
                    <p>
                        We are dedicated to transparency, accountability, and ensuring that every donation 
                        contributes directly to our initiatives. Your trust in us is the cornerstone of our 
                        work, and we strive to uphold it with the utmost integrity.
                    </p>
                </Col>
            </Row>
            </Container>
        </>
    )
}

export default Refund;