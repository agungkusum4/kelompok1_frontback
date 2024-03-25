import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ultrasonik from '../Images/ultrasonik.jpg';
import ESP8266 from '../Images/ESP8266.jpg';
import NodeMCU from '../Images/NodeMCU.jpg';
import SoilMoisture from '../Images/SoilMoisture.jpg';
import Servo from '../Images/Servo.jpg';
import LED from '../Images/LED.jpg';
import LCD from '../Images/LCD.jpg';
import Breadboard from '../Images/Breadboard.jpg';
import Resistor from '../Images/Resistor.jpg';
import Jumper from '../Images/Jumper.jpg';

import '../components/deskripsi.css';

const Deskripsi = () => {
  return (
    <Container>
      <Row>
        <Col sm={6} md={4}>
          <Card>
            <Card.Img variant="top" src={ultrasonik} />
            <Card.Body>
              <Card.Title>SENSOR ULTRASONIK</Card.Title>
              <Card.Text>
                Sensor ultrasonik adalah perangkat elektronik yang menggunakan gelombang ultrasonik untuk mendeteksi jarak atau keberadaan benda dalam lingkungannya. Mereka bekerja dengan mengirimkan pulsa gelombang suara ultrasonik dan mengukur waktu yang dibutuhkan untuk pantulan kembali dari benda yang terdeteksi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
          <Card>
            <Card.Img variant="top" src={ESP8266} />
            <Card.Body>
              <Card.Title>ESP8266</Card.Title>
              <Card.Text>
              ESP8266 adalah sebuah mikrokontroler yang berkinerja tinggi. Mikrokontroler ini sering digunakan untuk mengontrol perangkat elektronik melalui jaringan Wi-Fi, mengumpulkan data dari sensor, atau berkomunikasi dengan perangkat lain di internet.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
          <Card>
            <Card.Img variant="top" src={NodeMCU} />
            <Card.Body>
              <Card.Title>NodeMCU</Card.Title>
              <Card.Text>
              Extended NodeMCU merupakan varian dari NodeMCU, sebuah platform pengembangan IoT (Internet of Things) yang berbasis pada mikrokontroler ESP8266. Extended NodeMCU memiliki keunggulan tambahan berupa penambahan pin GPIO (General Purpose Input/Output) dan fitur-fitur tambahan seperti antarmuka I2C, SPI, dan UART.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4}>
          <Card>
            <Card.Img variant="top" src={SoilMoisture} />
            <Card.Body>
              <Card.Title>SoilMoisture</Card.Title>
              <Card.Text>
              SoilMoisture adalah sebuah sensor yang digunakan untuk mengukur kadar kelembaban tanah. SoilMoisture membantu dalam memantau kondisi tanah secara real-time, memungkinkan pengguna untuk menentukan waktu yang tepat untuk penyiraman tanaman dan mencegah over- atau under- watering.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
          <Card>
            <Card.Img variant="top" src={LCD} />
            <Card.Body>
              <Card.Title>LCD 16x2</Card.Title>
              <Card.Text>
              LCD 16x2 adalah modul tampilan karakter yang terdiri dari 16 kolom dan 2 baris. Modul ini menggunakan teknologi Liquid Crystal Display (LCD) untuk menampilkan teks dan simbol secara jelas. LCD 16x2 biasanya digunakan dalam berbagai proyek elektronika untuk menampilkan informasi seperti teks, angka, dan karakter khusus.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
          <Card>
            <Card.Img variant="top" src={Servo} />
            <Card.Body>
              <Card.Title>Servo</Card.Title>
              <Card.Text>
              Servo adalah perangkat yang digunakan untuk menggerakkan mekanisme secara presisi ke posisi tertentu. Servo terdiri dari motor, gearbox, dan sensor umpan balik yang memungkinkan pengontrolan posisi atau sudut gerak. Servo umumnya dikontrol melalui sinyal PWM (Pulse Width Modulation) dari mikrokontroler atau perangkat elektronik lainnya.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4}>
          <Card>
            <Card.Img variant="top" src={LED} />
            <Card.Body>
              <Card.Title>LED</Card.Title>
              <Card.Text>
              LED (Light Emitting Diode) adalah sebuah komponen semikonduktor yang menghasilkan cahaya ketika arus listrik melewatinya. LED adalah jenis lampu yang efisien dan tahan lama, serta tersedia dalam berbagai warna dan ukuran.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
          <Card>
            <Card.Img variant="top" src={Breadboard} />
            <Card.Body>
              <Card.Title>Breadboard</Card.Title>
              <Card.Text>
              Breadboard adalah perangkat yang digunakan untuk membuat prototipe sementara dari rangkaian elektronik. Dengan ini Anda dapat merakit dan menguji rangkaian elektronik dengan mudah dan cepat tanpa merusak komponen atau melakukan koneksi permanen.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
          <Card>
            <Card.Img variant="top" src={Resistor} />
            <Card.Body>
              <Card.Title>Resistor</Card.Title>
              <Card.Text>
              Resistor adalah komponen pasif dalam elektronika yang digunakan untuk mengatur aliran arus listrik dalam sebuah rangkaian. Resistor digunakan untuk mengontrol atau membatasi arus listrik, menurunkan tegangan, membagi tegangan, serta melindungi komponen elektronik lainnya dari arus berlebih.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
        <Card>
    <Card.Img variant="top" src={Jumper} />
    <Card.Body>
      <Card.Title>Kabel Jumper</Card.Title>
      <Card.Text>
      Kabel Jumper adalah kabel yang digunakan untuk membuat sambungan sementara antara komponen-komponen yang terhubung pada Breadboard. Kabel ini memiliki konektor pada kedua ujungnya, yang dapat dengan mudah disematkan ke lubang-lubang pada breadboard sesuai dengan komponen lainnya.
      </Card.Text>
    </Card.Body>
  </Card>
</Col>
      </Row>
    </Container>
  );
};

export default Deskripsi;
