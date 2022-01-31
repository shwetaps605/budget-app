import './App.scss'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import BudgetCard from './components/budget-card/budget-card.component'
import AddBudgetModal from './components/add-budget/add-budget-modal.component'
import AddExpenseModal from './components/add-expense/add-expense-modal.component'
import UncategorizedBudgetCard from './components/uncategorized/uncategorized-budget-card.component'
import TotalBudgetCard from './components/total-budget-card/total-budget-card.component'
import { useState } from 'react'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './contexts/BudgetContext'

function App() {

    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
    const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
    const { budgets, getBudgetExpenses } = useBudgets()

    function openAddExpenseModal(budgetId) {
        setShowAddExpenseModal(true)
        setAddExpenseModalBudgetId(budgetId)
    }

    return (
        <>
            <Container className='my-4'>
                <Stack direction='horizontal' gap={3} className='mb-4'>
                    <h1 className='me-auto'>Budget</h1>
                    <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
                    <Button variant='outline-primary' onClick={openAddExpenseModal}>Add Expense</Button>
                </Stack>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
                    gap: "1rem",
                    alignItems: "flex-start"
                }}>

                    {
                        budgets.map(budget => {

                            const amount = getBudgetExpenses(budget.id)
                                .reduce((total, expense) => total + expense.amount, 0)


                            return (
                                <BudgetCard
                                    key={budget.id}
                                    name={budget.name}
                                    amount={amount}
                                    max={budget.max}
                                    onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                                >

                                </BudgetCard>
                            )
                        })
                    }

                    <UncategorizedBudgetCard
                        onAddExpenseClick={openAddExpenseModal} />

                    <TotalBudgetCard />
                </div>



            </Container>

            <AddBudgetModal
                show={showAddBudgetModal}
                handleClose={() => { setShowAddBudgetModal(false) }}
            />

            <AddExpenseModal
                show={showAddExpenseModal}
                defaultBudgetId={addExpenseModalBudgetId}
                handleClose={() => setShowAddExpenseModal(false)}
            />



        </>


    )
}

export default App