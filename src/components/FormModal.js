import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


export class FormModal extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={(e)=> this.props.updateFav(e)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" name="strDrink" defaultValue={this.props.updateData.strDrink} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" name="strDrinkThumb" defaultValue={this.props.updateData.strDrinkThumb} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
            Save Changes
          </Button>
  </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
            </div>
        )
    }
}

export default FormModal
