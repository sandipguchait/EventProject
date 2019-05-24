import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button , Container} from 'reactstrap';

const Example = (props) => {
  return (
    <Container>
      <Card>
        <CardImg  width="100%" src="https://res.cloudinary.com/xjailbreak/image/upload/v1558689359/home.png" alt="Card image cap" />
        <Button color="success" href="/eventlist"><h2>RE-EVENTS 2019</h2></Button>
      </Card>
    </Container>
  );
};

export default Example;