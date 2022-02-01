import React from 'react'
import { useBudgets } from '../../contexts/BudgetContext'
import Modal from 'react-bootstrap/Modal'


export default function ViewExpensesModal({ show, handleClose, budgetId }) {

    const { getBudgetExpenses } = useBudgets()

    const expenses = getBudgetExpenses(budgetId)


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Expenses</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    expenses.map(expense => (
                        <div key={expense.id} className='d-flex justify-content-space-between mb-3'>
                            <h3>{expense.description}</h3>
                            <p>{expense.amount}</p>
                        </div>
                    ))
                }
            </Modal.Body>
        </Modal>
    )
}