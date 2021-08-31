import React, { Component } from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'

export class ApiData extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row md={3}>
                        {this.props.apiData.map((i,n)=> (
                            <Col key={n}>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={i.strDrinkThumb} />
  <Card.Body>
    <Card.Title>{i.strDrink}</Card.Title>
    
    <Button variant="primary" onClick={()=> {
        this.props.addingFav(i)
    }}>add to fav</Button>
  </Card.Body>
</Card>
</Col>
                           )   )}
</Row>
</Container>
            </div>
        );
    }
}

export default ApiData
