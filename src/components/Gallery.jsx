import { Card, Container, Row } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

function Gallery(){
    return (
        <>
            <Container>
                <Row style={{marginTop:'20px'}}>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="src/components/gallery/IMG_20181018_185550.jpg" />
                            <Card.Body>
                            <Card.Title>Blankets Distribution</Card.Title>
                            <Card.Text>
                                Distribution of blankets for elderly people
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Jan 25, 2023</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="src/components/gallery/IMG_20181020_115533.jpg" />
                            <Card.Body>
                            <Card.Title>Groceries</Card.Title>
                            <Card.Text>
                                Providing required montly groceries for an old age home.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">July 19, 2023</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="src/components/gallery/IMG_20190126_134117.jpg" />
                            <Card.Body>
                            <Card.Title>Nutrition Dose</Card.Title>
                            <Card.Text>
                                Distributing Apples and required medicines for orphanage kids.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Nov 12, 2023</small>
                            </Card.Footer>
                        </Card>
                        </CardGroup>
                    </Row>
                </Container>
        </>
    )
}
export default Gallery;