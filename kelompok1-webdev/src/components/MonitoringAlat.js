import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase'; 
import { Card, Row, Col } from 'react-bootstrap';

const app = initializeApp(firebaseConfig);

const MonitoringAlat = () => {
  const [sensorData, setSensorData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase(app);
        const soilMoistureRef = ref(db, '/Soil-Moisture');
        const ultrasonicRef = ref(db, '/Ultrasonik');

        onValue(soilMoistureRef, (snapshot) => {
          const soilMoistureData = snapshot.val();
          setSensorData((prevData) => ({
            ...prevData,
            soil_moisture: soilMoistureData 
          }));
        });

        onValue(ultrasonicRef, (snapshot) => {
          const ultrasonicData = snapshot.val();
          setSensorData((prevData) => ({
            ...prevData,
            ultrasonic: ultrasonicData 
          }));
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className='monitor'>
      <h3>Monitoring Alat</h3>
      {error ? (
        <p>Error: {error}</p>
      ) : sensorData ? (
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Soil Moisture</Card.Title>
                <Card.Text>
                  <strong>Value:</strong> {sensorData.soil_moisture} 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Ultrasonic</Card.Title>
                <Card.Text>
                  <strong>Value:</strong> {sensorData.ultrasonic} cm
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MonitoringAlat;
