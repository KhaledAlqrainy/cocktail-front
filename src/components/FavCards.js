import React, { Component } from 'react'
import {Card, Col, Row, Button } from 'react-bootstrap'

export class FavCards extends Component {
    render() {
        return (
            <div>
                <Row>
                {this.props.apiCrudData.map((i,n)=>(
                <Col key={n}>

                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={i.strDrinkThumb} />
  <Card.Body>
    <Card.Title>{i.strDrink}</Card.Title>
    <Button variant="danger" onClick={()=> this.props.deleteFav(i._id)}>delete</Button>
    <Button variant="primary" onClick={()=> this.props.handleModal(i)}>Update</Button>
  </Card.Body>
</Card>

</Col>
                ))}
</Row>
            </div>
        );
    }
}


export default FavCards
