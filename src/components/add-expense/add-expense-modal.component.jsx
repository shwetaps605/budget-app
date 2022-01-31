import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useRef } from 'react'
import { useBudgets,UNCATEGORIZED_BUDGET_ID } from '../../contexts/BudgetContext'

export default function AddExpenseModal({ show, handleClose, defaultBudgetId }) {

    const descRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const { addExpense, budgets } = useBudgets()
    
    function handleSubmit(e) {
        console.log("Form submit happening")
        e.preventDefault()
        addExpense({
            description: descRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value
        })
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>
                    Add Expense
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Where did you spend?</Form.Label>
                        <Form.Control
                            type='text'
                            required
                            ref={descRef} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='amount'>
                        <Form.Label>How much did you spend</Form.Label>
                        <Form.Control
                            type="number"
                            required
                            ref={amountRef}
                            step={0.01}
                            min={0} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='budgetId'>
                        <Form.Label>Select Budget</Form.Label>
                        <Form.Select
                            defaultValue={defaultBudgetId}
                            ref={budgetIdRef}
                        >
                            <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
                            {budgets.map(budget => (
                                <option key={budget.id} value={budget.id}>{budget.name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <div className='d-flex justify-content-end'>
                        <Button className='primary' type='submit'>Add</Button>
                    </div>

                </Form>
            </Modal.Body>

        </Modal>
    )
}