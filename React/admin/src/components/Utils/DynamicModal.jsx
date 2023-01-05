import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';
export default function DynamicModal ({show, handleClose, title, handleSave}){
    return (
        <>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>Done</Button>
        </Modal.Footer> */}
      </Modal>
        </>
    )
}