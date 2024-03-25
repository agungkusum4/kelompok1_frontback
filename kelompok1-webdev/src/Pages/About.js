import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


// Import gambar untuk setiap anggota
import Agung from '../Images/Agung.jpg';
import Sayyid from '../Images/Sayyid.jpg';
import Agish from '../Images/Agish.jpg';
import Adiba from '../Images/Adiba.jpg';

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Member Of GREENTECH IRIGASMART</h1>
          <p>Perkenalkan berikut adalah beberapa anggota dari kelompok 4 "GREENTECH IRIGASMART" :</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Agung} />
            <Card.Body>
              <Card.Title>Muhammad Agung Kusumawainata</Card.Title>
              <Card.Text>
                Nick Name : Agung.<br/>
                NIM : 1101220120.<br/>
                IG  : 
                <Card.Link href="https://www.instagram.com/inibukanagungg/"> inibukanagungg_</Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Sayyid} />
            <Card.Body>
              <Card.Title>Sayyid Izzuddin Mubarok</Card.Title>
              <Card.Text>
                Nick Name : Sayyid.<br/>
                NIM : 1101213340.<br/>
                IG  : 
                <Card.Link href="https://www.instagram.com/sayyidizzuddin/"> sayyidizzuddin</Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Agish} />
            <Card.Body>
              <Card.Title> Naisya Aghis Nabila</Card.Title>
              <Card.Text>
                Nick Name : Agish.<br/>
                NIM : 1101223215.<br/>
                IG  : 
                <Card.Link href="https://www.instagram.com/nsyaghis/"> nsyaghis</Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Adiba} />
            <Card.Body>
              <Card.Title>Adiba Raniah Haliza Yasmine</Card.Title>
              <Card.Text>
                Nick Name : Adiba.<br/>
                NIM : 1101223199.<br/>
                IG  : 
                <Card.Link href="https://www.instagram.com/adibarnhlz/"> adibarnhlz</Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
