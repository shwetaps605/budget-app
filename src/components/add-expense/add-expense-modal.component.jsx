import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function AddExpenseModal({ show, handleClose }) {

    function handleSubmit() {
        console.log("Form submit happening")
    }

    return (
        <Modal show={true}>
            <Modal.Header>
                <Modal.Title>
                    Add Expense
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        
                    </Form.Group>
                </Form>
            </Modal.Body>

        </Modal>
    )
}