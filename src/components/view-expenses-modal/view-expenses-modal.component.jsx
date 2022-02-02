import React from 'react'
import { useBudgets } from '../../contexts/BudgetContext'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Stack } from 'react-bootstrap'


export default function ViewExpensesModal({ show, handleClose, budgetId }) {

    const { getBudgetExpenses } = useBudgets()

    const expenses = getBudgetExpenses(budgetId)


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Stack direction='horizontal' gap={3} className='mb-4'>
                    <Modal.Title className='me-auto'>Expenses</Modal.Title>
                    <Button variant='danger'>Delete</Button>
                </Stack>
            </Modal.Header>
            <Modal.Body>
                {
                    expenses.map(expense => (
                        <div key={expense.id} className='mb-3'>
                            <h3>{expense.description}</h3>
                            <p>{expense.amount}</p>
                            <Button variant='danger'>Delete</Button>
                        </div>
                    ))
                }
            </Modal.Body>
        </Modal>
    )
}