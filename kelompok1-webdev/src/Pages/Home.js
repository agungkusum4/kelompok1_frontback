import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../components/home.css'; 
import Irigasi from '../Images/Irigasi.jpg'

const Home = () => {
  return (
    <Container>
      <Row className="mt-5 gx-5">
        <Col>
          <h1>GREENTECH IRIGASMART</h1>
          <p className="paragraph"> Greentech irigasmart merupakan alat utuk membantu para petani
              dalam melakukan sistem irigasi otomatis. Diharapkan dapat membantu para petani untuk
              mendorong  penggunaan air secara efisien dengan memanfaatkan sensor kelembapan tanah
              untuk memberikan irigasi yang tepat.</p>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Irigasi} style={{height: '350px'}}/>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
