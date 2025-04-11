import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const MeteoCard = () => {
  return (
    <Card>
      <Card.Body className='m-1 p-1'>
        This is some text within a card body.
      </Card.Body>
    </Card>
  );
};

export default MeteoCard;
