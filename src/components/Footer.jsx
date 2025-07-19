import { Row, Col } from "react-bootstrap";
function Footer(){
    return (
        <>
            <Row style={{background:"black", color:"white",lineHeight:'50px',marginTop:'220px',textAlign:'center',verticalAlign:'middle'}} className="justify-content-center text-align-center">
                <Col>
                    All rights reserved. Designed and developed by Offerasmile.org
                </Col>
            </Row>
        </>
    )
}

export default Footer;