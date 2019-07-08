import React from 'react'
import { Button, Modal } from 'react-bootstrap'

class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleOpen() {
    this.setState({ show: true });
  }

  render() {
    return (
      <React.Fragment>
        <Button variant="info" onClick={this.handleOpen}>
          Edit
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="info" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    )
  }
}

export default Edit