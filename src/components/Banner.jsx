import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

function BannerComponent(){
        return (
            <Row className='justify-content-center'>
                <Col xs lg="1"></Col>
                <Col md="auto">
                <Carousel slide={false}>
                    <Carousel.Item> 
                        <img src="../src/components/media/banner1.jpg"/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src="../src/components/media/banner2.jpg" />
                    </Carousel.Item>
                </Carousel>
                </Col>
                <Col xs lg="1"></Col>
            </Row>
        )
}

export default BannerComponent;