import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const Error = () => {
  return (
    <Container>
      <Row style={{ justifyContent: "center", marginTop:"20px"}}>
        <Col sm="6">
          <Card body>
            <CardTitle><h1>Page Not Found</h1></CardTitle>
              <Link to="/eventlist"><Button>Home</Button></Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;