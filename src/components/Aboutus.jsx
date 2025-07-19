import { Card, Col, Row } from 'react-bootstrap';

function About(){
        return (
            <>
                <Row className='justify-content-center' style={{'marginTop':'20px'}}>
                    <Col lg="10">
                        <Card>
                            <Card.Img variant="top" src="src/components/media/aboutus.jpg" />
                        </Card>
                    </Col>
                </Row>
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
                <Row className='justify-content-center' style={{'marginTop':'20px'}} id="vision">
                    <Col lg="10">
                        <Card>
                            <Card.Body>
                                <Card.Title>OASF's Values</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>
                                            Optimism: OASF believes in the transformative power of a single smile to brighten lives and communities.
                                        </li>
                                        <li>
                                            Altruism: Our mission at OASF is to give selflessly, dedicate ourselves to changing lives, and make a positive impact on the less fortunate.
                                        </li>
                                        <li>
                                            Sincerity: Sincerity is a core value at OASF. We approach our work with dedication and a genuine desire to help, ensuring our efforts are heartfelt and authentic.
                                        </li>
                                        <li>
                                            Fellowship: OASF promotes fellowship among members and communities, uniting for a common cause.
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='justify-content-center' style={{'marginTop':'20px','marginBottom':'20px'}} id="ourwork">
                    <Col lg="10">
                        <Card>
                            <Card.Body>
                                <Card.Title>Our Work</Card.Title>
                                <Card.Text>
                                    <ul style={{'listStyle':'none'}}>
                                        <li>
                                            <h5>Education:</h5>
                                            <p>
                                                At OASF, we firmly believe that education is the key to unlocking the full potential of individuals 
                                                and communities. We are dedicated to ensuring that every child, regardless of background, has access 
                                                to high-quality education. OASF supports children and young minds by accompanying them on their educational 
                                                journey and providing them with scholarships based on merit, paying for tuition and college fees, and providing 
                                                free books, bags, educational kits, and more. Our commitment lies in illuminating futures and creating opportunities 
                                                for a brighter tomorrow.
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Health:</h5>
                                            <p>
                                            Access to good healthcare is a fundamental aspect of leading a fulfilling life. At OASF, we understand the 
                                            significance of accessible healthcare services, especially for the underprivileged. Our organization offers a 
                                            helping hand to those in need by providing medical assistance, healthcare support, and contributing to minor and 
                                            major operations, as well as providing access to essential medications. We strongly believe everyone should have the 
                                            opportunity to live a healthy and fulfilling life, and our health initiatives aim to make this belief a reality.
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Food for the Needy:</h5>
                                            <p>
                                            Access to food is a fundamental requirement for individuals and families. At OASF, we tackle this challenge
                                             through food distribution programs and drives. We aim to guarantee that healthy meals are provided to those who 
                                             require them the most. With the help of our kind donors and committed volunteers, we are dedicated to reducing the 
                                             impacts of hunger and providing nourishment to people in need.
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Support for the Physically Challenged:</h5>
                                            <p>
                                            At OASF, we are committed to supporting and empowering individuals with physical challenges. 
                                            Our services cater to those with mobility impairments, providing them with essential equipment such 
                                            as wheelchairs and canes. We also offer significant resources for those with visual impairments, 
                                            including Braille materials and audio aids. Additionally, we support those who are deaf or mute, 
                                            offering sign language training and communication devices. Our mission is to promote inclusivity 
                                            and independence for all individuals, regardless of physical abilities. We believe that everyone 
                                            deserves a life of dignity and opportunity. At OASF, we strive to make this possible by addressing 
                                            the unique needs of each person we serve. We are dedicated to improving their quality of life and 
                                            ensuring no one is left behind.
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Social Awareness Programs:</h5>
                                            <p>
                                                Awareness is the first step toward change. OASF conducts various social awareness programs designed 
                                                to educate and inform communities on critical issues. These programs address societal challenges, such as 
                                                environmental conservation, women's empowerment, food safety and security, and disaster relief. OASF is 
                                                dedicated to being a catalyst for change and strives to empower communities with knowledge and resources to 
                                                create a better, more informed society.
                                            </p>
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        )
}

export default About;