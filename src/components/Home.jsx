import BannerComponent from "./Banner";
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

function Home(){
        return (
            <>
                <BannerComponent />
                <Row className='justify-content-center' style={{'marginTop':'20px'}} id="overview">
                    <Col lg="10">
                        <Card>
                            <Card.Body>
                                <Card.Title>Overview</Card.Title>
                                <Card.Text>
                                    Offer A Smile Foundation (OASF) is a light of hope and compassion, enlightening the lives of those in need since its inception on June 13, 2018. Founded by a group of five enthusiastic and like-minded individuals with a profound mission: "being a reason for someone's smile."
                                    With unwavering dedication, OASF primarily focuses on education, health, social awareness, and offering food to those in need. We always believe that a single smile can brighten life and that collective smiles can illuminate entire communities; we tirelessly strive to make this vision a reality.
                                    We're not just an organization; we're a promise, a commitment to changing lives, and an embodiment of the belief that kindness knows no boundaries.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                </Row>
            </>
        )
}

export default Home;