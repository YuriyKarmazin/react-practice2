import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
import ProductData from '../data/data.json';

export default function ProductCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ProductData.products[props.id].img}/>
      <Card.Body>
        <Card.Title>{ProductData.products[props.id].title}</Card.Title>
        <Card.Text>{ProductData.products[props.id].price}</Card.Text>
        <Button variant="success">Buy</Button>
      </Card.Body>
    </Card>
  );
}
